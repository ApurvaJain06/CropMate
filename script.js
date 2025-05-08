document.addEventListener('DOMContentLoaded', () => {
  // 1. Update Copyright Year
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
  }

  // 2. Minimal Cart Functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const cartItemsList = document.getElementById('cartItems');
  const totalPriceSpan = document.getElementById('totalPrice');
  const cartEmptyMsg = document.querySelector('.cart-empty-msg');
  let currentTotal = 0;

  addToCartButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          const productName = event.target.dataset.name;
          const productPrice = parseFloat(event.target.dataset.price);

          if (productName && !isNaN(productPrice)) {
              // Remove "empty cart" message if it exists
              if (cartEmptyMsg && cartItemsList.contains(cartEmptyMsg)) {
                  cartItemsList.removeChild(cartEmptyMsg);
              }

              // Add item to cart list (visually)
              const listItem = document.createElement('li');
              listItem.textContent = `${productName} - ₹${productPrice.toFixed(2)}`;
              cartItemsList.appendChild(listItem);

              // Update total price
              currentTotal += productPrice;
              totalPriceSpan.textContent = currentTotal.toFixed(2);

              alert(`${productName} added to cart!`);
          }
      });
  });

  // 3. Minimal Checkout Functionality
  // The checkout function is already linked via onclick in HTML,
  // but we define it here for clarity or if we wanted to select it differently.
  window.checkout = function() {
      if (currentTotal > 0) {
          alert(`Proceeding to checkout with a total of ₹${currentTotal.toFixed(2)}.\n\n(This is a demo. No payment processing will occur.)`);
          // Here you might clear the cart for a full demo
          // cartItemsList.innerHTML = '<li class="cart-empty-msg">Your cart is currently empty.</li>';
          // currentTotal = 0;
          // totalPriceSpan.textContent = currentTotal.toFixed(2);
      } else {
          alert("Your cart is empty. Please add some products before checking out.");
      }
  };
});