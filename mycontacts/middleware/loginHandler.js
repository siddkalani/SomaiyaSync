const asyncHandler = require("express-async-handler");

const isLogin = asyncHandler(async (req, res, next) => {
  try {
    if (req.session.user_id) {
    } else {
        res.json({ message: "log in"})
    }
      next()
  } catch (error) {
    console.log(error);
  }
});
const isLogout = asyncHandler(async (req, res, next) => {
    try {
        if (req.session.user_id) {
            res.json({message: "home"})
        } next()
  } catch (error) {
    console.log(error);
  }
});


module.exports = {isLogin,isLogout}
