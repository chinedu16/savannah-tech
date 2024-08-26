// pages/_app.tsx
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Open_Sans } from "next/font/google";

import store from "../store";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={openSans.className}>
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default MyApp;
