import { Link } from "react-router-dom"
import truck1 from "../../images/cargo-truck 1.png"
import truck2 from "../../images/cargo-truck 2.png"
import truck4 from "../../images/cargo-truck 3.png"
import truck3 from "../../images/cargo-truck 4.png"
import Logo from "../../images/Logo.png"

function Footer() {
    return (
        <>
            <div className="footer" >
                <div className="grid grid-cols-4 ml-6 my-5 gap-5 bg-amber-500 py-10 px-3 " >
                    <div className="grid grid-cols-2">
                        <div>
                            <img src={truck1} alt="" width={"70px"} />
                        </div>
                        <div className="-ml-10">
                            <span className="text-xl text-white">
                                Giao hàng miễn phí
                            </span>
                            <p className="text-sm text-white">
                                Với đơn hàng trên 300.000
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <img src={truck2} alt="" width={"55px"} />
                        </div>
                        <div className="-ml-16">
                            <span className="text-xl text-white">Hỗ trợ 24/7</span>
                            <p className="text-sm text-white">nhanh chóng thuận lợi</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <img src={truck3} alt="" width={"70px"} />
                        </div>
                        <div className="-ml-10">
                            <span className="text-xl text-white">Đổi trả 3 ngày</span>
                            <p className="text-sm text-white">hấp dẫn chưa từng có</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <img src={truck4} alt="" width={"55px"} />
                        </div>
                        <div className="-ml-16">
                            <span className="text-xl text-white">Giá  tiêu chuẩn</span>
                            <p className="text-sm text-white">tiết kiệm 20% giá cả</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-3 ml-24">
                    <div>
                        <div><img src={Logo} alt="" width={"150px"} /></div>
                        <div><p className="my-2">Cửa Hàng thời Trang BOUTIQUE Fashion</p></div>
                        <div><p className="my-2">Trụ sở : Phố Trinh Văn Bô, Nam Từ Liêm, Hà Nội</p></div>
                        <div><p className="my-2">Hotline: 19001128</p></div>
                        <div><p className="my-2">Email: nhom4@gmail.com</p></div>
                    </div>
                    <div className="mt-12 ml-16">
                        <h2 className="text-xl	text-amber-500 font-semibold">VỀ CHÚNG TÔI</h2>
                        <div className="mt-12">




                            <ul>
                                <li className="my-2 mx-4 text-base	"><Link className=" " to={"/forget-password"}>Trang chủ</Link></li>
                                <li className="my-2 mx-4 text-base	"><Link className=" " to={"/forget-password"}>Giới thiệu</Link></li>

                                <li className="my-2 mx-4 text-base	"><Link className=" " to={"/forget-password"}>Sản phẩm</Link></li>
                                <li className="my-2 mx-4 text-base	"><Link className=" " to={"/forget-password"}>Tin tức</Link></li>

                                <li className="my-2 mx-4 text-base	"><Link className=" " to={"/forget-password"}>Liên Hệ</Link></li>


                                {/*                                 
                                <li className="my-2 mx-4 text-base	"><a href="#">Giới thiệu</a></li>
                                <li className="my-2 mx-4 text-base	"><a href="#">Sản phẩm</a></li>
                                <li className="my-2 mx-4 text-base	"><a href="#">Tin tức</a></li>
                                <li className="my-2 mx-4 text-base	"><a href="#">Liên Hệ</a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12" >
                        <h2 className="text-xl	text-amber-500 font-semibold">TIN KHUYẾN MẠI</h2>
                        <div className="mt-12">
                            <ul>
                                <li className="my-2 mx-4 text-base	"><Link className=" " to={"/forget-password"}>Trang chủ</Link></li>
                                <li className="my-2 mx-4 text-base	"><Link className=" " to={"/forget-password"}>Giới thiệu</Link></li>

                                <li className="my-2 mx-4 text-base	"><Link className=" " to={"/forget-password"}>Sản phẩm</Link></li>
                                <li className="my-2 mx-4 text-base	"><Link className=" " to={"/forget-password"}>Tin tức</Link></li>

                                <li className="my-2 mx-4 text-base	"><Link className=" " to={"/forget-password"}>Liên Hệ</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 -ml-2">
                        <h2 className="text-xl	text-amber-500 font-semibold">TỔNG ĐÀI HỖ TRỢ</h2>
                        <div className="grid grid-cols-2">
                            <div className="mt-5">
                                <img src={truck2} alt="" width={"55px"} />
                            </div>
                            <div className="mt-8 -ml-12">
                                <span>Hotline: 19001128</span>
                            </div>
                        </div>
                        <h2 className="mt-5 text-xl	text-amber-500 font-semibold">TỔNG ĐÀI HỖ TRỢ</h2>
                        <input type="text" placeholder="Nhập Email..." className="mt-3 bg-gray-500 rounded text-gray-50	placeholder:text-gray-50 " /><br />
                        <button className="bg-amber-500 text-white p-4 mt-3 ml-16 hover:bg-amber-600 rounded">Đăng Kí</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Footer;