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
// router.use(requireAuth); -- NEED TO SET JTI in utils correctly

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
        // const { vehicle } = req.body
        // console.log("Route ", vehicle)
        const {
            // userId,
            vehicleName, 
            type, 
            maxOccupancy, 
            // spriteId 
        } = req.body;
        const createdAt = new Date();
        const updatedAt = new Date();
        const newVehicle = await Vehicle.create({ 
            userId: 21, 
            vehicleName, 
            type, 
            maxOccupancy, 
            // spriteId,
            createdAt,
            updatedAt 
        });
        res.json({ newVehicle });
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