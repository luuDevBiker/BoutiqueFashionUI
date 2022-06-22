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
    name: "Áo",
    importprice:"180.000",
    inventory: "150",
    Sold: "16",
    Price:"200.000",
  },
  {
    id: 2,
    name: "Áo",
    importprice:"180.000",
    inventory: "150",
    Sold: "16",
    Price:"200.000",
  },
  {
    id: 3,
    name: "Áo",
    importprice:"180.000",
    inventory: "150",
    Sold: "16",
    Price:"200.000",
  },
  {
    id: 4,
    name: "Áo",
    importprice:"180.000",
    inventory: "150",
    Sold: "16",
    Price:"200.000",
  },
  {
    id: 5,
    name: "Áo",
    importprice:"180.000",
    inventory: "150",
    Sold: "16",
    Price:"200.000",
  },
  {
    id: 6,
    name: "Áo",
    importprice:"180.000",
    inventory: "150",
    Sold: "16",
    Price:"200.000",
  },
];

export const Statisticalsp = () => {
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
   Lọc Sản Phẩm 
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
            <th>Tên Sản Phẩm</th>
            <th>Giá Vốn</th>
            <th>Tồn Kho</th>
            <th>Đã Bán</th>
            <th>Giá Bán</th>
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
                  <td>{item?.importprice}</td>
                  <td>{item?.inventory}</td>
                  <td>{item?.Sold}</td>
                  <td>{item?.Price}</td>               
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

export default Statisticalsp;