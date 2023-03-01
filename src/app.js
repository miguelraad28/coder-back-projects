import express from "express";
import { Server } from 'socket.io'
import handlebars from "express-handlebars";
import { productsController } from "./controllers/ProductManager.js";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
const app = express()

const httpServer = app.listen(8080, () => {
    console.log("Server up on 8080")
})


// Configs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.engine("handlebars", handlebars.engine());
app.set("views", "src/views");
app.set("view engine", "handlebars");
app.use(express.static("public"));

const io = new Server(httpServer)
io.on("connection", socket => {
    console.log("New socket connected");
    socket.on("addProduct", async(product) => {
        await productsController.addProduct(product)
        const products = await productsController.getProducts()
        console.log(products)
        io.sockets.emit("refreshProducts", products)
    });
});

// // Product Route
app.use("/api/products", productsRouter)

// // Cart Route
app.use("/api/carts", cartsRouter)
