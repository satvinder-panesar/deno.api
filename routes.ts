import { Router } from 'https://deno.land/x/oak/mod.ts'
import getProducts from './handlers/getProducts.handlers.ts'
import getProduct from './handlers/getProduct.handler.ts'
import addProduct from './handlers/addProduct.handler.ts'
import updateProduct from './handlers/updateProduct.handler.ts'
import deleteProduct from './handlers/deleteProduct.handler.ts'

export default new Router()
    .get('/api/v1/products', getProducts)
    .get('/api/v1/products/:id', getProduct)
    .post('/api/v1/products', addProduct)
    .put('/api/v1/products/:id', updateProduct)
    .delete('/api/v1/products/:id', deleteProduct)