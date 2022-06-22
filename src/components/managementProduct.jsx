import { useEffect , useState } from "react";
import Button from "react-bootstrap/Button";
import React from 'react';
import { ReactDOM } from "react";
import { Col, Form , Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Cap from "../images/cap.jpg";
import axios from 'axios';


const ManagamentProduct = () => {
        const [file, setFile] = useState()
        function handleChange(event) {
          setFile(event.target.files[0])
        }
        function handleSubmit(event) {
          event.preventDefault()
          const url = 'http://localhost:3000/uploadFile';
          const formData = new FormData();
          formData.append('file', file);
          formData.append('fileName', file.name);
          const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
          axios.post(url, formData, config).then((response) => {
            console.log(response.data);
          });
        }
      
           
    return (
        <div className="container mt-2">
            <div className="d-flex justify-content-end">
                <Button variant="orange">
                    <FontAwesomeIcon icon={faPlus} />
                    Save 
                </Button>
            </div>
            <Table className="mt-2">
                <thead>
                    <tr>
                        <th color="orange">Thông Tin Sản Phẩm</th>
                        <th>Mô Tả</th>
                    </tr>
                </thead>
            </Table>
            <Form className="mt-3">
                <Form.Group className="mb-3" controlId="formBasicTenSp">Tên Sản Phẩm
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicGiaNhap">Giá Nhập 
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicGiaBan">Giá Bán
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSoLuong">Số Lượng
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="formBasicAnh">Ảnh
                <Form.Control type="file" onChange={handleChange}  name="image" accept="image/png, image/jpg"/>
                <img src={Cap}></img> Upload
                </Form.Group>
            </Form>
        </div>
    );
};

export default ManagamentProduct;