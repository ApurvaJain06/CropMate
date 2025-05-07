const products = [
    {
      id: 1,
      name: "Urea Fertilizer",
      price: 450,
      image: "https://via.placeholder.com/250x150?text=Urea+Fertilizer"
    },
    {
      id: 2,
      name: "DAP Fertilizer",
      price: 1200,
      image: "https://via.placeholder.com/250x150?text=DAP+Fertilizer"
    },
    {
      id: 3,
      name: "Organic Compost",
      price: 300,
      image: "https://via.placeholder.com/250x150?text=Organic+Compost"
    },
    {
      id: 4,
      name: "Potash Fertilizer",
      price: 800,
      image: "https://via.placeholder.com/250x150?text=Potash+Fertilizer"
    }
  ];
  
  let cart = [];
  
  function loadProducts() {
    const productContainer = document.getElementById('products');
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(card);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ₹${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });
  
    totalPrice.textContent = total;
  }
  
  function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
  }
  
  // Load products on page load
  window.onload = loadProducts;
  