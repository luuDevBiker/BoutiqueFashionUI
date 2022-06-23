import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Pink from "../images/vot.png";
import SlidebarAdmin from "./SlidebarAdmin";
import NavbarAdmin from "./NavbarAdmin";

const productsInit = [
  {
    id: 1,
    name: "Phí Thị Trang",
    image: Pink,
    Email: "phithitrang27062002@gmail.com",
    Status: "Inactive",
    Address: "Thạch Thất-Hà Nội",
    Numberphone: "0972711729",
  },
  {
    id: 1,
    name: "Phí Thị Nga",
    image: Pink,
    Email: "phithinga03092004@gmail.com",
    Status: "Inactive",
    Address: "Thạch Thất-Hà Nội",
    Numberphone: "0972711729",
  },
  {
    id: 2,
    name: "Phí Thị Thiết",
    image: Pink,
    Email: "phithithiet01051978@gmail.com",
    Status: "Inactive",
    Address: "Thạch Thất-Hà Nội",
    Numberphone: "0972711729",
  },
  {
    id: 2,
    name: "Nguyễn Thị Thanh Bình",
    image: Pink,
    Email: "thanhtyhanh@gmail.com",
    Status: "Inactive",
    Address: "Thạch Thất-Hà Nội",
    Numberphone: "0972711729",
  },
  {
    id: 2,
    name: "Phí Văn Duy",
    image: Pink,
    Email: "phivanduy13062002@gmail.com",
    Status: "Inactive",
    Address: "Thạch Thất-Hà Nội",
    Numberphone: "0972711729",
  },
  {
    id: 2,
    name: "Phí Văn Tư",
    image: Pink,
    Email: "phivantu06031971@gmail.com",
    Status: "Inactive",
    Address: "Thạch Thất-Hà Nội",
    Numberphone: "0972711729",
  },
];

const EmployeeProduct = () => {
  const [products, setFroduct] = useState([]);
  const [loading, setLoading] = useState(false);
  //call api => return data => setFroduct(data);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setFroduct(productsInit);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className='hoso'>
    <SlidebarAdmin />
    <div className="hosoContainer">
        <NavbarAdmin />
    <div className="container mt-5">
      <Row>
        <Col sm={2}>
          <Form.Select aria-label="Default select example">
            <option>Lọc</option>
            <option value="1">Từ thấp đến cao</option>
            <option value="2">Từ cao đến thấp</option>
          </Form.Select>
        </Col>
        <Col className="w-100">
          <div className="d-flex justify-content-end">
            <Button variant="warning">
              <FontAwesomeIcon icon={faPlus} />
              Thêm Nhân Viê 
            </Button>
          </div>
        </Col>
      </Row>
      <Table className="mt-3">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Nhân Viên</th>
            <th>Ảnh</th>
            <th>Email</th>
            <th>Trạng Thái</th>
            <th>Địa Chỉ</th>
            <th>Số Điện Thoại</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </td>
            </tr>
          ) : (
            products?.map((item, index) => (
              <tr key={index}>
                <td>{item?.id}</td>
                <td>{item?.name}</td>
                <td> <img src={Pink} style={{ width: 70, height: 70, borderRadius: 3 }}></img></td>
                <td>{item?.Email}</td>
                <td>{item?.Status}</td>
                <td>{item?.Address}</td>
                <td>{item?.Numberphone}</td>
                <td>
                <div className="mt-2">
                    <Button variant="success" size="sm">
                    Edit
                    </Button>
                    <Button variant="danger" size="sm">
                    Delete
                    </Button>
                </div>
                 
                </td>
               
              </tr>
              
            )))}
        </tbody>
      </Table>
    </div>
    </div>
    </div>
  );
};

export default EmployeeProduct;