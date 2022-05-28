import React, { useState } from "react";
import fb from "../images/fb.png";
import gg from "../images/gg.png";
import { Link } from "react-router-dom";
function Login(props) {
  const [formValues, setFormValues] = useState({});
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formValues", formValues);
  };
  return (
    <div>
      <div className="form">
        <h1>Đăng Nhập</h1>
        <div className="login-else">
          <buton className="btn">
            <img src={fb} alt="" />
          </buton>
          <buton className="btn">
            <img src={gg} alt="" />
          </buton>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container cnt">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={hanldeChange}
              required
            />
          </div>
          <div className="input-container cnt">
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              onChange={hanldeChange}
              required
            />
          </div>
          <div className="hero-form cnt">
            <div className="button-container ">
              <input type="submit" value="Đăng Nhập" />
            </div>
            <Link to={"/forget-password"}>Quên mật khẩu</Link>
          </div>
          <div className="footer-form">
            {" "}
            Chưa có tài khoản vui lòng đăng kí{" "}
            <Link to={"/register"}>tại đây</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
