import express from "express";
import handlebars from "express-handlebars";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
import { Server } from 'socket.io'
const app = express()

const expressServer = app.listen(8080, () => {
    console.log("Server up on 8080")
})

const io = new Server(expressServer)

io.on("connection", socket => {
    console.log("New socket conected");
});

// Configs
app.use(express.json())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))


app.engine("handlebars", handlebars.engine());
app.set("views", "src/views");
app.set("view engine", "handlebars");


// // Product Route
app.use("/api/products", productsRouter)

// // Cart Route
app.use("/api/carts", cartsRouter)
