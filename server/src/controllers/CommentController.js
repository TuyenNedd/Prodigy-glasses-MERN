const CommentService = require("../services/CommentService");
const create = async (req, res) => {
  try {
    const { content, star, userId, productId } = req.body;
    if (!content || !star || !userId || !productId) {
      return res.status(200).json({
        status: "oke",
        message: "please fill all the field",
      });
    }
    const responsive = await CommentService.createComment(req.body);
    return res.status(200).json(responsive);
  } catch (error) {
    return res.status(404).json({
      status: "ERR",
      message: "lou",
    });
  }
};

const getDetailsComment = async (req, res) => {
  try {
    const CommentId = req.params.id;

    if (!CommentId) {
      return res.status(200).json({
        status: "ERR",
        message: " CommentId is not defile",
      });
    }
    const response = await CommentService.getDetailsComment(CommentId);
    return res.status(200).json(response);
  } catch (e) {}
};
const getAllComment = async (req, res) => {
  try {
    const responsive = await CommentService.getAllComment();
    return res.status(200).json(responsive);
  } catch (e) {
    return {
      status: "err",
      message: e,
    };
  }
};

const deleteManyComment = async (req, res) => {
  try {
    const ids = req.body.ids;
    if (!ids) {
      return res.status(200).json({
        status: "oke",
        message: "comment id is not found",
      });
    }
    const response = await CommentService.deleteManyComment(ids);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      status: "err",
      message: error,
    });
  }
};
const deleteComment = async (req, res) => {
  try {
    const CommentId = req.params.id;
    const userId = req.userId;
    const isAdmin = req.isAdmin;
    if (!CommentId) {
      return res.status(200).json({
        status: "err",
        message: "coment id i not define",
      });
    }
    const response = await CommentService.deleteComment(
      CommentId,
      userId,
      isAdmin
    );
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
module.exports = {
  create,
  getAllComment,
  deleteComment,
  getDetailsComment,
  deleteManyComment,
};
