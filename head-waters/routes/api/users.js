// External Modules
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

// Internal Modules
const UserRepository  = require('../../db/userRepository');
const { User } = require('../../db/models');
const { requireAuth } = require('./utils');

// Declarations
const router = express.Router();

// Middleware
router.use(requireAuth);

// Validations
const email =
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail();

const name =
  check('firstName')
    .not().isEmpty()
    .withMessage('Please provide at least a first name');

const password =
  check('password')
    .not().isEmpty()
    .withMessage('Please provide a password');

// --- ROUTES ---
// Populates all users - TODO ***
router.get(
    '/',
);

// Submits Sign Up Form
router.post(
    '/',
    email,
    name,
    password,
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next({ status: 422, errors: errors.array() });
        }
        const user = await UserRepository.create(req.body);
        const { jti, token } = generateToken(user);
        user.tokenId = jti;
        await user.save();
        res.json({ token, user: user.toSafeObject() });
    })
);

// Populates a single user - TODO (add middleware) ***
router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const userId = parseInt(req.params.id, 10);
        const user = User.findOne({
            where: {
                id: userId
            }
        });
        res.json({ user });
    })
);

// Populates a single user's signup form for editting = IS THIS NEEDED?
router.get(
    '/:id(\\d+)/settings',
);

// Submits a single user's settings form - TODO ***
router.patch(
    '/:id(\\d+)',
);

// Destroys a single user - TODO ***
router.delete(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const user = User.findByPk(req.params.id);
        await user.destroy();
        
    })
)

module.exports = router;