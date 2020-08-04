// External Modules
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

// Internal Modules
const { requireAuth } = require('./utils');
const { Craft } = require('../../db/models');

// Declarations
const router = express.Router();

// Middleware
router.use(requireAuth);

// --- ROUTES ---
// 
router.get(
    '/',
    // asyncHandler(async (req, res) => {
    //     const craft = 
    // })
);

// Create new craft with associated user
router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { 
            userId,
            craftName, 
            type, 
            maxOccupancy, 
            spriteId 
        } = req.body;
        const craft = await Craft.create({ 
            userId, 
            craftName, 
            type, 
            maxOccupancy, 
            spriteId 
        });
        res.json({ craft });
    })
);

// Destroy a single craft
router.delete(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const craft = await Craft.findByPk(req.params.id);
        await craft.destroy();
    })
);

module.exports = router;