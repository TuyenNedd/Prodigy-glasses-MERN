const Comment = require("../models/CommentModel");
const Product = require("../models/ProductModel");
const User = require("../models/UserModel");

const createComment = async (commentData) => {
  // console.log("cmdt", commentData);
  try {
    const { content, star, productId, userId } = commentData;

    // console.log("pro", productId);
    // Xác thực xem sản phẩm và người dùng có tồn tại hay không

    const product = await Product.findById(productId);
    const user = await User.findById(userId);

    if (!product || !user) {
      return {
        status: "error",
        message: "Không tìm thấy Sản phẩm hoặc Người dùng",
      };
    }

    // Tạo đánh giá
    const createdComment = await Comment.create({
      content,
      star,
      product: productId,
      user: userId,
    });

    // Lưu đánh giá vào cơ sở dữ liệu
    if (createdComment) {
      return {
        status: "OK",
        message: "Thành công",
        data: createdComment,
      };
    } else {
      return {
        status: "error",
        message: "Không thể tạo đánh giá",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "Lỗi máy chủ nội bộ",
    };
  }
};

const getAllComment = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allComemnt = await Comment.find().sort({
        createdAt: -1,
        updatedAt: -1,
      });
      resolve({
        status: "OK",
        message: " success",
        data: allComemnt,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const deleteComment = (id, userId, isAdmin) => {
  // console.log("id", id);
  return new Promise(async (resolve, reject) => {
    try {
      const checkIdComment = await Comment.findOne({
        _id: id,
      });

      if (!checkIdComment) {
        resolve({
          status: "Error",
          message: "id k tontai",
        });
      } else if (userId !== checkIdComment.user || !isAdmin) {
        resolve({
          status: "err",
          message: "authentication",
        });
      }
      await Comment.findByIdAndDelete(id);
      resolve({
        status: "OK",
        message: "Delete commetn success",
      });
    } catch (error) {}
  });
};

const getDetailsComment = (id) => {
  // console.log("id", id);
  return new Promise(async (resolve, reject) => {
    try {
      const checkId = await Comment.findOne({
        _id: id,
      });
      if (checkId === null) {
        resolve({
          status: "Error",
          message: "id is not defline",
        });
      }
      resolve({
        status: "ok",
        message: " okeee",
        data: checkId,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const deleteManyComment = (ids) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkIds = await Comment.deleteManyComments({
        _id: ids,
      });

      if (checkIds === null) {
        resolve({
          status: "Error",
          message: "id is not defline",
        });
      }
      resolve({
        status: "oke",
        message: "delete success",
      });
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  createComment,
  getAllComment,
  deleteComment,
  getDetailsComment,
  deleteManyComment,
};
