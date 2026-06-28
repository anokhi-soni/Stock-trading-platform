const { Login } = require("../controllers/login");
const { Logout } = require("../controllers/logout");
const { signUp } = require("../controllers/signup");
const router = require("express").Router();

router.post("/signup", signUp);

router.post("/login", Login);

router.get("/logout", Logout);

module.exports = router;