export default class Product {
    title
    description
    price
    thumbnail
    code
    status
    category
    stock
    static idCounter = 0
    constructor(title, description, price, thumbnail, code, stock, category, status) {
        const newId = ++Product.idCounter;
        this.id = newId.toString();
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail || [];
        this.code = code;
        this.stock = stock;
        this.category = category;
        this.status = status || true;
    }
}