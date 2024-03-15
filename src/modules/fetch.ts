const baseUrl:string = 'https://dummyjson.com/products';

type Products = {
  title: string,
  description: string,
  price: number,
  rating: number,
  stock: number,
  category: "smartphones"|
  "laptops"|
  "fragrances"|
  "skincare"|
  "groceries"|
  "home-decoration"|
  "furniture"|
  "tops"|
  "womens-dresses"|
  "womens-shoes"|
  "mens-shirts"|
  "mens-shoes"|
  "mens-watches"|
  "womens-watches"|
  "womens-bags"|
  "womens-jewellery"|
  "sunglasses"|
  "automotive"|
  "motorcycle"|
  "lighting",
  thumbnail: string
  }


async function getProducts():Promise <Products[]>{
  const url = baseUrl;

  const res = await fetch(url);
  const products = await res.json();

  return products.products as Products[];
}

async function getSearchProducts(searhInput:string):Promise <Products[]>{
  const url = baseUrl + `/search?q=${searhInput}`;

  const res = await fetch(url);
  const products = await res.json();

  return products.products as Products[];
}

export {getProducts, getSearchProducts}