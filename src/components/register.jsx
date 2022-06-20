import React, { useState } from "react";
import fb from "../images/fb.png";
import gg from "../images/gg.png";
import { RegisterAccount } from "../api/user";
import { useForm } from "react-hook-form";
import Request from "../api/instance";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const onRegister = async (data) => {
    let response = RegisterAccount("Login/Register","POST", data);
    console.log(response);
  };

  return (
    <div className="container">
      <div className="form">
        <div className="w-1/2 h-32 inline-block bg-red-100 ">
          <img className="w-full h-full" src={fb} alt="" />
        </div>
        <div className="w-1/2 h-32 inline-block bg-red-100">
          <img className="w-full h-full" src={gg} alt="" />
        </div>
      </div>
      <h3 className="text-center">Đăng Kí</h3>
      <form className="text-center w-1/2" onSubmit={handleSubmit(onRegister)}>
        <div>
          <div>
            <input
              className="w-1/2 my-4 border-none hover:bg-gray-200"
              type="text"
              placeholder="Tên đăng nhập"
              required
              {...register("username", { required: true })}
            />
          </div>
          <div>
            <input
              className="w-1/2 my-4 border-none hover:bg-gray-200"
              style={{ outline: "none" }}
              type="password"
              placeholder="Mật khẩu"
              required
              {...register("password", { required: true })}
            />
            <div>
              <input
                className="w-1/2 my-4 border-none hover:bg-gray-200"
                type="text"
                placeholder="Số điện thoại"
                required
                {...register("sdt", { required: true })}
              />
            </div>
            <div>
              <input
                className="w-1/2 my-4 border-none hover:bg-gray-200"
                type="text"
                placeholder="Email"
                required
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="mx-4">
            <input
              className="h-8 rounded-xl w-1/5 my-4 border-none bg-blue-100 hover:bg-blue-200"
              type="submit"
              value="Đăng kí"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
