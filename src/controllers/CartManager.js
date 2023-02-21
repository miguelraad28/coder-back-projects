import Cart from "../models/Cart.js";
import { readFile, writeFile } from "fs/promises";
class CartManager {
    _carts
    _path
    constructor(_path) {
        this._carts = []
        this._path = _path
    }
    async newCart(products) {
        try {
            const data = await readFile(this._path, "utf-8")
            //  si la collection NO esta VACIA traemos los datos.
            if (data !== "") this._carts = JSON.parse(data)
            if (products.forEach(product => product.id)) {
                return ({ message: "Debes especificar el ID del producto a añadir.", pending: true })
            }else if(products.forEach(product => product.quantity)){
                return ({ message: "Debes especificar la cantidad de producto a añadir.", pending: true })
            }else if(products.length < 1 || products == undefined){
                return({message: "El carrito no puede estar vacío"})
            }
            const cart = new Cart(
                products
            );
            console.log(cart)
            this._carts.push(cart);
            await writeFile(this._path, JSON.stringify(this._carts));
            return ({ message: "Carrito creado", cart: cart });

        } catch (error) {
            console.error(error);
        }
    }
    async getCartById(id) {
        try {
            const data = await readFile(this._path, 'utf-8')
            this._carts = JSON.parse(data)
            const cart = this._carts.find(_cart => _cart.id === id)
            if (cart) {
                return cart
            } else {
                return ({ message: "El carrito que buscas no existe", pending: true })
            }
        } catch (error) {
            console.error(error)
        }
    }
    async updateCart(id, product) {

    }
}
const cartsController = new CartManager("./src/database/carts.json")

export { cartsController };