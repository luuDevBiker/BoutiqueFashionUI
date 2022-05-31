import React, { useState } from "react";
import fb from "../images/fb.png";
import gg from "../images/gg.png";
import { Link } from "react-router-dom";
import Request from "../api/instance";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onLogin = (data) => {
    data.userName = "";
    data.phoneNumber = 0;
    console.log(data);
    Request("Login/CheckLogin", "POST", data)
      .then((res) => {
        console.log(res);
      });
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
        <div>
          <form onSubmit={handleSubmit(onLogin)}>
            <div className="input-container cnt">
              <input
                type="text"
                placeholder="Email"
                required
                {...register("email",{ required: true })}
              />
            </div>
            <div className="input-container cnt">
              <input
                type="password"
                placeholder="Mật khẩu"
                required
                {...register("password",{ required: true })}
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
    </div>
  );
}

export default Login;
