export default class Product {
    title
    description
    price
    thumbnail
    code
    stock
    static idCounter = 0
    constructor(title, description, price, status, thumbnail, code, stock) {
        const newId = ++Product.idCounter
        this.title = title
        this.description = description
        this.price = price
        this.status = status || true
        this.thumbnail = thumbnail || []
        this.code = code
        this.stock = stock
        this.id = newId.toString()
    }
}