import { Router } from "express"
import { 
    getProducts,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct
 } from "../controllers/productsController.js"

export const productsRouter = Router()

// GET /products
productsRouter.get('/', getProducts)

// GET /products/:id
productsRouter.get('/:id', getProductById)

// POST /products
productsRouter.post('/', postProduct) 

// PUT /products:/id
productsRouter.put('/:id', putProduct)

// DELETE /products/:id
productsRouter.delete('/:id', deleteProduct)