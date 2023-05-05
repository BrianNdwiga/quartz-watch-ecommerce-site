const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "Query to get products array for the homepage grid"
    products: [Product!]!
    "Fetch a specific product, provided a product's ID"
    product(id: ID!): Product!
    "Cart Query"
    cartProducts:[CartProducts]!
  }

  type Product {
    id: ID!
    imageUrl: String!
    name: String!
    brandName: String!
    groupId: String!
    price: Price!
    features: Features
  }

  type Price {
    current: PriceValue!
  }

  type PriceValue {
    text: String!
  }

  type Features {
    BluetoothChip: String
    ScreenSize: String
    ScreenResolution: String
    BatteryCapacity: String
    StandBy: String
    Material: String
    Waterproof: String
  }

  type CartProducts {
    userId: String!
    productId: ID!
    name: String!
    unitPrice: Float!
    img: String!
    quantity: Int!
  }
`;

module.exports = typeDefs;
