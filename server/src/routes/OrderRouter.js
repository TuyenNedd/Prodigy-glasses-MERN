const express = require("express");
const router = express.Router()
const OrderController = require('../controllers/OrderController');
const { authUserMiddleWare, authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create/:id', authUserMiddleWare(false), OrderController.createOrder)
router.get('/get-all-order/:id',authUserMiddleWare(false), OrderController.getAllOrderDetails)
router.get('/get-details-order/:id', OrderController.getDetailsOrder)
router.delete('/cancel-order/:id',authUserMiddleWare(false), OrderController.cancelOrderDetails)
router.get('/get-all-order',authMiddleWare, OrderController.getAllOrder)


module.exports = router