import '../styles/globals.css'
import App, { Container } from 'next/app';
import { AppContextProvider } from "../context/ProductsContext";
function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )

}

export default MyApp
