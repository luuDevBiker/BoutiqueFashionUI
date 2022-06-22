import Button from "react-bootstrap/Button";
import { Form, Row, Tab, Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

const Editemployee = () => {
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
        <Tab eventKey="info" title="Thông Tin Nhân Viên">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tên Nhân Viên</Form.Label>
              <Form.Control type="text" placeholder="Enter name employee" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="number" placeholder="Enter email employee" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Địa Chỉ</Form.Label>
              <Form.Control type="number" placeholder="Enter Address employee" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control type="text" placeholder="Enter phonnumber employee" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Trạng thái</Form.Label>
              <Form.Control type="number" placeholder="Enter status employee" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ngày Sinh</Form.Label>
              <Form.Control type="number" placeholder="Enter date of bird employee" />
            </Form.Group>
          </Form>
        </Tab>
        
      </Tabs>
    </div>
  );
};

export default Editemployee;
