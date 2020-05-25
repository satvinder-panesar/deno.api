import { getProducts } from '../products.service.ts'

export default ({ response }: {response: any}) => {
    response.body = getProducts()
}