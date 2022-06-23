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
        <Link className="inline-block" to="/admin/thongkesp" style={{ textDecoration: "none"}}>
            <li>
                <BarChartSharpIcon className="icon" />
              <span>Thống Kê Sản Phẩm</span>
            </li>
            </Link>
            <Link className="inline-block" to="/admin/thongkeKH" style={{ textDecoration: "none"}}>
            <li className="mn">
              <span>Thống Kê Khách Hàng</span>
            </li>
            </Link>
            <p className="title">Quản Lý</p>
            <Link className="inline-block" to="/admin/qlinv" style={{ textDecoration: "none"}}>
            <li>
                <BadgeSharpIcon className="icon" />
              <span>Quản Lý Nhân Viên</span>
            </li>
            </Link>
            <Link className="inline-block" to="/admin/qlikh" style={{ textDecoration: "none"}}>
            <li>
                <GroupSharpIcon className="icon" />
              <span>Quản Lý Khách Hàng</span>
            </li>
            </Link>
            <li>
                <DescriptionSharpIcon className="icon inline-block" />
              <span>Quản Lý Hóa Đơn</span>
            </li>
            <li>
                <ReceiptLongIcon className="icon inline-block" />
              <span>Quản Lý Đơn Hàng</span>
            </li>
            <p className="title">Người Dùng</p>
            <Link className="inline-block" to="/admin/hosoadmin" style={{ textDecoration: "none"}}>
            <li>
                <AccountCircleSharpIcon className="icon inline-block" />
                <span>Hồ Sơ</span>
            </li>
            </Link>
            <li>
                <LogoutSharpIcon className="icon inline-block" />
                <span>Đăng Xuất</span>
            </li>
        </ul>
    </div>
</div>
  )
}

export default SlidebarAdmin