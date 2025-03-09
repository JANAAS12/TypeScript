var _a;
// Define an array of 3 Product objects
var persons = [
    {
        name: "Aya",
        age: 18
    },
    {
        name: "Layla",
        age: 20
    },
    {
        name: "Eman",
        age: 30
    },
];
for (var i = 0; i < persons.length; i++) {
    if (persons[i].age > 18)
        console.log("Adult");
    else
        console.log("Minor");
}
var teacher1 = {
    name: "John",
    subjects: ["Science", "English"]
};
console.log(teacher1);
// Define an array of 3 Product objects
var products = [
    {
        name: "Laptop",
        quantity: 7,
        description: "A powerful laptop",
        price: 999.99
    },
    {
        name: "Headphones",
        description: "A smartphone",
        quantity: 8,
        price: 149.99
    },
    {
        name: "Smartphone",
        description: "A compact tablet",
        quantity: 3,
        price: 799.99
    }
];
for (var i = 0; i < products.length; i++) {
    if (products[i].quantity > 5)
        products[i].price = products[i].price - (products[i].price * 0.15);
    console.log(products[i]);
}
//////////////////////////
// Function to get products from localStorage
function getProducts() {
    return JSON.parse(localStorage.getItem("products") || "[]");
}
// Function to save products to localStorage
function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}
function loadProducts() {
    var products = getProducts();
    var container = document.getElementById("productContainer");
    if (!container)
        return;
    container.innerHTML = "";
    products.forEach(function (product) {
        var card = document.createElement("div");
        card.className = "card m-2";
        card.style.width = "18rem";
        card.innerHTML = "\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">".concat(product.name, "</h5>\n                <p class=\"card-text\">").concat(product.description, "</p>\n                <p class=\"card-text\">Quantity: ").concat(product.quantity, "</p>\n                <p class=\"card-text\">Price: $").concat(product.price.toFixed(2), "</p>\n            </div>\n        ");
        container.appendChild(card);
    });
}
function addProduct(event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var description = document.getElementById("description").value.trim();
    var quantity = parseInt(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("price").value);
    if (!name || !description || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
        alert("Please enter valid product details!");
        return;
    }
    var products = getProducts();
    products.push({ name: name, description: description, quantity: quantity, price: price });
    saveProducts(products);
    loadProducts();
    document.getElementById("productForm").reset();
}
document.addEventListener("DOMContentLoaded", loadProducts);
(_a = document.getElementById("productForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", addProduct);
