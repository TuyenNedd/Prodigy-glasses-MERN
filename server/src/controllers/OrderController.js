const OrderService = require("../services/OrderService");

const createOrder = async (req, res) => {
    try { 
        const { paymentMethod, itemsPrice, shippingPrice, totalPrice, fullName, address, city, phone } = req.body
        if (!paymentMethod || !itemsPrice || !shippingPrice || !totalPrice || !fullName || !address || !city || !phone) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await OrderService.createOrder(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}   

  
  const getAllProducts = async (req, res) => {
    try {
      const {limit , page,sort,filter} = req.query 
        const response = await ProductService.getAllProducts(Number(limit), Number(page),sort,filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
  }
  const getDetailsOrder = async (req, res) => {
    try {
        const productId = req.params.id
  
      
        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The userId is required'
            })
  
        }
        
        const response = await ProductService.getDetailsProduct(productId)
       
        return res.status(200).json(response)
       
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }

  }
  const cancelOrderDetails = async (req, res) => {
    try {
        const data= req.body.orderItems
        const orderId= req.body.orderId
        if (!orderId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The orderId is required'
            })
        }
        const response = await OrderService.cancelOrderDetails(orderId, data)
        return res.status(200).json(response)
    } catch (e) {
        // console.log(e)
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
  createOrder,
  getAllProducts,
  getDetailsOrder,
  cancelOrderDetails
};
