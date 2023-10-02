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

const layThongTinSanPham = () => {

  var id = document.getElementById('id').value;
  var phoneName = document.getElementById('name').value;
  var price = document.getElementById('price').value;
  var screen = document.getElementById('screen').value;
  var backCam = document.getElementById('backCam').value;
  var frontCam = document.getElementById('frontCam').value;
  var img = document.getElementById('img').value;
  var desc = document.getElementById('desc').value;
  var brand = document.getElementById('type').value;

  return new Product(id, phoneName,  price, screen, backCam, frontCam, img, desc, brand )
}

document.getElementById('btnAddPhone').onclick = () => {
  // Lấy thông tin sam pham
  const product = layThongTinSanPham()

  // call API thêm mới 
  const promise = axios({
      method: 'POST',
      url: 'https://6512e3cbb8c6ce52b3966a85.mockapi.io/Products',
      data: {
          // spread operator
          ...product
      },
  })

  promise
  .then(() => {
      // call API lấy lại danh sách món ăn mới sau khi thêm thành công
      fetchProductsList1()

       // đóng modal thêm
       document.getElementById('btnClose').click()
  })
  .catch((err) => {
      console.log(err)
  })
}

window.editProduct = (id) => {
  // ẩn btn thêm món
  document.getElementById('btnAddPhone').style.display = 'none'
  //hiện thị btn cập nhật
  // document.getElementById('#btnUpdate').style.display = 'inline-block'
  // call API lấy thông tin san pham
  const promise = axios({
      method: 'GET',
      url: `https://6512e3cbb8c6ce52b3966a85.mockapi.io/Products/${id}`,
  })

  promise.then((result) => {

      // đưa food id vào trong button cập nhật
      document.getElementById('btnUpdate').setAttribute('data-id', result.data.id)

      // parse thông tin product

      const parse = (product) => {
          return {
              ...product,
          }
      }

      
      const product = result.data
      // hiển thị thông tin món ăn lên modal
      // document.getElementById('id').value = product.id
      document.getElementById('name').value = product.name
      document.getElementById('price').value = product.price
      document.getElementById('screen').value = product.screen
      document.getElementById('backCam').value = product.backCamera
      document.getElementById('frontCam').value = product.frontCamera
      document.getElementById('img').value = product.img
      document.getElementById('desc').value = product.desc
      document.getElementById('type').value = product.type
      
  })
}

// function editProduct(id) {
//   layThongTinSanPham(id)
//     .then(function (res) {
//       // lấy được sp cần sửa
//       console.log("res", res.data);
//       var sp = res.data;

//       // hiển thị thông tin sp cần sửa lên modal
//       document.querySelector("#id").value = sp.id;
//       document.querySelector("#name").value = sp.name;
//       document.querySelector("#price").value = sp.price;
//       document.querySelector("#screen").value = sp.screen;
//       document.querySelector("#backCam").value = sp.backCamera;
//       document.querySelector("#frontCam").value = sp.frontCamera;
//       document.querySelector("#img").value = sp.img;
//       document.querySelector("#desc").value = sp.desc;
//       document.querySelector("#type").value = sp.type;

//       // mở modal
//       $("#exampleModal").modal("show");
//     })
//     .catch(function (err) {
//       console.log("err", err);
//     });
// }
// // Bước 2: lấy thông tin từ form sau khi đã chỉnh sửa để cập nhật
// function updateProduct() {
//   var sp = layThongTinSanPham();
//   console.log("sp: ", sp);

//   updateProductByID(sp.id, sp)
//     .then(function (res) {
//       console.log("res", res);

//       //tắt modal sau khi update thành công
//       $("#exampleModal").modal("hide");

//       // lấy lại dssp mới nhất
//       fetchProductsList1();
//     })
//     .catch(function (err) {
//       console.log("err", err);
//     });
// }


window.delProduct = (id) => {
  // call API xóa 
  const promise = axios({
      method: 'DELETE',
      url: `https://6512e3cbb8c6ce52b3966a85.mockapi.io/Products/${id}`,
  })

  promise
      .then(() => {
          // gọi lại api lấy danh sách san pham
          fetchProductsList1();
      })
      .catch((err) => {
          console.log(err)
      })
}
