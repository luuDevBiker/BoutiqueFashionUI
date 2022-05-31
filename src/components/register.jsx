import React, { useState } from "react";
import fb from "../images/fb.png";
import gg from "../images/gg.png";
import Request from "../api/instance";
const Register = () => {
  const [formValues, setFormValues] = useState({});
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Request("Login/Register", "POST", formValues).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <div className="form">
        <h1>Đăng Kí Tài Khoản</h1>
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
              name="username"
              placeholder="Họ và tên"
              onChange={hanldeChange}
              required
            />
          </div>
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
              type="text"
              name="phoneNumber"
              placeholder="Số Điện thoại"
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

          <div className="button-container cnt">
            <input type="submit" value="Đăng Nhập" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
