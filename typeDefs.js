module.exports = `
  enum ProductType {
    product
  }

  enum ActiveStatus {
    draft
    live
  }

  type Price {
    amount: Int!
    currency: String!
    includes_tax: Boolean!
  }

  type Product {
    id: ID!
    type: ProductType!
    name: String!
    description: String!
    slug: String!
    status: ActiveStatus!
    sku: String!
    manage_stock: Boolean!
    price: [Price]
  }

  type Brand {
    id: ID!
    name: String!
    slug: String
    description: String
    status: ActiveStatus
  }

  type Query {
    allProducts: [Product]
    Product(id: ID!): Product
    allBrands: [Brand]
    Brand(id: ID!): Brand
  }
`;
