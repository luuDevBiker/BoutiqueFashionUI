import axios from "axios";

export const productApi  = {
  getAllProducts(name) {
    return axios({
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      url: `https://localhost:7211/api/ProductDetail/GetAllProductDetail?$filter=skuId eq '${name}`,
    });
  }
}

