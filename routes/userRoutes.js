const express = require("express");
const passport = require("passport");

const router = express.Router();

const controller = require("./../controllers/userController");
const { send, read } = require("../controllers/message");
const weatherData = require("./../controllers/weatherController.js")

router.post("/register", controller.registerUser);
router.post("/login", controller.login);
router.get("/weather", weatherData.weatherController);


router.get("/logout", controller.logout);
router.use(passport.authenticate("jwt", { session: false }));
router.get("/list", controller.listUsers);
router.get("/profile", controller.profile);

router.post("/send", send);

// You would want to include an authorisation middleware here
router.get("/read", read);

module.exports = router;
