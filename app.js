import express from 'express'
import dotenv from 'dotenv'
import router from './src/routes/routes.js'
dotenv.config()

export const app = express()
export const port = process.env.PORT
export const baseUrl = '/api'



app.use(baseUrl, router)

app.listen(port, () => {
    console.log('listening in port ' + port);
})



export default app