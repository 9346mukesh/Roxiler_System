const express = require("express");
const authenticateUser = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authenticateUser, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user
  });
});

module.exports = router;