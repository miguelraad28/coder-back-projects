export default class Product {
    title
    description
    price
    thumbnail
    code
    stock
    static idCounter = 0
    constructor(title, description, price, thumbnail, code, stock) {
        if (
            title === undefined ||
            description === undefined ||
            price === undefined ||
            thumbnail === undefined ||
            code === undefined ||
            stock === undefined
        ) {
            return('Todos los campos son obligatorios')
        }
        const newId = ++Product.idCounter
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = newId.toString()
    }
}