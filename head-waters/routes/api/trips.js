// External Modules
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

// Internal Modules
const { requireAuth } = require('./utils');
const UserRepository = require('../../db/userRepository');
const { Trip } = require('../../db/models');

// Declarations
const router = express.Router();

// Middleware
router.use(requireAuth);

// --- ROUTES ---
//
router.get(
    '/',
);

//
router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { token, time, riverId } = req.body;
        const createdAt = new Date();
        const updatedAt = new Date();
        const tripLeaderId = UserRepository.findByTokenId(token.id);
        const trip = await Trip.create({
            time,
            riverId,
            tripLeaderId,
            createdAt,
            updatedAt
        });
        res.json({ trip });
    })
);

//
router.get(
    '/:id(\\d+)',
);




module.exports = router;