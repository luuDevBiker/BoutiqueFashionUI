import Request from "./instance";




export async function RegisterAccount(url, method, data) {
  return await Request(
    url,
    method,
    data
  ).then(res => {
    console.log(res);
    return res;
  }).catch(err => {
    return err;
  });
}

