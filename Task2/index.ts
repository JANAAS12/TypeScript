interface Person {
    name: string;
    age: number;
}

// Define an array of 3 Product objects
const persons: Person[] = [
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

for(let i=0;i<persons.length;i++){
    if(persons[i].age>18)
        console.log("Adult");
    else
    console.log("Minor");
}
////////////////////////

interface Teacher {
    name: string;
    subjects: string[]; // Array of strings
}

let teacher1: Teacher = {
    name: "John",
    subjects: ["Science", "English"]
};

console.log(teacher1);
//////////////////////////

interface Product {
    name: string;
    quantity: number;
    description:string;
    price: number;
}

// Define an array of 3 Product objects
const products: Product[] = [
    {
        name: "Laptop",
        quantity:7,
        description:"A powerful laptop",
        price: 999.99
    },
    {
        name: "Headphones",
        description:"A smartphone",
        quantity:8,
        price: 149.99
    },
    {
        name: "Smartphone",
        description:"A compact tablet",
        quantity: 3,
        price: 799.99
    }
];

for(let i=0;i<products.length;i++){
    if(products[i].quantity>5)
        products[i].price=products[i].price - (products[i].price * 0.15);
    console.log(products[i]);
}

//////////////////////////

// Function to get products from localStorage
function getProducts(): Product[] {
    return JSON.parse(localStorage.getItem("products") || "[]");
}

// Function to save products to localStorage
function saveProducts(products: Product[]): void {
    localStorage.setItem("products", JSON.stringify(products));
}

function loadProducts(): void {
    const products = getProducts();
    const container = document.getElementById("productContainer");

    if (!container) return;
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card m-2";
        card.style.width = "18rem";
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">Quantity: ${product.quantity}</p>
                <p class="card-text">Price: $${product.price.toFixed(2)}</p>
            </div>
        `;
        container.appendChild(card);
    });
}


function addProduct(event: Event): void {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const description = (document.getElementById("description") as HTMLInputElement).value.trim();
    const quantity = parseInt((document.getElementById("quantity") as HTMLInputElement).value);
    const price = parseFloat((document.getElementById("price") as HTMLInputElement).value);

    if (!name || !description || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
        alert("Please enter valid product details!");
        return;
    }

    const products = getProducts();
    products.push({ name, description, quantity, price });
    saveProducts(products);

    loadProducts();
    (document.getElementById("productForm") as HTMLFormElement).reset();
}


document.addEventListener("DOMContentLoaded", loadProducts);


document.getElementById("productForm")?.addEventListener("submit", addProduct);