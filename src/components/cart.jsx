import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { getAllProductInCart } from "../api/cartApi";
import Skirt from "../images/skirt.jpg";
import Shoe from "../images/shoe.jpg";
import Cap from "../images/cap.jpg";

export const Cart = () => {
  const [listCart, setListCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      getAllProductInCart(user.userID)
        .then((res) => {
          if (res) {
            setListCart(res.data);
            setLoading(true);
            let total = 0;
            res.data &&
              res.data?.map((item) => {
                total += item.price * item.quantity;
              }).length;
            setTotal(total);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  var nf = new Intl.NumberFormat();
  return (
    <>
      {!loading ? (
        <div>loading</div>
      ) : (
        <div className="container mt-5">
          {listCart &&
            listCart?.map((x) => (
              <Row className="mt-2">
                <Col xs={4} sm={1}>
                  <span style={{ position: "absolute", marginLeft: 2 }}>
                    <div
                      onClick={() => {
                        console.log("delete");
                      }}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                  </span>
                  <img
                    src={x?.images[0]?.thumbNail}
                    style={{ width: 100, height: 100, borderRadius: 3 }}
                  />
                </Col>
                <Col xs={3} className="mt-3 ms-4">
                  <p>
                    {x?.productName}-{x?.skuID}
                  </p>
                  <span className="text-warning fw-bold">{x?.price}</span> x{" "}
                  <span>{x?.quantity}</span>
                  <span>={nf.format(x.quantity * x.price)}</span>
                </Col>
              </Row>
            ))}
          <div className="mt-2 text-red-700">tổng tiền : {nf.format(total)} VND</div>
          <Button variant="warning">Tiến hành thanh toán</Button>
        </div>
      )}
    </>
  );
};
