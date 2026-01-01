let cart = JSON.parse(localStorage.getItem("cart")) || [];
update();

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  update();
}

function update() {
  document.getElementById("cart-count").innerText = cart.length;
}
