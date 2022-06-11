import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png"
import anh1 from "../../images/Rectangle 7.png"
import anh4 from "../../images/dress 1.png"
import anh3 from "../../images/trousers 1.png"
import anh2 from "../../images/hawaiian-shirt 1.png"
import anh5 from "../../images/online-shopping 1.png"
import "../../components/Header/Header.css"
function Header() {
    return (
        <>
            <div className="bgi">
                <div className="">
                    <div className="grid grid-cols-3">
                        <div className=" mt-3 ml-3">
                            <div className=""><img className="" src={Logo} alt="" /></div>

                        </div>
                        <div className="">
                            <div className="">
                                <input className=" bg-transparent w-96 py-4 my-4 border-x-0 border-b-2 border-t-0 " type="text" placeholder="Nhập từ khoá tìm kiếm" />
                                <i class="fa-solid fa-magnifying-glass ml-4" ></i>
                            </div>
                        </div>
                        <div className="mt-8 ml-40">
                            <div className="px-3">
                                <Link className="px-3 hover:underline" to={"/Login"}>
                                    Đăng Nhập
                                </Link>

                                <Link className="px-3 hover:underline" to={"/123"}>
                                    Đăng Ký
                                </Link>
                                <Link className="px-3" to={"/123"}>
                                    <i class="fa-solid fa-cart-shopping"> </i>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <nav className="">
                    <div className="grid grid-cols-2 text-center -mt-16">
                        <div className="inline-block text-xl " style={{ width: '500px', margin: '0px 0px 0px 400px' }}>

                            <Link className="px-3 hover:underline hover:text-yellow-200	 " to={"/forget-password"}>Giới Thiệu</Link>
                            <Link className="px-3 hover:underline hover:text-yellow-200" to={"/forget-password"}>Sản Phẩm</Link>
                            <Link className="px-3 hover:underline hover:text-yellow-200" to={"/forget-password"}>Tin Tức</Link>
                            <Link className="px-3 hover:underline hover:text-yellow-200" to={"/forget-password"}> Liên hệ</Link>

                        </div>
                        <div className=" inline-block ">
                            <div className="ml-40">
                                <label htmlFor=" " >Hotline: </label><label className="text-amber-500 text-xl">0369176431</label>

                                {/* <h3 className="ml-16">Hotline:</h3><p> 0369176431 </p>*/}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="grid grid-cols-5  -mt-24">
                <div className="bg-white w-44 h-40 border border-black -mt-4	ml-20 ">
                    <div >
                        <img src={anh1} alt="" className="ml-7"  width={'120px'} height={'50px'}/>
                        <p className="text-center pt-2">Giày</p>
                    </div>
                </div>
                <div className="bg-white w-44 h-40 border border-black -mt-4 ml-16">
                    <div className="">
                        <img src={anh2} alt="" className="ml-11 mt-4" width={'90px'} height={'50px'}/>
                        <p className="text-center pt-2">Áo</p>
                    </div>
                </div>
                <div className="bg-white w-44 h-40 border border-black -mt-4 ml-12">
                    <div><img src={anh3} alt="" className="ml-11 mt-4" width={'85px'} height={'50px'} />
                        <p className="text-center pt-3">Quần</p>
                    </div>
                </div>
                <div className="bg-white w-44 h-40 border border-black -mt-4 ml-8">
                    <div><img src={anh4} alt="" className="ml-12 mt-2" width={'75px'} height={'50px'}/>
                        <p className="text-center pt-1 pb-1">Váy</p>
                </div>
                </div>
                <div className="bg-white w-44 h-40 border border-black -mt-4 ml-2">
                    <div><img src={anh5} alt="" className="ml-8 mt-2" width={'120px'} height={'50px'}/>
                        <p className="text-center -pt-2 pb-3">Áo</p>
                </div>
                </div>
                {/* <div className="mx-16 -px-7">
                    <img className="w-32 " src={anh1} alt="" />
                </div>
                <div className="mx-16 -pr-10">
                    <img className="w-32" src={anh1} alt="" />
                </div>
                <div className="mx-16 -px-7">
                    <img className="w-32" src={anh1} alt="" />
                </div>
                <div className="mx-16 -px-7">
                    <img className="w-32" src={anh1} alt="" />
                </div>
                <div className="mx-16 -px-7">
                    <img className="w-32" src={anh1} alt="" />
                </div> */}


            </div>

        </>
    );
}



export default Header;
