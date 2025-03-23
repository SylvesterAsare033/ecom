const products = [
    {
        id: "small-convertible-flex-bag",
        name: "Small Convertible Flex Bag",
        price: "From $320.00 CAD",
        oldPrice: "$420.00 CAD",
        image: "./images/AMJP3.jpg",
        hoverImage: "./images/AMJP4.jpg"
    },
    {
        id: "studio-bag",
        name: "Studio Bag",
        price: "$465.00 CAD",
        oldPrice: null,
        image: "./images/balmain1.jpg",
        hoverImage: "./images/balmain2.jpg"
    },
    {
        id: "louise-slide-sandal",
        name: "Louise Slide Sandal",
        price: "$395.00 CAD",
        oldPrice: "$420.00 CAD",
        image: "./images/JB1.jpg",
        hoverImage: "./images/JB2.jpg"
    },
    {
        id: "mini-naomi-bag",
        name: "Mini Naomi Bag",
        price: "From $299.00 CAD",
        oldPrice: "$415.00 CAD",
        image: "./images/GG2.jpg",
        hoverImage: "./images/GG3.jpg"
    },
    {
        id: "audemar-piguet",
        name: "Blue-Leather Strap Audemars Piguet",
        price: "From $9,990.00 CAD",
        image: "./images/AP1.jpg",
        hoverImage: "./images/AP2.jpg"
    }
];

function populateProducts() {
    const productsGrid = document.getElementById("products-grid");
    productsGrid.innerHTML = ""; // Clear existing content

    products.forEach(product => {
        const productHTML = `
            <div class="group relative">
                <a href="/product/${product.id}">
                    <img src="${product.image}" alt="${product.name}" class="w-full transition-opacity duration-300 group-hover:opacity-0">
                    <img src="${product.hoverImage}" alt="${product.name} Hover" class="w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p class="text-sm text-gray-700 mt-2 group-hover:underline">${product.name}</p>
                    ${product.oldPrice ? `<p class="text-xs text-gray-500 line-through">${product.oldPrice}</p>` : ""}
                    <p class="text-sm text-black font-semibold group-hover:underline">${product.price}</p>
                </a>
            </div>
        `;
        productsGrid.innerHTML += productHTML;
    });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", populateProducts);
