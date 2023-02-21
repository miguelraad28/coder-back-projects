import express from "express";
import { cartsController } from "./controllers/CartManager.js";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
const app = express()

app.listen(8080, () => {
    console.log("Server up")
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Product Route
app.use("/api/products", productsRouter)

// Cart Route
app.use("/api/carts", cartsRouter)
