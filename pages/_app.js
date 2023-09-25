import '../public/assets/css/globals.css';
import "../public/assets/css/StrengthMeter.css";
import { Provider } from 'react-redux';
import { useStore } from '../store/configureStore';
import { SessionProvider } from 'next-auth/react';
function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return <>
  <Provider store={store}>
    <SessionProvider>
  <Component {...pageProps} />
  </SessionProvider>
  </Provider>
  </>
}

export default MyApp
