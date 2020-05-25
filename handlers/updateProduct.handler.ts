import { updateProduct, getProduct } from '../products.service.ts'
import { Product } from '../products.model.ts'

export default async ({ params, request, response }: {params: {id: string}, request: any, response: any}) => {
    const body = await request.body()
    if(!request.hasBody){
        response.status = 400
        response.body = {
            message: "missing input data"
        }
    }
    else{
        const currentProduct = getProduct(params.id)
        if(!currentProduct){
            response.status = 404
            response.body = {
                message: "product not found"
            }
        }else{
            const product: Product = body.value
            updateProduct(params.id, product)
            response.body = {
                message: "product updated"
            }
        }
    }
}