import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const productsInit = [
  {
    id: 1,
    name: "Giày Nike",
    quanlity: 100,
    priceFirst: 1000000,
    priceSale: 1500000,
  },
  {
    id: 2,
    name: "Váy Hoa",
    quanlity: 100,
    priceFirst: 1000000,
    priceSale: 1500000,
  },
  {
    id: 3,
    name: "Quần Nam",
    quanlity: 100,
    priceFirst: 1000000,
    priceSale: 1500000,
  },
  {
    id: 4,
    name: "Áo Cropptop",
    quanlity: 100,
    priceFirst: 1000000,
    priceSale: 1500000,
  },
  {
    id: 5,
    name: "Quần Sịp",
    quanlity: 100,
    priceFirst: 1000000,
    priceSale: 1500000,
  },
  {
    id: 6,
    name: "Quần Vải",
    quanlity: 100,
    priceFirst: 1000000,
    priceSale: 1500000,
  },
];

export const TableComponent = () => {
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
    <div className="container mt-5">
      <Row>
        <Col sm={2}>
          <Form.Select aria-label="Default select example">
            <option>Lọc</option>
            <option value="1">Từ thấp đến cao</option>
            <option value="2">Từ cao đến thấp</option>
            <option value="3">Từ Trẻ trâu tới Trẻ ghé</option>
            <option value="4">Từ Cháu chắt lên Ông Nội</option>
          </Form.Select>
        </Col>
        <Col className="w-100">
          <div className="d-flex justify-content-end">
            <Button variant="warning">
              <FontAwesomeIcon icon={faPlus} />
              Thêm Sản Phẩm
            </Button>
          </div>
        </Col>
      </Row>
      <Table className="mt-2">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Sản Phẩm</th>
            <th>Số Lượng</th>
            <th>Giá Nhập</th>
            <th>Giá Bán</th>
            <th></th>
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
                  <td>{item?.quanlity}</td>
                  <td>{item?.priceFirst}</td>
                  <td>{item?.priceSale}</td>
                  <td>
                    <Button variant="success">Edit</Button>
                    <Button variant="primary" className="ms-3">
                      Detail
                    </Button>
                    <Button variant="danger" className="ms-3">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </Table>
    </div>
  );
};
