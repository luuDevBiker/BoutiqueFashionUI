import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ForgetPass from "./components/forgetPass";
import Login from "./components/login";
import Register from "./components/register";
import { TableComponent } from "./components/table";
import ProductDetail from "./components/productDetails";
import { Cart } from "./components/cart";
import { Payment } from "./components/payment";
import Header from".//pages/header";
import Footer from"./pages/footer";
import Home from "./pages/home";
import Product from "./components/product";
import Catalog from "./components/catalog";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPass />} />
        <Route path="/table" element={<TableComponent />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path='/catalog/:slug' component={Product}/>
        <Route path='/catalog' component={Catalog}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
