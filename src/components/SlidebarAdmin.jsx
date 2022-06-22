import "../sass/components/slidebaradmin.scss"
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import BadgeSharpIcon from '@mui/icons-material/BadgeSharp';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { Link } from "react-router-dom";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const SlidebarAdmin = () => {
  return (
    <div className="slidebar">
    <div className="top">
        <span className="logo">Boutique</span>
    </div>
    <hr />
    <div className="center">
        <ul>
        <Link to="/thongkesp" style={{ textDecoration: "none"}}>
            <li>
                <BarChartSharpIcon className="icon" />
              <span>Thống Kê Sản Phẩm</span>
            </li>
            </Link>
            <Link to="/thongkeKH" style={{ textDecoration: "none"}}>
            <li className="mn">
              <span>Thống Kê Khách Hàng</span>
            </li>
            </Link>
            <p className="title">Quản Lý</p>
            <Link to="/qlinv" style={{ textDecoration: "none"}}>
            <li>
                <BadgeSharpIcon className="icon" />
              <span>Quản Lý Nhân Viên</span>
            </li>
            </Link>
            <Link to="/qlikh" style={{ textDecoration: "none"}}>
            <li>
                <GroupSharpIcon className="icon" />
              <span>Quản Lý Khách Hàng</span>
            </li>
            </Link>
            <li>
                <DescriptionSharpIcon className="icon" />
              <span>Quản Lý Hóa Đơn</span>
            </li>
            <li>
                <ReceiptLongIcon className="icon" />
              <span>Quản Lý Đơn Hàng</span>
            </li>
            <p className="title">Người Dùng</p>
            <Link to="/hosoadmin" style={{ textDecoration: "none"}}>
            <li>
                <AccountCircleSharpIcon className="icon" />
                <span>Hồ Sơ</span>
            </li>
            </Link>
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

export default SlidebarAdmin