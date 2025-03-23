// Dummy product data
const products = {
    "small-flex-bag": {
        name: "Small Convertible Flex Bag",
        price: "$320.00 CAD",
        oldPrice: "$420.00 CAD",
        description: "Our architectural, origami-inspired shoulder bag. Smooth leather with a two-way zip fastening.",
        images: ["./images/AMJP3.jpg", "./images/AMJP4.jpg"],
        details: {
            materials: "Made from premium leather with a soft suede touch.",
            shipping: "Free shipping worldwide. 30-day return policy.",
            dimensions: "Height: 10 inches, Width: 8 inches, Depth: 4 inches.",
            care: "Wipe with a damp cloth. Store in a dust bag when not in use."
        }
    },
    "studio-bag": {
        name: "Studio Bag",
        price: "$465.00 CAD",
        oldPrice: "",
        description: "A stylish, minimalistic handbag made from premium materials.",
        images: ["./images/balmain1.jpg", "./images/balmain2.jpg"],
        details: {
            materials: "Made from premium leather with a soft suede touch.",
            shipping: "Free shipping worldwide. 30-day return policy.",
            dimensions: "Height: 10 inches, Width: 8 inches, Depth: 4 inches.",
            care: "Wipe with a damp cloth. Store in a dust bag when not in use."
        }
    }
};

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Find the product data
const product = products[productId];

if (product) {
    // Update the page with product data
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = product.price;
    
    // Hide old price if it's empty
    const oldPriceElement = document.getElementById("product-old-price");
    if (product.oldPrice) {
        oldPriceElement.innerText = product.oldPrice;
    } else {
        oldPriceElement.style.display = "none";
    }

    document.getElementById("product-description").innerText = product.description;

    // Update images
    document.getElementById("product-main-img").src = product.images[0];
    document.getElementById("product-thumb1").src = product.images[0];
    document.getElementById("product-thumb2").src = product.images[1];

    // Populate Collapsible Sections
    const collapsibleContents = document.querySelectorAll(".collapsible-content");
    const detailsArray = Object.values(product.details);

    collapsibleContents.forEach((content, index) => {
        content.textContent = detailsArray[index];
    });

    // Add Toggle Functionality
    document.querySelectorAll(".collapsible").forEach((btn, index) => {
        btn.addEventListener("click", function () {
            const content = collapsibleContents[index];
            const icon = btn.querySelector("i.fa-chevron-down");

            content.classList.toggle("hidden");
            content.style.maxHeight = content.classList.contains("hidden") ? "0px" : "150px";
            icon.classList.toggle("rotate-180");
        });
    });

} else {
    document.body.innerHTML = "<h1 class='text-center text-red-500 text-3xl'>Product Not Found</h1>";
}
