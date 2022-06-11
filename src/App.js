import { Routes, Route, BrowserRouter } from "react-router-dom";
import ForgetPass from "./components/forgetPass";
import Login from "./components/login";
import Register from "./components/register";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
