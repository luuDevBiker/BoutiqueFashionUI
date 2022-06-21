import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { set } from "../redux/product-modal/productModalSlice";
import Button from "./button";

import numberWithCommas from "../utils/numberWithCommas";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  let product = props.items;
  return (
    <div className="product-card">
      <div className="product-card__image">
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
          onClick={() => dispatch(set(product.productsName))}
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
