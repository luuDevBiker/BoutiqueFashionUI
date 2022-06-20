import Request from "./instance";

const getAllProducts = () => {
    return Request("ProductDetail/GetAllProductDetail","GET",{}).then(res => {
        return res.data
    })
}
const getAllProductsByName = async (name) => {
    return await Request("ProductDetail/GetAllProductDetail?$filter=productsName eq '"+name+"'","GET",{}).then(res => {
        return res.data
    })
}

export { getAllProducts , getAllProductsByName };







