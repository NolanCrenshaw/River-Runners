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
        const { craft } = req.body;
        const userId = craft.userId;
        const craftName = craft.craftName;
        const type = craft.type;
        const maxOccupancy = craft.maxOccupancy;
        // -- TODO --- implement Sprite Controls
        const spriteId = 1;
        const createdAt = new Date();
        const updatedAt = new Date();
        const newCraft = await Craft.create({ 
            userId, 
            craftName, 
            type, 
            maxOccupancy, 
            spriteId,
            createdAt,
            updatedAt,
        });
        res.json({ newCraft });
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