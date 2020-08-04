// External Modules
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

// Internal Modules
const { requireAuth, searchRivers } = require('./utils');
const { River } = require('../../db/models');

// Declarations
const router = express.Router();

// --- ROUTES ---
// Populate all Rivers - IS THIS NEEDED?
router.get(
    '/',
);

// 
router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const riverId = parseInt(req.params.id, 10);
        const river = River.findOne({
            where: {
                id: riverId
            }
        });
        res.json({ river });
    })
);

//
router.get(
    '/search/:val',
    asyncHandler(async (req, res) => {
        const searchTerm = req.params.val;
        let matches = await searchRivers(searchTerm);


    })
);