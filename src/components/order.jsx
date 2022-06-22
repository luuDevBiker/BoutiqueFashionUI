import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const productsInit = [
  {
    MHD:"001",
    date: "12/5/2020",
    customer: "Nguyễn Thị Thanh Bình",
    total: "50.000",
    voucher: "0",
    payment: "50.000",
  },
  {
    MHD:"001",
    date: "12/5/2020",
    customer: "Nguyễn Thị Thanh Bình",
    total: "50.000",
    voucher: "0",
    payment: "50.000",
  },
  {
    MHD:"001",
    date: "12/5/2020",
    customer: "Nguyễn Thị Thanh Bình",
    total: "50.000",
    voucher: "0",
    payment: "50.000",
  },
  {
    MHD:"001",
    date: "12/5/2020",
    customer: "Nguyễn Thị Thanh Bình",
    total: "50.000",
    voucher: "0",
    payment: "50.000",
  },
  {
    MHD:"001",
    date: "12/5/2020",
    customer: "Nguyễn Thị Thanh Bình",
    total: "50.000",
    voucher: "0",
    payment: "50.000",
  },
  {
    MHD:"001",
    date: "12/5/2020",
    customer: "Nguyễn Thị Thanh Bình",
    total: "50.000",
    voucher: "0",
    payment: "50.000",
  },
];

export const OrderDetails = () => {
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
      
      <Table className="mt-2">
        <thead>
          <tr>
            <th>Mã Hóa Đơn</th>
            <th>Thời gian</th>
            <th>Khách Hàng</th>
            <th>Tổng Tiền Hàng</th>
            <th>Giảm Giá</th>
            <th>Khách Trả</th>
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
                <td>{item?.MHD}</td>
                <td>{item?.date}</td>
                <td>{item?.customer}</td>
                <td>{item?.total}</td>
                <td>{item?.payment}</td>              
              
              </tr>
            )))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderDetails;