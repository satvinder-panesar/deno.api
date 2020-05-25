import { Application } from 'https://deno.land/x/oak/mod.ts'
import { APP_PORT } from './env.ts'
import Router from './routes.ts'
import NotFound from './handlers/notFound.handler.ts'
import AuthHandler from './handlers/auth.handler.ts'

const app = new Application()

//request interceptors
app.use(async (context, next) => {
    try{
        //token validation
        const isTokenValid: boolean = AuthHandler()
        if(!isTokenValid){
            context.response.status = 400
            context.response.body = {
                message: "invalid token"
            }
            return
        }        
        await next()
    }catch(err){
        //error handling
        context.response.status = 500
        context.response.body = {
            message: "error while processing request"
        }
        console.log(err)
    }
})

app.use(Router.routes())
app.use(NotFound)

console.log(`server started on port ${APP_PORT}`)

await app.listen({port: APP_PORT})