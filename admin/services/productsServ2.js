const BASE_URL = "https://6512e3cbb8c6ce52b3966a85.mockapi.io/Products";

function getProductList(name) {
  return axios({
    url: BASE_URL,
    method: "GET",

    // những cặp key-value khai báo bên trong object params sẽ được gửi lên url theo định dạng
    // example.com/products?key1=value1&key2=value2
    params: {
      tenSP: name || undefined,
    },
  });
}

function delProductByID(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
}

function addNewProduct(sp) {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: sp,
  });
}

function getProductByID(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
}

function updateProductByID(id, sp) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
    data: sp,
  });
}