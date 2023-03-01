import { Router } from "express";
import { productsController } from "../controllers/ProductManager.js";

export const productsRouter = Router()

productsRouter.post("/", async (req, res) => {
    const response = await productsController.addProduct(req.body)
    res.json(response)
})
productsRouter.get("/", async (req, res) => {
    res.render("productsListCreate", {
        title: "Products"
    })
})
productsRouter.get("/:pid", async (req, res) => {
    const product = await productsController.getProductById(req.params.pid)
    res.render("productDetail", {...product})
})
productsRouter.put("/:pid", async (req, res) => {
    const response = await productsController.updateProduct(req.params.pid, req.body)
    res.json(response)
})
productsRouter.delete("/:pid", async (req, res) => {
    const response = await productsController.deleteProduct(req.params.pid)
    res.json(response)
})