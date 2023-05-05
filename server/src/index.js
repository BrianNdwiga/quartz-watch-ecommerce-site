const Koa = require("koa");
const { ApolloServer } = require("apollo-server-koa");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const ProductsAPI = require("./datasources/products-api");
const CartProductsAPI = require("./datasources/cart-products-api");

async function startApolloServer() {
  const app = new Koa();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ ctx }) => {
      const { cache } = ctx;
      return {
        dataSources: {
          productsAPI: new ProductsAPI({ cache }),
          cartProductsAPI: new CartProductsAPI({cache}),
        },
      };
    },
  });

  await server.start();
  server.applyMiddleware({ app });

  app.use(async (ctx, next) => {
    ctx.cache = server.context().cache;
    await next();
  });

  const port = process.env.PORT || 4000;

  await new Promise((resolve) => app.listen({ port }, resolve));

  console.log(`
    🚀  Server is running
    📭  Query at http://localhost:${port}${server.graphqlPath}
  `);
}

startApolloServer();
