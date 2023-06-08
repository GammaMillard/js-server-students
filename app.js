import express from 'express'
import dotenv from 'dotenv'
import router from './src/routes/routes.js'
import { dbConnection } from './database/config.js'
dotenv.config()

export const app = express()
export const port = process.env.PORT
export const baseUrl = '/api'

const server = async () => {
    
    await dbConnection()
    app.use( express.json() )
    app.use(baseUrl, router)
    app.listen(port, () => {
       
    })

}

server()

export default app