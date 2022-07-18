//Importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';

import * as ShoppingCart from './shoppingCart.js';

console.log(`Importing module`);
ShoppingCart.addToCart('bread', 5);
console.log(`${ShoppingCart.totalPrice} and ${ShoppingCart.totalQuantity}`);

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();

const lastPost2 = await getLastPost();
console.log(lastPost2);
