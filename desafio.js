
class ProductManager{
    static idCounter=0;
    constructor(){
        this.products=[];
    }


addProduct(title, code, thumbnail, stock, price, description){
    if (!title || !code || !thumbnail || !stock || !price || !description) return "Todos los campos son obligatorios"
    if (this.products.some(product => product.code == code)) return "Codigo repetido"

    this.products.push({
        title,
        code,
        thumbnail,
        stock,
        price,
        description,
        id: ProductManager.idCounter++
    })
    return "Producto Cargado con exito"
}


getProducts(){
    return this.products
}
getProductById(id) {
    let encontrado = this.products.find(product => product.id == id);
    if (!encontrado) {
        return "Not Found"
    } else {
        return encontrado;
    }
}}

const PM1 = new ProductManager();

console.log(PM1.addProduct("title1", "code1", "thumbnail", 20, 2000, "description1"))
console.log(PM1.addProduct("title2", "code2", "thumbnail", 20, 2000, "description2"))
console.log(PM1.addProduct("title3", "code3", "thumbnail", 20, 2000, ))
console.log(PM1.addProduct("title4", "code2", "thumbnail", 20, 2000, "description4"))

console.log(PM1.getProductById(1))
console.log(PM1.getProductById(4))

console.log(PM1.getProducts())
