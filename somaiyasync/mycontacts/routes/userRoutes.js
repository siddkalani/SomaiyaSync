const express = require("express");
const session = require("express-session");
const { isLogin, isLogout } = require("../middleware/loginHandler");
const {
  registerUser,
  loginUser,
  currentUser,
  verifyMail,
  logoutUser,
} = require("../controllers/userController");
const { getUsers } = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();
router.use(
  session({
    secret: process.env.SESSION_SECRET,
  })
);

router.get("/", getUsers);

router.post("/register", registerUser);
router.get("/register", isLogout, registerUser);

router.get("/verify", verifyMail);

router.post("/login", loginUser);
router.get("/login", isLogout, loginUser);
router.get("/logout", validateToken, logoutUser);

router.get("/current", validateToken, isLogin, currentUser); //, validateToken
module.exports = router;
