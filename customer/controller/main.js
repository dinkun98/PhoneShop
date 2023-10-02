function fetchProductsList1(){
  getProductList()
  .then(function (res) {
    console.log("res", res.data);
    renderProductsList(res.data);
  })
  .catch(function (err) {
    console.log("err", err);
  });
}

fetchProductsList1()

let ketQua = [];

document.getElementById("selectList").addEventListener("change", function () {
  let x = this.value;
  ketQua.splice(0, ketQua.length);
  fetchProductsList(x);
});


function fetchProductsList(x) {
  getProductList(x)
    .then(function (res) {
      console.log("res", res.data);
      
      for (var i = 0; i < res.data.length; i++) {
        let product = res.data[i];
        var aaa = product.type.toLowerCase();
        if (aaa === x.toLowerCase()) {
          console.log(product.type);
          ketQua.push(product);
        }
      }

      if (x === "Brands") {
        renderProductsList(res.data);
      } else {
        renderProductsList(ketQua);
      }

    })
    .catch(function (err) {
      console.log("err", err);
    });
}

let cart = []

console.log(cart)

function addProduct(id){
  console.log(id)
  cart.push(id);
}






