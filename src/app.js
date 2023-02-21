import express from "express";
import { productsController } from "./controllers/ProductManager.js";
import { cartsController } from "./controllers/CartManager.js";
const app = express()

app.listen(8080, () => {
    console.log("Server up")
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Product Routes
app.post("/api/products", async (req, res) => {
    const response = await productsController.addProduct(req.body)
    return res.json(response)
})
app.get("/api/products", async (req, res) => {
    if (req.query?.limit) {
        const products = await productsController.getProducts(req.query.limit)
        return res.json(products)
    } else {
        const products = await productsController.getProducts()
        return res.json(products)
    }
})
app.get("/api/products/:pid", async (req, res) => {
    const pid = req.params.pid
    const response = await productsController.getProductById(pid)
    return res.json(response)
})
app.delete("/api/products/:pid", async (req, res) => {
    const pid = req.params.pid
    const response = await productsController.deleteProduct(pid)
    return res.json(response)
})

app.put("/api/products/:pid", async (req, res) => {
    const pid = req.params.pid
    const response = await productsController.updateProduct(pid, req.body)
    return res.json(response)
})

// Cart Routes

app.post("/api/carts", async (req, res) => {
    const response = await cartsController.newCart()
    return res.json(response)
})
app.get("/api/carts/:cid", async (req, res) => {
    const cid = req.params.cid
    const response = await cartsController.getCartById(cid)
    return res.json(response)
})
app.post("/api/carts/:cid/products/:pid", async(req, res) => {
    const cid = req.params.cid
    const pid = req.params.pid
    const response = await cartsController.addProductToCart(cid, pid)
    return res.json(response)
})