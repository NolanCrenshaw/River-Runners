// External Modules
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

// Internal Modules
const { requireAuth, searchRivers } = require('./utils');
const { River } = require('../../db/models');

// Declarations
const router = express.Router();

// Middleware
router.use(requireAuth);

// --- ROUTES ---
// Populate all Rivers - IS THIS NEEDED?
router.get(
    '/',
);

// Populate a single River
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

// Populate Rivers by search term
router.get(
    '/search/:val',
    asyncHandler(async (req, res) => {
        const searchTerm = req.params.val;
        let matches = await searchRivers(searchTerm);
        res.json({ matches });
    })
);

module.exports = router;