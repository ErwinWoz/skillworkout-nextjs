import '../styles/globals.css'
import Nav from '../components/navbar/Nav';
import Footer from '../components/Footer';
import { UserProvider } from '@auth0/nextjs-auth0';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <UserProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>  
    </>
  ) 
}

export default MyApp
