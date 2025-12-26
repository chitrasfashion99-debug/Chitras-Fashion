let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart");
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let message = "Hi, I want to order:%0A";
  let total = 0;

  cart.forEach((item, i) => {
    message += `${i + 1}. ${item.name} - ₹${item.price}%0A`;
    total += item.price;
  });

  message += `%0ATotal: ₹${total}%0AFrom Chitra’s Fashion`;

  window.open(
    "https://wa.me/919307624841?text=" + message,
    "_blank"
  );
}
