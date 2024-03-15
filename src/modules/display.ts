
function createAndAppend(title: string, description: string, price: number, rating: number, stock: number, category: string, thumbnail: string, container: HTMLDivElement):void{
  const titleH3 = document.createElement("h3");
  titleH3.innerText = title;
  
  const descriptionP = document.createElement("p");
  descriptionP.innerText = description;
  
  const priceP = document.createElement("p");
  priceP.innerText = "Price: " + price.toString();
  
  const ratingP = document.createElement("p");
  ratingP.innerText = "Rating: " + rating.toString();
  
  const stockP = document.createElement("p");
  stockP.innerText = "Stock: " + stock.toString();
  if (stock < 10) {
    stockP.style.color = "red";
  }

  const categoryP = document.createElement("p");
  categoryP.innerText = "Category: " + category;

  const buyBtn = document.createElement("button");
  buyBtn.innerText = "Add to cart"

  const thumbnailImg = document.createElement("img");
  thumbnailImg.src = thumbnail;

  const productCard = document.createElement("div");
  productCard.append(titleH3, descriptionP, priceP, ratingP, stockP, categoryP, buyBtn, thumbnailImg);

  productCard.classList.add("productCardStyle");

  container.append(productCard)
  
}

function productNotFound(notFound: string, container: HTMLDivElement):void {
  const notFoundH1 = document.createElement("h1");
  notFoundH1.innerText = notFound;
  
  container.append(notFoundH1)
}

export {createAndAppend,productNotFound}