const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema(
  {
    content: { type: String, require: true },
    star: { type: Number, require: true, min: 1, max: 5 },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      require: true,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);

module.exports = ProductCategory;
