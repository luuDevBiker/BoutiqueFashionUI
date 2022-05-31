import Request from "./instance";
export function Register(url, method, data) {
  return Request({
    url: url,
    method: method,
    data: data
  });
}

