const socket = io()

const form = document.getElementById('createNewProductFrom');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    let newProduct = {}
    for (const [key, value] of formData.entries()) {
        if (key === "stock" || key === "price" || key === "code") {
            newProduct = {
                ...newProduct,
                [key]: Number(value)
            }
        } else if (key === "status") {
            if (value === "on") {
                newProduct = {
                    ...newProduct,
                    [key]: true
                }
            } else {
                newProduct = {
                    ...newProduct,
                    [key]: false
                }
            }
        } else if (key === "thumbnail") {
            newProduct = {
                ...newProduct,
                [key]: [value]
            }
        } else {
            newProduct = {
                ...newProduct,
                [key]: value
            }
        }
    }
    socket.emit("addProduct", newProduct)
});
const productsListCreateContainer = document.getElementById("productsListCreateContainer")
socket.on("refreshProducts", (products) => {
    productsListCreateContainer.innerHTML = ``
    products.map(product => {
        productsListCreateContainer.innerHTML += `
        <div class="productCard">
        <h1>
        ${product.title}
        </h1>
        <h2>${product.price}</h2>
        <a href="/api/products/${product.id}"><button class="blueButton">VER DETALLE</button></a>
        </div>
        `
    });
})