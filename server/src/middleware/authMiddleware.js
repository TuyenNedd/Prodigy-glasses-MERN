const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleWare = (req, res, next) => {
  const token = req.headers.token.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(404).json({
        message: "The authemtication",
        status: "ERROR",
      });
    }
    if (user?.isAdmin) {
      next();
    } else {
      return res.status(404).json({
        message: "The authemtication",
        status: "ERROR",
      });
    }
  });
};

const authUserMiddleWare = (isAuthMe) => (req, res, next) => {
  try {
    const token = req.headers?.token?.split(" ")[1];
    const userId = req.params.id;
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
      if (err) {
        return res.status(404).json({
          message: "The authentication",
          status: "ERROR",
        });
      }

      if (user?.isAdmin || user?.id === userId || isAuthMe) {
        req.userId === user?.id;
        req.isAdmin === true;
        next();
      } else {
        return res.status(404).json({
          message: "The authentication",
          status: "ERROR",
        });
      }
    });
  } catch (error) {
    console.log("error:", error);
  }
};

module.exports = {
  authMiddleWare,
  authUserMiddleWare,
};
//
