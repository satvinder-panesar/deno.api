import { getProduct } from '../products.service.ts'

export default ({ params, response }: {params: {id: string}, response: any}) => {
    const product = getProduct(params.id)
    if(product){
        response.body = product
    }
    else{
        response.status = 404
        response.body = {
            message: "product not found"
        }
    }
}