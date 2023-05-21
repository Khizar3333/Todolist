import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return( 
    <>
    <Header/>
    <div className="container  mx-auto min-h-screen w-full">
  <Component {...pageProps} />
  </div>
  <Footer/>
  </>
  )
}
