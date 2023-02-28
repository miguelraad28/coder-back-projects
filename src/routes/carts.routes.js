import { Router } from "express";
import { cartsController } from "../controllers/CartManager.js";

export const cartsRouter = Router()

cartsRouter.post("/", async (req, res) => {
    const response = await cartsController.newCart()
    res.json(response)
})

cartsRouter.get("/:cid", async (req, res) => {
    const response = await cartsController.getCartById(req.params.cid)
    res.json(response)
})
cartsRouter.post("/:cid/products/:pid", async (req, res) => {
    const response = await cartsController.addProductToCart(req.params.cid, req.params.pid)
    res.json(response)
})