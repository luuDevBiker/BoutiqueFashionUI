import React, { useState } from "react";
import { Link } from "react-router-dom";
function ForgetPass(props) {
  const [user, setUser] = useState("");
  const haldeClick = () => {
    console.log("getPass", user);
  };
  return (
    <div className="forget-pass-page form">
      <h1>Quên mật khẩu</h1>
      <div className="cnt">
        <p>
          Vùi lòng nhập tên người dùng hoặc địa chỉ email của bạn. Bạn sẽ nhận
          được một email với hướng dẫn về cách đặt lại mật khẩu của bạn.
        </p>
      </div>

      <div className="cnt" style={{ width: "100%" }}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <label>Nhập mật Email hoặc tên người dùng</label>
          <div className="input-container cnt fg-p">
            <input
              type="text"
              value={user}
              name="password"
              required
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="button-container btn-fg">
            <input
              type="submit"
              value="Lấy lại mật khẩu"
              onClick={haldeClick}
            />
          </div>
          <Link to={"/register"} className="register">
            Đăng kí
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass;
