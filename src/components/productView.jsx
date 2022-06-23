import React, { useState } from "react";
import PropTypes from "prop-types";
import { addProductToCart } from "../api/cartApi";
import Button from "./button";
import { injectStyle } from "react-toastify/dist/inject-style";
import { toast, ToastContainer } from "react-toastify";
if (typeof window !== "undefined") {
  injectStyle();
}
const ProductView = (props) => {
  const { product } = props;

  const [previewImg, setPreviewImg] = useState("");

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const messNotify = async (mess, option) => {
    if (option === "success") {
       toast.success(mess, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (option === "error") {
       toast.error(mess, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (option === "warning") {
      await toast.warning(mess, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        rtl: false,
      });
    }
  };
  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  const addToCart = async () => {
    if (JSON.parse(localStorage.getItem("user"))) {
      let itemAddCart = {
        productId: product.productId,
        variantId: product.variantId,
        productName: product.productsName,
        images: product.images,
        quantity: quantity,
        price: product.price,
        userId: JSON.parse(localStorage.getItem("user")).userID,
      };
      await addProductToCart(itemAddCart)
        .then(async (res) => {
          console.log(res);
          if (res.status === 200 && res.data === true) {
            await messNotify("Thêm vào giỏ hàng thành công", "success");
          }else{
            await messNotify("Thêm vào giỏ hàng thất bại", "error");
          }
        })
        .catch(async (err) => {
          await messNotify("Thêm vào giỏ hàng thất bại", "error");
        });
    } else {
      messNotify("Hãy đăng nhập để mua hàng", "warning");
    }
  };

  const goToCart = () => {
    window.history.pushState(null,null,"/cart");
    window.location.reload();
  };
  return (
    <>
      <div className="product">
        <div className="product__images">
          <div className="product__images__list">
            {product.images &&
              product?.images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="product__images__list__item"
                    onClick={() => setPreviewImg(item.thumbNail)}
                  >
                    <img src={item.thumbNail} alt="" />
                  </div>
                );
              })}
          </div>
          <div className="mx-4 product__images__main">
            <img
              src={
                previewImg
                  ? previewImg
                  : product?.images.filter((i) => i.isShow === true)[0]
                      .thumbNail
              }
              alt=""
            />
          </div>
          <div
            className={`product-description ${
              descriptionExpand ? "expand" : ""
            }`}
          >
            <div className="product-description__title">Chi tiết sản phẩm</div>
            <div
              className="product-description__content"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            <div className="product-description__toggle">
              <Button
                size="sm"
                onClick={() => setDescriptionExpand(!descriptionExpand)}
              >
                {descriptionExpand ? "Thu gọn" : "Xem thêm"}
              </Button>
            </div>
          </div>
        </div>
        <div className="product__info">
          <h1 className="product__info__title">{product.description}</h1>
          <div className="product__info__item">
            <span className="product__info__item__price">{product.price}</span>
          </div>
          <div className="product__info__item">
            <div className="product__info__item__title">Số lượng</div>
            <div className="product__info__item__quantity">
              <div
                className="product__info__item__quantity__btn"
                onClick={() => updateQuantity("minus")}
              >
                <i className="bx bx-minus"></i>
              </div>
              <div className="product__info__item__quantity__input">
                {quantity}
              </div>
              <div
                className="product__info__item__quantity__btn"
                onClick={() => updateQuantity("plus")}
              >
                <i className="bx bx-plus"></i>
              </div>
            </div>
          </div>
          <div className="product__info__item">
            <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
            <Button onClick={() => goToCart()}>mua ngay</Button>
          </div>
        </div>
        <div
          className={`product-description mobile ${
            descriptionExpand ? "expand" : ""
          }`}
        >
          <div className="product-description__title">Chi tiết sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default ProductView;
