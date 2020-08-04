// External Modules
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

// Internal Modules
const { requireAuth } = require('./utils');
const { Vehicle } = require('../../db/models');

// Declarations
const router = express.Router();

// Middleware
router.use(requireAuth);

// --- ROUTES ---
// 
router.get(
    '/',
    // asyncHandler(async (req, res) => {
    //     const vehicle = 
    // })
);

// Create new vehicle with associated user
router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { 
            userId,
            vehicleName, 
            type, 
            maxOccupancy, 
            spriteId 
        } = req.body;
        const createdAt = new Date();
        const updatedAt = new Date();
        const vehicle = await Vehicle.create({ 
            userId, 
            vehicleName, 
            type, 
            maxOccupancy, 
            spriteId,
            createdAt,
            updatedAt 
        });
        res.json({ vehicle });
    })
);

// Destroy a single vehicle
router.delete(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const vehicle = await Vehicle.findByPk(req.params.id);
        await vehicle.destroy();
    })
);

module.exports = router;