import Button from "react-bootstrap/Button";
import { Form, Row, Tab, Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

export const ProductDetail = () => {
  return (
    <div className="container mt-5">
      <Row>
        <div className="d-flex justify-content-end">
          <Button variant="warning">
            <FontAwesomeIcon icon={faFlag} />
            Save
          </Button>
        </div>
      </Row>
      <Tabs defaultActiveKey="info" className="mb-3">
        <Tab eventKey="info" title="Thông Tin Sản Phẩm">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tên Sản Phẩm</Form.Label>
              <Form.Control type="text" placeholder="Enter name product" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Giá Nhập</Form.Label>
              <Form.Control type="number" placeholder="Enter name price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Giá Bán</Form.Label>
              <Form.Control type="number" placeholder="Enter name price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ảnh</Form.Label>
              <Form.Control type="text" placeholder="Enter name product" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Số lượng</Form.Label>
              <Form.Control type="number" placeholder="Enter name price" />
            </Form.Group>
          </Form>
        </Tab>
        <Tab eventKey="description" title="Mô Tả">
          Đây là tab mô tả
        </Tab>
      </Tabs>
    </div>
  );
};
