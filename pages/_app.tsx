// pages/_app.tsx

import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import "../styles/global.css";
import store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
