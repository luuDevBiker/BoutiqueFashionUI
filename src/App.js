import { Routes, Route, BrowserRouter } from "react-router-dom";
import ForgetPass from "./components/forgetPass";
import Login from "./components/login";
import Register from "./components/register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TableComponent } from "./components/table/table";
import { ProductDetail } from "./components/productDetail";
import { Cart } from "./components/cart/Cart";
import { Payment } from "./components/payment/Payment";
import Header from"./components/Header/header";
import Footer from"./components/Footer/footer";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPass />} />
        <Route path="/table" element={<TableComponent />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
