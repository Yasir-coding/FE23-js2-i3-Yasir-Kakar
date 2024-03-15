import { createAndAppend, productNotFound } from "./modules/display.ts";
import { getProducts, getSearchProducts } from "./modules/fetch.ts";

const container = document.querySelector('#productContainer') as HTMLDivElement;
const form = document.querySelector("#searchForm") as HTMLFormElement;

getProducts().then(Products =>{

for(const product in Products){
  
  createAndAppend(Products[product].title, Products[product].description, Products[product].price, Products[product].rating, Products[product].stock, Products[product].category, Products[product].thumbnail, container );
};

});  

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  container.innerHTML = "";
  let searchInput = document.querySelector("#searchInput") as HTMLInputElement;
  
   getSearchProducts(searchInput.value).then(Products =>{
    if (Products.length <= 0) {
      productNotFound("Product not found", container)
    }
    
    for(const product in Products){
      
      createAndAppend(Products[product].title, Products[product].description, Products[product].price, Products[product].rating, Products[product].stock, Products[product].category, Products[product].thumbnail, container );
    };
    
    });  
})