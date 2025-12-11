// lib/queries.js

export const categoryQuery = `
  *[_type == "category"]{
    _id,
    title,
    slug
  }
`;

export const allProductsQuery = `
*[_type == "product"]{
  _id,
  title,
  image,
  price,
  "category": category->title,
  "slug": slug.current,
  description
}
`;

export const singleProductQuery = `
*[_type == "product" && slug.current == $slug][0]{
  _id,
  title,
  image,
  price,
  "category": category->title,
  "slug": slug.current,
  description
}
`;
