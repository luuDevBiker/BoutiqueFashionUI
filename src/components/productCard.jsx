import React from "react";
import PropTypes from "prop-types";
import {useNavigate,generatePath,createPath} from "react-router";
import Button from "./button";
import numberWithCommas from "../utils/numberWithCommas";

const ProductCard = (props) => {
  let navigate = useNavigate();
  let product = props.items;
  return (
    <div onClick={() => {window.history.pushState(null, null, `/catalog/${product.skuId}`)}} className="product-card">
      <div  className="product-card__image">
        <img src={product.images.filter(img => img.isShow == true)[0].thumbNail} alt="" />
        <img src={product.images.filter(img => img.isShow == true)[1].thumbNail} alt="" />
      </div>
      <h3 className="product-card__name">
        {product.productsName} - {product.skuId}
      </h3>
      <div className="product-card__price">
        {numberWithCommas(product.price)}
        <span className="product-card__price__old">
          <del>{numberWithCommas(399000)}</del>
        </span>
      </div>
      <div className="product-card__btn">
        <Button
          size="sm"
          icon="bx bx-cart"
          animate={true}
        >
          chọn mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  items: PropTypes.object.isRequired,
};

export default ProductCard;
