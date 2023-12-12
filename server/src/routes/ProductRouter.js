const express = require("express");
const  router = express.Router()
const ProductController = require('../controllers/ProductController')
const {authMiddleWare} = require('../middleware/authMiddleWare');

router.post("/create",ProductController.createProduct )
router.put("/update/:id",authMiddleWare,ProductController.updateProduct)
router.get("/get-details/:id",ProductController.getDetailsProduct)
router.delete('/delete-product/:id',authMiddleWare, ProductController.deleteProduct)
router.get("/get-all",ProductController.getAllProducts)
router.post("/delete-many",authMiddleWare,ProductController.deleteMany)
router.get('/get-all-type', ProductController.getAllType)

module.exports = router