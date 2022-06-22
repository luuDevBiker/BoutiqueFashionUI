import Button from "react-bootstrap/Button";
import { Form, Row, Col, Tab, Tabs, ButtonGroup, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faCircle,
  faCircleCheck,
  faCircleXmark,
  faFlag,
  faPrint,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
// import Logo from "../../images/Logo.png";
// import Shoe from "../images/shoe.jpg";
// import Cap from "../images/cap.jpg";
import Logo from "../images/Logo.png";
import Shoe from "../images/shoe.jpg";
import Cap from "../images/cap.jpg";


const data = [
  {
    id: 1,
    name: "Giày Sneaker",
    image: Shoe,
    price: "840.000",
    quanlity: 3,
    isAddNew: false,
  },
  {
    id: 2,
    name: "Mũ Vành Tròn",
    image: Cap,
    price: "140.000",
    quanlity: 1,
    isAddNew: true,
  },
];
export const paid = () => {
  return (
    <div className="container mt-5">
      <Row>
        <Col sm={7}>
          <img style={{ width: 100, height: 100, borderRadius: 3 }} src={Logo} />
          <div className="mt-3">
            <FontAwesomeIcon icon={faCircleCheck} color="green" /> Cảm ơn bạn đã
            mua hàng
          </div>
          <Row className="fw-bold bg-light mt-4">
            <Col sm={6} className="pl-2">
              <div className="p-6"><h3>Thông tin mua hàng</h3></div>
              <div className="p-2"><h4>Họ Và Tên : Nguyễn Khắc Kiên</h4></div>
              <div className="p-2"><h4>Email : Khackienvd02@gmail.com</h4></div>
              <div className="p-2"><h4> Số Điện Thoại : 0869.835.318</h4></div>
              <div className="p-2"><h4>
              Phương thức thanh toán: Thanh toán khi nhận hàng
              </h4>
              </div>
            </Col>
            <Col sm={6} className="pl-2">
              <div className="p-6"><h3> Địa chỉ nhận hàng</h3></div>
              <div className="p-2"><h4>Họ Và Tên : Nguyễn Khắc Kiên</h4></div>
              <div className="p-2"><h4>Email : Khackienvd02@gmail.com</h4></div>
              <div className="p-2"><h4>Địa Chỉ: Vàng Danh-Uông Bí-Quảng Ninh</h4></div>
              <div className="p-2"><h4> Số Điện Thoại : 0869.835.318</h4></div>
              <div className="p-2"><h4>
              Phương thức vận chuyển: Giao hàng tận nơi
              </h4>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={5}>
          <div className="fw-bold"><h4> Đơn Hàng #1026(2)</h4></div>
          <hr />
          <div className="d-flex align-items-center mt-5">
            <img src={Shoe} style={{ width: 90, height: 100, borderRadius: 3 }} />
            <span className="w-100 ms-5"><h4>Giày Sneaker</h4></span>
            <div className="w-100">
              <span className="float-end fw-bold text-warning"><h5> 850.000 đ</h5></span>
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <img src={Cap} style={{ width: 80, height: 85, borderRadius: 3 }} />
            <div className="w-100 ms-5"><h4>Mũ Vành Tròn</h4></div>
            <div className="w-100">
              <span className="float-end fw-bold text-warning"><h5>140.000 đ</h5> </span>
            </div>
          </div>
          <hr />
          <Row>
            <Col sm={8} className="fw-bold">
              <h3>Tạm Tính</h3>
            </Col>
            <Col
              sm={4}
              className="d-flex justify-content-end fw-bold text-warning"
            >
              <h5>980.000 đ</h5> 
            </Col>
          </Row>
          <Row>
            <Col sm={8} className="fw-bold">
              <h3>Phí Áp Dụng</h3> 
            </Col>
            <Col
              sm={4}
              className="d-flex justify-content-end fw-bold text-warning"
            >
              <h5>40.000 đ</h5> 
            </Col>
          </Row>
          <hr />
          <Row className="fw-bold">
            <Col sm={8}><h4> Tổng Cộng</h4></Col>
            <Col
              sm={4}
              className="d-flex justify-content-end fw-bold text-warning"
            >
              <h5>1.020.000 đ</h5> 
            </Col>
          </Row>
          <Row className="fw-bold mt-2">
            <Col sm={8}>
              <Button variant="warning" className="w-100">
                Tiếp tục mua hàng
              </Button>
            </Col>
            <Col sm={4} className="d-flex justify-content-end">
              <Button variant="warning" className="w-100">
                <FontAwesomeIcon icon={faPrint} />
                In
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default paid;