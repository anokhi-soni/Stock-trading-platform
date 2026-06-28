import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import PricingPage from './landingPage/pricing/PricingPage';
import ProductPage from './landingPage/product/ProductPage';
import SignUp from './landingPage/signup/SignUp';
import SupportPage from './landingPage/support/SupportPage';
import Navbar from './landingPage/NavBar';
import Footer from './landingPage/Footer';
import NotFound from './landingPage/NotFound';
import AboutPage from './landingPage/about/AboutPage';
import Login from './landingPage/login/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar/> {/* Now, we won't need to write this <Navbar/> component in every page*/}
    <Routes>
      <Route path="/" element={<HomePage/>} /> {/* Route 1 */}
      <Route path="/about" element={<AboutPage/>} /> {/* Route 2 */}
      <Route path="/pricing" element={<PricingPage/>} /> {/* Route 3 */}
      <Route path="/product" element={<ProductPage/>} /> {/* Route 4 */}
      <Route path="/signup" element={<SignUp/>} /> {/* Route 5 */}
      <Route path="/login" element={<Login/>} /> {/* Route 6 */}
      <Route path="/support" element={<SupportPage/>} /> {/* Route 7 */}
      <Route path="*" element={<NotFound/>} /> {/* If none of the above paths matches the requested path, this component will be rendered*/}
    </Routes>
    <Footer/>  {/* Now, we won't need to write this <Footer/> component in every page*/}
  </BrowserRouter>
);
