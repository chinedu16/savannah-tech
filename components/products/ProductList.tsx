import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import tableLamp from "../../public/table-lamp.svg";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setSkip } from "../../features/productSlice";
import { useRouter } from "next/router";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const ProductList: React.FC = () => {
  const dispatch = useDispatch<any>()
  const router = useRouter();
  const { products = [], skip, total } = useSelector((state: any) => state.products);


  useEffect(() => {
    // Fetch initial set of products
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleLoadMore = () => {
    const currentSkip = skip;
    const nextSkip = currentSkip === 0 ? currentSkip + 8 : currentSkip;

    dispatch(setSkip(nextSkip));

    if (total > products.length) {
      dispatch(fetchProducts());
    }
  };

  // Check if the current route matches /product/[productId]
  const isProductDetailPage = router.pathname.startsWith(
    "/product/[productId]"
  );

  return (
    <div className="py-20">
      {!isProductDetailPage && ( // Render the button only if not on the product detail page
        <div className="space-y-2 w-full text-center">
          <div className="text-xl">Featured Products</div>
          <h2 className="text-2xl font-bold text-tex">BESTSELLER PRODUCTS</h2>
          <div>Problems trying to resolve the conflict between</div>
        </div>
      )}

      {isProductDetailPage && ( // Render the button only if not on the product detail page
        <div className="space-y-2 w-full">
          <div className="text-2xl font-bold">BESTSELLER PRODUCTS</div>
        </div>
      )}

      {!isProductDetailPage && ( // Render the button only if not on the product detail page
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.thumbnail}
              discountPercentage={product.discountPercentage}
            />
          ))}
        </div>
      )}

      {isProductDetailPage && ( // Render the button only if not on the product detail page
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.slice(0, 8).map((product: any) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.thumbnail}
              discountPercentage={product.discountPercentage}
            />
          ))}
        </div>
      )}

      {!isProductDetailPage && ( // Render the button only if not on the product detail page
        <div className="mt-20 flex justify-center">
          <Button
            className={`${montserrat.className}`}
            size="large"
            disabled={skip >= total}
            variant="outlined"
            onClick={handleLoadMore}
          >
            LOAD MORE PRODUCTS
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
