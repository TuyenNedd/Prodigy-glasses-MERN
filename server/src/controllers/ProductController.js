const ProductService = require("../services/ProductService");

const createProduct = async (req, res) => {
  try {
    const { name, image, type, price, countInStock, rating, description } =
      req.body;

    if (
      !name ||
      !image ||
      !type ||
      !countInStock ||
      !price ||
      !rating ||
      !description
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }

    console.log("ress", req.body);
    const response = await ProductService.createProduct(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    //    console.log("user id",userId)
    const data = req.body;
    if (!productId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required",
      });
    }
    const response = await ProductService.updateProduct(productId, data);

    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

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
const getDetailsProduct = async (req, res) => {
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

const deleteProduct = async (req, res) => {

  try {
      const productId = req.params.id
      // console.log('chekc userid delete',userId );
      // const token =req.headers
      // console.log('checl token',token);
      if (!productId) {
          return res.status(200).json({
              status: 'ERR',
              message: 'The productId is required'
          })
      }
      const response = await ProductService.deleteProduct(productId)
      return res.status(200).json(response)
  } catch (e) {
      return res.status(404).json({
          message: e
      })
  }
}

module.exports = {
  createProduct,
  updateProduct,
  getDetailsProduct,
  deleteProduct,
  getAllProducts
};
