import Button from "react-bootstrap/Button";
import { Form, Row, Col, Tab, Tabs, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
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
  },
  {
    id: 2,
    name: "Mũ Vành Tròn",
    image: Cap,
    price: "140.000",
    quanlity: 1,
  },
  {
    id: 3,
    name: "Chân váy xếp ly",
    image: Skirt,
    price: "210.000",
    quanlity: 2,
  },
];
export const Cart = () => {
  return (
    <div className="container mt-5">
      {data?.map((x) => (
        <Row className="mt-2">
          <Col xs={4} sm={1}>
            <span style={{ position: "absolute", marginLeft: 2 }}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </span>
            <img
              src={x?.image}
              style={{ width: 100, height: 100, borderRadius: 3 }}
            />
          </Col>
          <Col xs={3} className="mt-3 ms-4">
            <p>{x?.name}</p>
            <span className="text-warning fw-bold">{x?.price}</span> x{" "}
            <span>{x?.quanlity}</span>
          </Col>
        </Row>
      ))}
      <div className="mt-2">Tổng tiền: 3080</div>
      <Button variant="warning">Tiến hành thanh toán</Button>
    </div>
  );
};
