import { Link, NavLink } from "react-router-dom";
//import Section, { SectionTitle, SectionBody } from "../components/section";
import "../Don/don.css"
import Logo from "../../images/Logo.png";

function don() {
    return (
        <div className="container mt-5" >

            <div className="row mt-5">
                <div className="col-3 mt-5 ml-11 mb-5">
                <img className="rounded float-left" src={Logo} alt="" />
                
                </div>
                <div  className="col-6 mt-5 ml-3 mb-5">
                    <h3><p>con meo</p></h3>
                    <h5><p>Phân loại: <span>Trắng</span><span>,</span> <span>xl</span></p></h5>

                    <h5><p>x1</p></h5>
                </div>
                <div  className="col-2 mt-5 my-auto  inline-bock">
                    <h2 className="trangthai"><p>Đang chuẩn bị</p></h2>
                    <h3 className="pt-24 bd-highligh"><p>200.000</p></h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-3 mt-5 ml-11 mb-5">
                <img className="rounded float-left" src={Logo} alt="" />
                
                </div>
                <div  className="col-6 mt-5 ml-3 mb-5">
                    <h3><p>con meo</p></h3>
                    <h5><p>Phân loại: <span>Trắng</span><span>,</span> <span>xl</span></p></h5>
                    <h5><p>x1</p></h5>
                </div>
                <div  className="col-2 mt-5 my-auto  inline-bock">
                    <h2 className="trangthai"><p>Đang chuẩn bị</p></h2>
                    <h3 className="pt-24 bd-highligh"><p>200.000</p></h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-3 mt-5 ml-11 mb-5">
                <img className="rounded float-left" src={Logo} alt="" />
                
                </div>
                <div  className="col-6 mt-5 ml-3 mb-5">
                    <h3><p>con meo</p></h3>
                    <h5><p>Phân loại: <span>Trắng</span><span>,</span> <span>xl</span></p></h5>

                    <h5><p>x1</p></h5>
                </div>
                <div  className="col-2 mt-5 my-auto  inline-bock">
                    <h2 className="trangthai"><p>Đang chuẩn bị</p></h2>
                    <h3 className="pt-24 bd-highligh"><p>200.000</p></h3>
                </div>
            </div>
        </div>

    );
}

export default don;
