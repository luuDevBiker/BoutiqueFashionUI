import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { Col, Form, Row } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import SlidebarAdmin from "./SlidebarAdmin";
import NavbarAdmin from "./NavbarAdmin";
import { getAllProducts} from "../api/products";
const Statisticalsp = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  //call api => return data => setFroduct(data);

  useEffect(() => {
    getAllProducts()
      .then(async (res) => {
        await setProduct(res);
        await setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <th>Mã</th>
            <th>Tồn Kho</th>
            <th>Đã Bán</th>
            <th>Giá Bán</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <>
              {products?.map((item, index) => (
                <tr>
                  <td key={index}>{index + 1}</td>
                  <td>{item?.productsName}</td>
                  <td>{item?.skuId}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.price}</td>               
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