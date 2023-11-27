const express = require ("express");
const router = express.Router();
const {authUserMiddleWare,authMiddleWare} = require('../middleware/authMiddleWare')
const CommentComtroller = require('../controllers/CommentController')
router.post ("/create" ,CommentComtroller.create)
 router.get("/get-all",authMiddleWare,CommentComtroller.getAllComment)
 router.delete("/delete-Comment/:id",authUserMiddleWare,CommentComtroller.deleteComment)
 router.get("/get-details/:id",authUserMiddleWare,CommentComtroller.getDetailsComment)
 router.post("/delete-many",authMiddleWare,CommentComtroller.deleteManyComment)
 

module.exports = router

