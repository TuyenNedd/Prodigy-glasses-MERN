const express = require("express");
const router = express.Router();
const {
  authUserMiddleWare,
  authMiddleWare,
} = require("../middleware/authMiddleware");
const CommentController = require("../controllers/CommentController");
router.post("/create", CommentController.create);
router.get("/get-all", CommentController.getAllComment);
router.delete(
  "/delete-comment/:id",
  authUserMiddleWare(true),
  CommentController.deleteComment
);
router.get(
  "/get-details/:id",
  authUserMiddleWare,
  CommentController.getDetailsComment
);
router.post(
  "/delete-many",
  authMiddleWare,
  CommentController.deleteManyComment
);

module.exports = router;
