const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const {
  authMiddleWare,
  authUserMiddleWare,
} = require("../middleware/authMiddleware");

router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.loginUser);
router.post("/log-out", userController.logoutUser);
router.put(
  "/update-user/:id",
  authUserMiddleWare(false),
  userController.updateUser
);
router.delete("/delete-user/:id", authMiddleWare, userController.deleteUser);
router.get("/getAll", authUserMiddleWare(false), userController.getAllUser);
// router.get("/getAll", authMiddleWare, userController.getAllUser);
router.get(
  "/get-details/:id",
  authUserMiddleWare(false),
  userController.getDetailsUser
);
router.post("/refresh-token", userController.refreshToken);
router.post("/delete-many", authMiddleWare, userController.deleteMany);
router.get("/get-user/:id", userController.getUserById); // Add this line

module.exports = router;
