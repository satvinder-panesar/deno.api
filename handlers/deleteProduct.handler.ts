import { deleteProduct, getProduct } from '../products.service.ts'

export default ({ params, response }: {params: {id: string}, response: any}) => {
    const product = getProduct(params.id)
    if(product){
        deleteProduct(params.id)
        response.body = {
            message: "product deleted"
        }
    }
    else{
        response.status = 404
        response.body = {
            message: "product not found"
        }
    }
}