import { addProduct } from '../products.service.ts'
import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Product } from '../products.model.ts'

export default async ({ request, response }: {request: any, response: any}) => {
    const body = await request.body()
    if(!request.hasBody){
        response.status = 400
        response.body = {
            message: "no input data"
        }
    }
    else{
        const product: Product = body.value
        product.id = v4.generate()
        addProduct(product)
        response.body = {
            message: "product added"
        }
    }
}