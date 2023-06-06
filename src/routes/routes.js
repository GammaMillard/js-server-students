import { Router } from "express";

const router = Router()


router.get('/:page&:id', (req,res) => {
    const { params, query } = req
    res.json({
        msg : 'hola',
        params,
        query
    })
})

export default router