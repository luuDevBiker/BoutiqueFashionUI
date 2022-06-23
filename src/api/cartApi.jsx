import Request from "./instance";

export const addProductToCart = async (item) =>{
    return await Request("Cart/AddProductInCart","POST",item)
}

export const getAllProductInCart = async (userID) =>{
    return await Request(`Cart/GetProductInCart/${userID}`,"GET",{})
}