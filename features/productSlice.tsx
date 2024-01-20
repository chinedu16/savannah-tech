// productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";

interface Product {
  // your product type
  id: any;
  count: number;
  price:  number;
  thumbnail: string;
  title: string;
  stock: number

}

interface ProductState {
  products: Product[];
  skip: number;
  limit: number;
  total: number;
  wishlist: Product[]; // New array to store wishlist items
  cart: Product[]; // New array to store cart items
}

const initialState: ProductState = {
  products: [],
  skip: 0,
  limit: 8,
  total: 0,
  wishlist: [], // Initialize wishlist as an empty array
  cart: [], // Initialize cart as an empty array
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.skip = 0;
    },
    loadMoreProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = [...state.products, ...action.payload];
      state.skip += action.payload.length;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setSkip: (state, action: PayloadAction<number>) => {
      state.skip = action.payload;
    },
    setWishlist: (state, action: PayloadAction<Product[]>) => {
      state.wishlist = action.payload;
    },
    setCart: (state, action: PayloadAction<Product[]>) => {
      state.cart = action.payload;
    },
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const existingItem = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item is already in the wishlist, increment its count
        existingItem.count += 1;
      } else {
        // If the item is not in the wishlist, add it with count 1
        state.wishlist.push({ ...action.payload, count: 1 });
      }

      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item is already in the cart, increment its count
        existingItem.count += 1;
      } else {
        // If the item is not in the cart, add it with count 1
        state.cart.push({ ...action.payload, count: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const productIdToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productIdToRemove);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromWishlist: (state, action: PayloadAction<Product>) => {
      const productIdToRemove = action.payload;
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== productIdToRemove
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },

    decrementQuantity: (state, action: PayloadAction<Product>) => {
      const productIdToDecrease = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === productIdToDecrease
          ? { ...item, count: Math.max(item.count - 1, 1) }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    incrementQuantity: (state, action: PayloadAction<Product>) => {
      const productIdToIncrement = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === productIdToIncrement
          ? { ...item, count: Math.max(item.count + 1) }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  setProducts,
  loadMoreProducts,
  setTotal,
  setSkip,
  setWishlist,
  setCart,
  addToWishlist,
  addToCart,
  removeFromCart,
  removeFromWishlist,
  incrementQuantity,
  decrementQuantity,
} = productSlice.actions;

// Selector to get the wishlist from the state
export const selectWishlist = (state: RootState) => state.products.wishlist;

// Selector to get the cart from the state
export const selectCart = (state: RootState) => state.products.cart;

// Exporting the selectors
export const productSelectors = {
  selectWishlist,
  selectCart,
};

export const fetchProducts = (): AppThunk => async (dispatch, getState) => {
  const { skip, limit } = getState().products;

  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (skip === 0) {
      dispatch(setProducts(data.products));
    } else {
      dispatch(loadMoreProducts(data.products));
    }

    dispatch(setTotal(data.total));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export default productSlice.reducer;
