
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';

import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { Link } from "react-router-dom";
import "../sass/components/menutkkh.scss";

const MenuTKKH = () => {
  return (  
    <div className="slidebar">
    <div className="center">
        <ul>
            <li>
                <AccountCircleIcon className="icon" />
              <span>Tài Khoản Của Tôi</span>
            </li>
            <Link to="/hosokh" style={{ textDecoration: "none"}}>
            <li className='mn'>
              <span>Hồ  Sơ</span>
            </li>
            </Link>
            <li className='mn'>
              <span>Đổi Mật Khẩu</span>
            </li>
            <li>
                <DescriptionSharpIcon className="icon" />
              <span>Đơn Mua</span>
            </li>
            <li>
                <LogoutSharpIcon className="icon" />
                <span>Đăng Xuất</span>
            </li>
        </ul>
    </div>
    <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
    </div>
</div>
  )
}

export default MenuTKKH