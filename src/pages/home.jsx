import React , { useEffect } from 'react'
import Helmet from '../components/helmet'
import HeroSlider from '../components/heroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import PolicyCard from '../components/policyCard'
import Grid from '../components/grid'
import ProductCard from '../components/productCard'
import { useState } from 'react'
import Section, { SectionTitle, SectionBody } from '../components/section'

import { Link } from 'react-router-dom'
import { getAllProducts , getAllProductsByName } from '../api/products'

import policy from '../assets/fake-data/policy'
import banner from '../assets/images/banner.png'

const Home = () => {
    const [products, setProducts] = useState()
    useEffect (() => {
        getAllProducts().then(res => {
            setProducts(res)
        }).catch(err => {
            console.log(err)
        });
    },[]);
    console.log(products);
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
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>

            {/* end policy section */}

            {/* best selling section */}

            <Section>
                <SectionTitle>
                    top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            products && products.map((item, index) => (
                            <Link key={index} to={`catalog/${item.skuId}`}>
                            <ProductCard  items={item}/>
                            </Link>
                            ))
                        }
                        
                       
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

            {/* <Section>
                <SectionTitle>
                    phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section> */}

            {/* end popular product section */}
        </Helmet>
    )
}

export default Home
