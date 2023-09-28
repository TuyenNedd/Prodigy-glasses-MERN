const express = require("express");
const  router = express.Router()
const ProductController = require('../controllers/ProductController')
const {authMiddleWare} = require('../middleware/authMiddleWare')
router.post("/create",ProductController.createProduct )
router.put("/update/:id",authMiddleWare,ProductController.updateProduct)

module.exports = router