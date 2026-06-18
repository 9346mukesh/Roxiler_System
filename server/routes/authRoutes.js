const express = require("express");

const {
  registerValidation,
  loginValidation,
} = require("../validations/authValidation");
const authenticateUser = require("../middleware/authMiddleware");

const {
  register,
  login,
  updatePassword,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerValidation, register);

router.post("/login", loginValidation, login);

router.put("/update-password", authenticateUser, updatePassword);

module.exports = router;