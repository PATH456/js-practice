import {products} from "./products.js"
import {ProductCard} from "./ProductCard.js"

export function renderProductHTML() {
  const productDisplay = document.getElementById("products-container");
  let html = '';
  products.forEach((product) => {
    html += ProductCard(product);
  })
  productDisplay.innerHTML = html;
}