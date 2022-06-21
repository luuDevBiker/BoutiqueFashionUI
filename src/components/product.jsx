import React , {useState , useEffect}from 'react'
import { useParams } from 'react-router-dom'
import Helmet from './helmet'


import { getProductsByName } from '../api/products'
import Section, {SectionBody, SectionTitle} from './section'
import Grid from './grid'
import ProductCard from './productCard'
import ProductView from './productView'

const Product = props => {
    const[product , setProduct] = useState({})
    const { skuId } = useParams()
    useEffect(() => {
        if(!skuId) return

        console.log("skuId",skuId)
        getProductsByName(skuId).then( res => {
            setProduct(...res)
        }).catch(err => {
            console.log(err);
        })
    },[])
    useEffect(() => {
        window.scrollTo(0,0)
    }, [product])
    return (
        <Helmet title={product && product?.productsName}>
            <Section>
                 <SectionBody>
                     {/* <ProductView product={product&&product}/> */}
                 </SectionBody>
             </Section>
             <Section>
                 <SectionTitle>
                     Khám phá thêm
                 </SectionTitle>
                 <SectionBody>
                     <Grid
                         col={4}
                         mdCol={2}
                         smCol={1}
                         gap={20}
                     >
                         {/* {
                             .map((item, index) => (
                                 <ProductCard
                                     key={index}
                                     img01={item.image01}
                                     img02={item.image02}
                                     name={item.title}
                                     price={Number(item.price)}
                                     slug={item.slug}
                                 />   
                             ))
                         } */}
                     </Grid>
                 </SectionBody>
             </Section>
        </Helmet>
    )
}

export default Product
