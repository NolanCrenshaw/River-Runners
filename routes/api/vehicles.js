// External Modules
const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");

// Internal Modules
const { requireAuth } = require("./utils");
const { Vehicle } = require("../../db/models");

// Declarations
const router = express.Router();

// Middleware
// router.use(requireAuth);

// --- ROUTES ---
//
router.get(
  "/",
  asyncHandler(async (req, res) => {
    console.log("GOT TO VEHICLE GET ROUTE");
  })
);

// Create new vehicle with associated user
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { vehicle } = req.body;
    const userId = vehicle.userId;
    const vehicleName = vehicle.vehicleName;
    const type = vehicle.type;
    const maxOccupancy = vehicle.maxOccupancy;
    // -- TODO --- implement Sprite Controls
    const spriteId = 1;
    const createdAt = new Date();
    const updatedAt = new Date();
    const newVehicle = await Vehicle.create({
      userId,
      vehicleName,
      type,
      maxOccupancy,
      spriteId,
      createdAt,
      updatedAt,
    });
    res.json({ newVehicle });
  })
);

// Get a User's vehicles
router.get(
  '/user:id(\\d+)',
  asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const vehicles = await Vehicle.findAll({
      where: {
        userId: userId
      }
    })
    console.log(vehicles)
    res.json({ vehicles });
  })
)

// Destroy a single vehicle
router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const vehicle = await Vehicle.findByPk(req.params.id);
    await vehicle.destroy();
  })
);

module.exports = router;
