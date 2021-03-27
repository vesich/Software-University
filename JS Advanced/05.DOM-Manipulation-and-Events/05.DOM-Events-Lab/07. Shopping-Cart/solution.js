function solve() {

   const output = document.querySelector('textarea');
   const cart = [];

   document.querySelector('.shopping-cart').addEventListener('click', (ev) => {
      if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
         const product = ev.target.parentNode.parentNode;
         const title = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({ title, price });

         output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
      }
   })

   document.querySelector('.checkout').addEventListener('click', () => {
      const result = cart.reduce((acc, c) => {
         acc.items.push(c.title);
         acc.total += c.price;
         return acc;
      }, { items: [], total: 0 });

      output.value += `You bought ${result.items.join(", ")} for ${result.total.toFixed(2)}.`;
   });
}


// function solve() {

//    const addBtns = Array.from(document.querySelectorAll(".shopping-cart button"))
//    const textarea = document.querySelector(".shopping-cart textarea")

//    document.querySelector(".shopping-cart").addEventListener('click', doSomething)

//    function doSomething(e) {
//       if (e.target.tagName == "BUTTON" && e.target.className == "add-product") {
//          return addToList(e)
//       } else if (e.target.tagName == "BUTTON" && e.target.className == "checkout") {
//          return checkout()
//       }

//    }
//    let cart = {};
//    function addToList(e) {
//       const product = e.target.parentNode.parentNode
//       const productName = product.querySelector(".product-title").textContent
//       const productPrice = Number(product.querySelector(".product-line-price").textContent)
//       textarea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
//       if (!cart[productName]) {
//          cart[productName] = 0
//       }
//       cart[productName] += productPrice
//    }

//    function checkout() {
//       textarea.value += `You bought ${Array.from(Object.keys(cart)).join(", ")} for ${Object.values(cart).reduce((a, c) => a + c).toFixed(2)}.`
//       addBtns.forEach(button => button.disabled = true);
//    }
// }