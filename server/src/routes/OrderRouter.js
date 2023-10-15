const express = require("express");
const  router = express.Router()
const OrderController = require('../controllers/OrderController')
const {authUserMiddleWare} = require('../middleware/authMiddleWare')
router.post("/create",authUserMiddleWare,OrderController.createOrder )
// router.put("/update/:id",authMiddleWare,ProductController.updateProduct)
router.get("/get-all-order/:id",authUserMiddleWare,OrderController.getAllDetailsOrder)
router.get("/get-details-order/:id",OrderController.getDetailsOrder)
router.delete('/cancel-order/:id',authUserMiddleWare, OrderController.cancelOrderDetails)

// router.get("/get-all/",ProductController.getAllProducts)
module.exports = router