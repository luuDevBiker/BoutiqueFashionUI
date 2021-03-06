import fb from "../images/fb.png";
import gg from "../images/gg.png";
import { Link, parsePath } from "react-router-dom";
import Request from "../api/instance";
import { useForm } from "react-hook-form";
import { toast , ToastContainer} from "react-toastify";


const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onLogin = async (data) => {
    console.log(data);
    await Request("Login/CheckLogin", "POST", data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Đăng nhập thành công")
          localStorage.setItem("user",JSON.stringify(res.data))
          if(res.data.role === "admin"){
            window.location.href = "/admin"
          }else{
            window.location.href = "/"
          }
        }
      });
  };
  return (
    <div hidden={localStorage.getItem("user")}>
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
                placeholder="UserName"
                required
                {...register("UserName",{ required: true })}
              />
            </div>
            <div className="input-container cnt">
              <input
                type="password"
                placeholder="Mật khẩu"
                required
                {...register("Password",{ required: true })}
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
      <ToastContainer/>
    </div>
  );
}

export default Login;
