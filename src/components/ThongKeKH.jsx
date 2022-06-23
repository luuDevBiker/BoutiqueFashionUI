import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { Col, Form, Row } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import SlidebarAdmin from "./SlidebarAdmin";
import NavbarAdmin from "./NavbarAdmin";


const productsInit = [

  {
    id: 1,
    name: "Trang",
    totalorders:"29",
    total: "400.000",
    grossproduct: "20",
  },
  {
    id: 2,
    name: "Trang",
    totalorders:"29",
    total: "400.000",
    grossproduct: "20",
  },
  {
    id: 3,
    name: "Trang",
    totalorders:"29",
    total: "400.000",
    grossproduct: "20",
  },
  {
    id: 4,
    name: "Trang",
    totalorders:"29",
    total: "400.000",
    grossproduct: "20",
  },
  {
    id: 5,
    name: "Trang",
    totalorders:"29",
    total: "400.000",
    grossproduct: "20",
  },
  {
    id: 6,
    name: "Trang",
    totalorders:"29",
    total: "400.000",
    grossproduct: "20",
  },
];

const StatisticalKH = () => {
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
        <Col sm={9}>
        <Dropdown sm={5}>
  <Dropdown.Toggle variant="warning" id="dropdown-basic">
   Lọc Khách Hàng
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Số sản phẩm bán chạy nhất</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Số sản phẩm không bán chạy</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </Col>
        <Col sm={3}>
          <div className="d-flex justify-content-end">
          <Form.Control  placeholder="Tìm kiếm sản phẩm" />
          </div>
        </Col>
      </Row>
      <Table className="mt-2">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Khách Hàng</th>
            <th>Tổng Số Đơn Hàng</th>
            <th>Tổng Số Tiền</th>
            <th>Tổng Số Sản Phẩm</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <>
              {products?.map((item) => (
                <tr>
                  <td key={item.id}>{item.id}</td>
                  <td>{item?.name}</td>
                  <td>{item?.totalorders}</td>
                  <td>{item?.total}</td>
                  <td>{item?.grossproduct}</td>            
                </tr>
              ))}
            </>
          )}
        </tbody>
      
      </Table>
      
    </div>

 </div>
 </div>
   
  );
};

export default StatisticalKH;