function renderProductsList(productsList) {
  var content = "";
  for (var i = 0; i < productsList.length; i++) {
    
    var product = productsList[i];
    var contentTr = `
      <div class="my-3 col-12 col-sm-6 col-lg-4">
      <div class="card animate__animated animate__zoomIn">
        <img
          src="${product.img}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">
           ${product.name}
          </h5>
          <p class="card-text">
            ${product.price} <br>
            ${product.screen} <br>
            ${product.backCamera} <br>
            ${product.frontCamera} <br>
            ${product.desc}
          </p>
          <div class="mx-auto align-middle">
          <button type="button" class="btn btn-danger"  onclick = "addProduct('${product.id}')">THÊM</button>
          </div>
        </div>
      </div>
    </div>
          `;

    content += contentTr;
  }

  //in danh sách ra giao diện.
  document.querySelector("#phoneList").innerHTML = content;
}
