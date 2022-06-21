import React, { useEffect } from "react";
import Helmet from "../components/helmet";
import HeroSlider from "../components/heroSlider";
import heroSliderData from "../assets/fake-data/hero-slider";
import PolicyCard from "../components/policyCard";
import Grid from "../components/grid";
import ProductCard from "../components/productCard";
import { useState } from "react";
import Section, { SectionTitle, SectionBody } from "../components/section";

import { Link } from "react-router-dom";
import { getAllProducts, getAllProductsByName } from "../api/products";

import policy from "../assets/fake-data/policy";
import banner from "../assets/images/banner.png";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(8);
  const [productsShow, setProductsShow] = useState([]);
  useEffect(() => {
    getAllProducts()
      .then(async (res) => {
        await setProducts(res);
        if (products !== undefined) {
          await setProductsShow(products.slice(page - 8, page));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePage = async (option) => {
    let lengthProducts = products.length;
    if (option === "next") {
      let temPage = page + 8 > lengthProducts ? lengthProducts : page + 8;
      await setPage(temPage);
      await setProductsShow(products.slice(page - 8, page));
    } else {
      let temPage = page - 8 <= 0 ? 8 : page - 8;
      await setPage(temPage);
      await setProductsShow(products.slice(page - 8, page));
    }
  };

  return (
    <Helmet title="Trang chủ">
      {/* hero slider */}

      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />

      {/* end hero slider */}

      {/* policy section */}

      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      {/* end policy section */}

      {/* best selling section */}
      <div className="form">
        <input
          className="mx-8 text-3xl text-bold w-1/4 bg-blue-100"
          type="button"
          value={"<"}
          onClick={() => handlePage("prev")}
        />
        <input
          className="mx-8 text-3xl text-bold w-1/4 bg-blue-100"
          type="button"
          value={">"}
          onClick={() => handlePage("next")}
        />
      </div>
      <Section>
        <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productsShow.map((item, index) => (
              //   console.log(item)
              <Link key={index} to={`catalog/${item.skuId}`}>
                <ProductCard items={item} />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      {/* end best selling section */}

      {/* banner */}

      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>

      {/* end banner */}

      {/* popular product section */}

      {/* end popular product section */}
      <div className="form">
        <input
          className="mx-8 text-3xl text-bold w-1/4 bg-blue-100"
          type="button"
          value={"<"}
          onClick={() => handlePage("prev")}
        />
        <input
          className="mx-8 text-3xl text-bold w-1/4 bg-blue-100"
          type="button"
          value={">"}
          onClick={() => handlePage("next")}
        />
      </div>
    </Helmet>
  );
};

export default Home;
