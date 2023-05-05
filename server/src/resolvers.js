const resolvers = {
  Query: {
    // returns an array of products that will be used to populate the homepage grid of our web client
    products: (_, __, { dataSources }) => {
      return dataSources.productsAPI.getProducts();
    },

    // get a single product by ID, for the product page
    product: (_, { id }, { dataSources }) => {
      return dataSources.productsAPI.getProduct(id);
    },

    // get cart products
    cartProducts: (_, __, { dataSources }) => {
      return dataSources.cartProductsAPI.getCartProducts();
    },
  },
  //   Mutation: {
  //     // increments a product's numberOfViews property
  //     incrementproductViews: async (_, { id }, { dataSources }) => {
  //       try {
  //         const product = await dataSources.productAPI.incrementproductViews(id);
  //         return {
  //           code: 200,
  //           success: true,
  //           message: `Successfully incremented number of views for product ${id}`,
  //           product,
  //         };
  //       } catch (err) {
  //         return {
  //           code: err.extensions.response.status,
  //           success: false,
  //           message: err.extensions.response.body,
  //           product: null,
  //         };
  //       }
  //     },
  //   },
};

module.exports = resolvers;
