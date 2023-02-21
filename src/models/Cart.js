export default class Cart {
    products
    static idCounter = 0
    constructor(products) {
        
        const newId = ++Cart.idCounter
        this.products = products
        this.id = newId.toString()
    }
}