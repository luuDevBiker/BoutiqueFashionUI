import Request from "./instance";

const getAllProducts = () => {
    return Request("ProductDetail/GetAllProductDetail","GET",{}).then(res => {
        return res.data
    })
}
const getProductsByName = async (name) => {
    return await Request(`ProductDetail/GetAllProductDetail?$filter=skuId eq '${name}'`,"GET",{}).then(res => {
        return res.data
    })
}

export { getAllProducts , getProductsByName };







