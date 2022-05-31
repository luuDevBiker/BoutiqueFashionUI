import axios from "axios";
// thay đổi url của api ở đây thì call auto pass
const baseUrl = "https://localhost:7211/api/";

axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://localhost:7211/",
    "Access-Control-Allow-Methods": "GET,POST,DELETE",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Max-Age": "1728000",
    "Access-Control-Expose-Headers": "*"
  },
});

export default function Request(url, method, data) {
  return axios({
    url: baseUrl + url,
    mode : 'cors',
    method: method,
    data: data
  });
}