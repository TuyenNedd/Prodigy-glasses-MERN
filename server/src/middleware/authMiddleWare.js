const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const authMiddleWare = (req, res, next) => {
  // console.log('check tokenn',req.headers.token);
  const token = req.headers.token.split(" ")[1];
 console.log('check new',token);
  console.log("check tokenn", req.headers.token);
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    console.log("check neww token",process.env.ACCESS_TOKEN);
    if (err) {

      return res.status(404).json({
        message: "Lỗi xác thực JWT",
      status: "err",
      });
    }
    
    if (user?.isAdmin) {
      console.log("true");
      next();
    } else {
      return res.status(404).json({
        message: "the authentication",
        status: "errâ",
      });
    }
  });
};
const authUserMiddleWare = (req, res, next) => {
  console.log('reqheafd',req.headers);
  const userId = req.params.id;
  const token = req.headers.token.split(" ")[1];
  // console.log("check tokenn", req.headers.token);
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    
    
    if (err) {
        return res.status(404).json({
        message: "the authentiaaaaaaacation",
        status: "err",
      });
    }
    
   
    if (user?.isAdmin || user?.id === userId) {
      console.log("true");
      next();
    } else {
      return res.status(404).json({
        message: "the authentication",
        status: "err",
      });
    }
  });
};

module.exports = {
  authMiddleWare,
  authUserMiddleWare,
};
