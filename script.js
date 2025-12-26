let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  let message = "Hi, I want to order:%0A%0A";
  let total = 0;

  cart.forEach((item, index) => {
    message += (index + 1) + ". " + item.name + " - ₹" + item.price + "%0A";
    total += item.price;
  });

  message += "%0ATotal: ₹" + total + "%0AFrom Chitra’s Fashion";

  // 🔴 REPLACE WITH YOUR NUMBER (NO +, NO SPACES)
  let phoneNumber = "919307624841";

  window.open("https://wa.me/" + phoneNumber + "?text=" + message, "_blank");
}


