import Button from "react-bootstrap/Button";
import { Form, Row, Col, Tab, Tabs, ButtonGroup, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleCheck,
  faCircleXmark,
  faFlag,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Skirt from "../../images/skirt.jpg";
import Shoe from "../../images/shoe.jpg";
import Cap from "../../images/cap.jpg";

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
export const Payment = () => {
  return (
    <div className="container mt-5">
      <Alert variant="secondary">Sản phẩm vừa được thêm vào giỏ hàng</Alert>
      {data?.map((x) => (
        <Row className="mt-2 align-items-center">
          <Col xs={4} sm={1}>
            <img
              src={x?.image}
              style={{ width: 120, height: 120, borderRadius: 3 }}
            />
          </Col>
          <Col xs={3} className="mt-3 ms-5">
            <p className="fw-bold">{x?.name}</p>
            <p>
              <FontAwesomeIcon icon={faCircleXmark} /> Xóa
            </p>
            {x?.isAddNew && (
              <p>
                <FontAwesomeIcon icon={faCircleCheck} color="#017801" /> Sản
                phẩm vừa thêm
              </p>
            )}
          </Col>
          <Col xs={6} className="mt-3 ms-4 d-flex justify-content-end">
            <span className="text-warning fw-bold">{x?.price} </span> VND
            <Form.Control
              type="number"
              defaultValue={x?.quanlity}
              style={{ width: 75, marginLeft: 10 }}
            />
            <span className="text-warning fw-bold ms-3">{x?.price} </span> VND
          </Col>
        </Row>
      ))}
      <Alert variant="secondary">
        <Row className="fw-bold text-uppercase">
          <Col>Giỏ hàng của bạn: {data.length} sản phẩm</Col>
          <Col>Tổng tiền thanh toán: 1.280.000 VND</Col>
        </Row>
        <Row className="fw-bold text-uppercase">
          <Col className="d-flex justify-content-center">
            <Button variant="warning">Tới giỏ hàng</Button>
            <Button variant="warning" className="ms-5">
              Tiến hành thanh toán
            </Button>
          </Col>
        </Row>
      </Alert>
    </div>
  );
};
