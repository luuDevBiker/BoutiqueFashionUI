import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getProductsByName } from '../api/products'
import { useParams } from 'react-router-dom'
import Button from './button'

const ProductView = (props) => {
    const {product} = props

    const [previewImg, setPreviewImg] = useState("")

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }   
    const addToCart = () => {
        console.log("addToCart");
    }

    const goToCart = () => {
        console.log("goToCart");
    }
    return (
        <>
 
            <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    {
                        product.images && 
                        product?.images.map((item, index) => {
                            return (
                                <div key={index} className="product__images__list__item" onClick={() => setPreviewImg(item.thumbNail)}>
                                    <img src={item.thumbNail} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mx-4 product__images__main">
                    <img src={previewImg?previewImg: product?.images.filter(i => i.isShow === true )[0].thumbNail} alt="" />
                </div>
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                    <div className="product-description__toggle">
                        <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {
                                descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{product.description}</h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {product.price}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Số lượng
                    </div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
                    <Button onClick={() => goToCart()}>mua ngay</Button>
                </div>
            </div>
            <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                <div className="product-description__toggle">
                    <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
            </div>
        </div>
             
        </>
        
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default ProductView;

