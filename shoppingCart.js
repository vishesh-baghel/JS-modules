//Exporting module
console.log(`Exporting module`);

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 222;
const totalQuantity = 2;

export { totalPrice, totalQuantity };
