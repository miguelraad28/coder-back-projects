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
const productsContainer = document.getElementsByClassName("productsContainer")
socket.on("refreshProducts", (products) => {
    console.log(products)
    console.log(productsContainer)
    productsContainer.innerHTML = ``
    
})