import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Helmet from "./helmet";

import { getAllProducts } from "../api/products";
import Section, { SectionBody, SectionTitle } from "./section";
import Grid from "./grid";
import ProductCard from "./productCard";
import ProductView from "./productView";

const Product = (props) => {
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState([]);
  const { skuId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        if (res) {
          setLoading(true);
          setProduct(res);
          let item =  res.filter((item) => item.skuId === skuId);
          setProductId(item);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
      window.scrollTo(0,0)
  }, [product])
  return (
    <>
      {loading ? (
        <Helmet title={productId[0].skuId}>
          <Section>
            <SectionBody>
              <ProductView product={productId[0]}/>
            </SectionBody>
          </Section>
          <Section>
            <SectionTitle>Khám phá thêm</SectionTitle>
            <SectionBody>
              <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {
                             product.map((item, index) => (
                                 <ProductCard
                                     key={index}
                                    items={item}/>
                             ))
                         }
              </Grid>
            </SectionBody>
          </Section>
        </Helmet>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Product;
