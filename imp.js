// JavaScript version of the Haya Boutique website

document.addEventListener("DOMContentLoaded", function() {
    console.log("Page Loaded: Haya Boutique Home");

    // Navigation menu toggle for mobile view
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const navMenu = document.querySelector("#navmenu ul");

    mobileNavToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
        console.log("Navigation menu toggled");
    });

    // Sample product list
    const products = [
        { id: 1, name: "Stylish T-Shirt", price: 599, originalPrice: 999, image: "assets/img/services/Product-1.png" },
        { id: 2, name: "Casual Sneakers", price: 1499, originalPrice: 2099, image: "assets/img/services/Product-2.png" },
        { id: 3, name: "Trendy Backpack", price: 2499, originalPrice: 3099, image: "assets/img/services/Product-3.png" }
    ];

    // Dynamically insert products into the page
    const productContainer = document.querySelector(".product-container");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Premium quality product.</p>
            <del>₹${product.originalPrice}</del> <p class="price">₹${product.price}</p>
            <button onclick="buyNow(${product.id})">Buy Now</button>
        `;

        productContainer.appendChild(productCard);
        console.log(`Product Loaded: ${product.name}`);
    });
});

// Function to handle Buy Now button click
function buyNow(productId) {
    console.log(`Buy Now clicked for product ID: ${productId}`);
    window.location.href = "pay.html?product=" + productId;
}
