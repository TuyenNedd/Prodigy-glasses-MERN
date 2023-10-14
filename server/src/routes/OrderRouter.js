const express = require("express");
const  router = express.Router()
const OrderController = require('../controllers/OrderController')
// const {authMiddleWare} = require('../middleware/authMiddleWare')
router.post("/create",OrderController.createOrder )
// router.put("/update/:id",authMiddleWare,ProductController.updateProduct)
// router.get("/get-details/:id",ProductController.getDetailsProduct)
// router.delete('/delete-product/:id', ProductController.deleteProduct)
// router.get("/get-all/",ProductController.getAllProducts)
module.exports = router