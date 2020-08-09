// External Modules
const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");

// Internal Modules
const UserRepository = require("../../db/userRepository");
const { requireAuth, getUserToken } = require("./utils");

// Declarations
const router = express.Router();

// Validators
const email = check("email")
  .isEmail()
  .withMessage("Please provide a valid email address")
  .normalizeEmail();

const password = check("password")
  .not()
  .isEmpty()
  .withMessage("Please provide a password");

// --- ROUTES ---
// Create and provide Auth Token
router.put(
  "/",
  [email, password],
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next({ status: 422, errors: errors.array() });
    }
    const { email, password } = req.body;
    const user = await UserRepository.findByEmail(email);
    if (!user.isValidPassword(password)) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["Invalid credentials"];
      return next(err);
    }
    const { token } = getUserToken(user);
    user.tokenId = token.data.tokenId;
    await user.save();
    res.json({ token, user: user.toSafeObject() });
  })
);

module.exports = router;
