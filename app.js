import express from 'express'
import dotenv from 'dotenv'
import router from './src/routes/routes.js'
dotenv.config()

export const app = express()
export const port = process.env.PORT




app.use('/', router)

app.listen(port, () => {
    console.log('listening in port ' + port);
})