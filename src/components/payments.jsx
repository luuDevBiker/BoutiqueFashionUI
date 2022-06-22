import Button from "react-bootstrap/Button";
import { Form, Row, Col, Tab, Tabs, ButtonGroup, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faCircle,
  faCircleCheck,
  faCircleXmark,
  faFlag,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
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
export const payments = () => {
  return (
    <div className="container mt-5">
      <Row>
        <Col sm={7}>
          <img style={{ width: 150, height: 100, borderRadius: 3 }} src={Logo} />
          <Row>
            <Col sm={6} className="pl-2">
              <div className="fw-bold"><h4> Thông tin nhận hàng</h4></div>
              <Form className="mt-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Họ Và Tên" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="number" placeholder="Số Điện Thoại" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Địa Chỉ" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Select>
                    <option>Tỉnh Thành</option>
                    <option>Đà Nẵng</option>
                    <option>TP.HCM</option>
                    <option>Hà Nội</option>
                    <option>Quảng Ninh</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Select>
                    <option>Quận Huyện</option>
                    <option>Đà Nẵng</option>
                    <option>TP.HCM</option>
                    <option>Hà Nội</option>
                    <option>Quảng Ninh</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Select>
                    <option>Phường Xã</option>
                    <option>Đà Nẵng</option>
                    <option>TP.HCM</option>
                    <option>Hà Nội</option>
                    <option>Quảng Ninh</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control as="textarea" rows={3} placeholder="Ghi chú" />
                </Form.Group>
              </Form>
            </Col>
            <Col sm={4}>
              <div className="fw-bold"><h4>Vận chuyển</h4> </div>
              <div className="border border-secondary p-2 mt-3 rounded">
                <Form.Check type="radio" label="Giao Hàng Tận Nơi" />
                <div className="ms-4">40.000 VND</div>
              </div>
              <div className="fw-bold mt-5">Thanh Toán</div>
              <div className="border border-secondary p-2 mt-2 rounded">
                <Form.Check type="radio" label="Thanh Toán Khi Nhận Hàng" />
              </div>
              <div className="bg-light text-center">
                <span className="p-4">
                  Bạn chỉ phải thanh toán khi nhận được hàng
                </span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={5}>
          <div className="fw-bold"><h4> Đơn Hàng(2 Sản Phẩm)</h4></div>
          <div className="d-flex align-items-center mt-3">
            <img
              src={Shoe}
              style={{ width: 80, height: 80, borderRadius: 3 }}
            />
            <span className="ms-4"><h4> Giầy Sneaker</h4></span>
            <span className="ms-4"><h5>1</h5></span>
            <span className="ms-4"><h4> 850.000 VND</h4></span>
          </div>
          <div className="d-flex align-items-center mt-2">
            <img src={Cap} style={{ width: 80, height: 80, borderRadius: 3 }} />
            <span className="ms-4"><h4> Mũ Vành Tròn</h4></span>
            <span className="ms-4"><h5>1</h5></span>
            <span className="ms-4"><h4>140.000 VND</h4></span>
          </div>
          <hr />
          <Row>
            <Col sm={8}>
              <Form.Control type="text" placeholder="Mã Giảm Giá" />
            </Col>
            <Col sm={4} className="d-flex justify-content-end">
              <Button variant="warning" className="w-100">
                Áp Dụng
              </Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={8}><h4>Tạm Tính</h4> </Col>
            <Col sm={4} className="d-flex justify-content-end">
              <h3>980.000 VND</h3> 
            </Col>
          </Row>
          <Row>
            <Col sm={8}><h4> Phí Áp Dụng</h4></Col>
            <Col sm={4} className="d-flex justify-content-end">
              <h3>40.000 VND</h3> 
            </Col>
          </Row>
          <hr />
          <Row className="fw-bold">
            <Col sm={8}><h4> Tổng Cộng</h4></Col>
            <Col sm={4} className="d-flex justify-content-end">
              <h3>1.020.000 VND</h3> 
            </Col>
          </Row>
          <Row className="fw-bold mt-4">
            <Col sm={8}>
              <FontAwesomeIcon icon={faAngleLeft} />
               Quay về giỏ hàng
            </Col>
            <Col sm={4} className="d-flex justify-content-end">
              <Button variant="warning" className="w-100">
                Đặt Hàng
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default payments;