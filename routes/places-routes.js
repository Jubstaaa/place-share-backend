const express = require("express");

const placesControllers = require("../controllers/places-controllers");
const placesValidations = require("../validations/places-validations");
const fileUpload = require("../middleware/file-upload");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/:placeId", placesControllers.getPlaceById);

router.get("/user/:userId", placesControllers.getPlacesByUserId);

router.use(checkAuth);

router.post(
  "/",
  fileUpload.single("image"),
  placesValidations.addPlace,
  placesControllers.createPlace
);

router.patch(
  "/:placeId",
  placesValidations.updatePlace,
  placesControllers.updatePlaceByUserId
);

router.delete("/:placeId", placesControllers.deletePlace);

module.exports = router;
