import { Product } from './products.model.ts'

let products: Product[] = [
    {
        "id": "1",
        "name": "samsung_s10",
        "category": "electronics"
    },
    {
        "id": "2",
        "name": "levis_shirt",
        "category": "clothing"
    },
]

export const getProducts = (): Product[] => {
    return products
}

export const getProduct = (id: string): Product => {
    return products.filter(x => x.id === id)[0]
}

export const addProduct = (product: Product) => {
    products.push(product)
}

export const updateProduct = (id: string, product: Product) => {
    const index = products.findIndex(x => x.id === id)
    products[index].name = product.name ? product.name : products[index].name
    products[index].category = product.category ? product.category : products[index].category
}

export const deleteProduct = (id: string) => {
    const index = products.findIndex(x => x.id === id)
    products.splice(index, 1)
}