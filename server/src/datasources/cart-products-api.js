const { RESTDataSource } = require("@apollo/datasource-rest");

class CartProductsAPI extends RESTDataSource {
  // the products is hosted on this server
  baseURL = "http://localhost:7000/";


  getCartProducts() {
    return this.get("cart");
  }
  //   incrementProductsViews(ProductsId) {
  //     return this.patch(`Products/${ProductsId}/numberOfViews`);
  //   }
}

module.exports = CartProductsAPI;