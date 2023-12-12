const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

router.get("/config", (req, res) => {
  return res.status(200).json({
    status: "OK",
    data: process.env.CLIENT_ID,
    // data: "AdifeAn4M9xQ_vQUbAFHyL75ApAripg_bAlHQsQG0GOS6f5e76P7Ukoxtg9gTAeG51mMFrD5X2eq0xOg",
  });
});

module.exports = router;
