const { RESTDataSource } = require("@apollo/datasource-rest");

class ProductsAPI extends RESTDataSource {
  // the products is hosted on this server
  baseURL = "http://localhost:8000/";

  getProducts() {
    return this.get("products");
  }
  getProduct(ProductsId) {
    return this.get(`products/${ProductsId}`);
  }
  //   incrementProductsViews(ProductsId) {
  //     return this.patch(`Products/${ProductsId}/numberOfViews`);
  //   }
}

module.exports = ProductsAPI;
