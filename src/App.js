import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Menu from "./components/Menu"
import ButtonLink from "./components/ButtonLink"
import ContactUs from './components/ContactUs'
import HomePage from './components/HomePage'
import Error from "./components/Error"
import ProductList from "./components/Products/ProductList"
import Reviews from "./components/Products/Reviews"
import Sharewith from "./components/Products/Sharewith"
import Product from "./components/Products/Product"

import "./index.css"

// import AboutUs from './components/AboutUs'
const LazyAboutUs = React.lazy(() => import('./components/AboutUs'))

function App() {
  return (
    <>
      <Menu />
      <ButtonLink />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact-us" element={<ContactUs />} />
        
        {/* <Route path="about-us" element={<AboutUs />} /> */}
        <Route path="about-us" element={
          <React.Suspense fallback="Loading..">
            <LazyAboutUs />
          </React.Suspense>
        } />

        <Route path="products/:productId" element={<Product />} />
        <Route path="products" element={<ProductList />} >
          <Route index element={<Reviews />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="share-with" element={<Sharewith />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
