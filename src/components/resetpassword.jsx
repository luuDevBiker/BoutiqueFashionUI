import React, {useState} from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import Request from "../api/instance";

const ResetPassword = () => {
    const [formValues, setFormValues] = useState({});
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Request("forgetPass/resetpassword", "POST", formValues).then((res) => {
      console.log(res);
    });
  };
    return(
        <div className="justify-content-center">
            <div className="reset-password form">
                <div className="form">
                    <img src={Logo} width= "65%" height="20%" className="mx-auto d-block"></img>
                </div>
                <div className="cnt">
                    <p><h1>Đặt Lại Mật Khẩu</h1></p>
                </div>
            </div>
            <div className="cnt" style={{ width: "100%" }}>
                <div style={{ width: "30%", textAlign: "center" }}>
                    <label><h5 className="d-flex justify-content-between">Nhập Mật Khẩu Mới Cho Tài Khoản</h5></label>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container cnt">
                            <input
                            type="text"
                            name="newpassword"
                            placeholder="Mật Khẩu Mới"
                            onChange={hanldeChange}
                            required
                            />
                        </div>
                        <div className="input-container cnt">
                            <input
                            type="text"
                            name="importnewpassword"
                            placeholder="Nhập Lại Mật Khẩu Mới"
                            onChange={hanldeChange}
                            required
                            />
                        </div>
                        <div className="button-container cnt">
                            <input type="submit" value="Gửi Thông Tin"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;