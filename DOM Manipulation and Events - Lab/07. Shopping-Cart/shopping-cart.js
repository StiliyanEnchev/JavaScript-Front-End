document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let addButtons = document.getElementsByClassName('add-product');
   let checkOut = document.querySelector('.checkout');
   let textAreas = document.querySelector('textarea')
   let cart = {};

   for (let button of addButtons) {
      button.addEventListener('click', onBuyClick);
   }


   function onBuyClick(event) {
      let producRow = event.target.parentElement.parentElement;
      let name = producRow.querySelector('.product-title').textContent;
      let price = Number(producRow.querySelector('.product-line-price').textContent);
      textAreas.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

      if (!cart[name]) {
         cart[name] = 0;
      }
      cart[name] += price;
   }


   checkOut.addEventListener('click', onCheckOut);

   function onCheckOut() {
      let products = [];
      let total = 0;

      for (let name in cart) {
         products.push(name);
         total += cart[name];

      }
      textAreas.value += `You bought ${products.join(', ')} for ${total.toFixed(2)}.`;

      document.querySelectorAll('button').forEach(button => {
         button.disabled = true;
      });
   }


}
