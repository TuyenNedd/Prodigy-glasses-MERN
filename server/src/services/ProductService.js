const Product = require("../models/ProductModel.js");
const bcrypt = require("bcrypt");

const createProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    const { name, image, type, price, countInStock, rating, description } = newProduct;
    try {
      const checkProduct = await Product.findOne({
        name: name,
      });
      if (checkProduct !== null) {
        resolve({
          status: "oke",
          message: "the namePro  onl redly",
        });
      }

      const newProduct = await Product.create({
        name,
        image,
        type,
        price,
        countInStock,
        rating,
        description,
      });
      if (newProduct) {
        resolve({
          status: "oke",

          message: "Success",
          data: newProduct,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const updateProduct = (id,data) => {
    console.log("check id",id)
    return new Promise ( async(resolve, reject)=>{
        try{
            const checkProduct = await Product.findOne({
                _id:id
            })
            console.log("check ",checkProduct)
            
            if(checkProduct===null){

            resolve({
               status:"oke",
               message :"product not undedfined"
            })   
        }
     const updateProduct = await Product.findByIdAndUpdate(id, data ,{new : true})
     console.log('check updte',updateProduct);
                resolve({ 
                status:'oke',
                    message : "Succes",
                    data :updateProduct
                })
             

        } catch(e){
            reject(e)
        }
    })
  };
  const getDetailsProduct = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const product = await Product.findOne({
          _id: id,
        });
  
        if (product === null) {
          resolve({
            status: "oke",
            message: "product not undefined",
          });
        }
  
        resolve({
          status: "OK",
          message: " success",
          data: product,
        });
      } catch (e) {
        reject(e);
      }
    });
  };
  
module.exports = { createProduct,
updateProduct,getDetailsProduct };
