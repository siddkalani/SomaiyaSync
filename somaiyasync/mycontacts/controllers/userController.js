const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

//For email verification
const sendVerifyMail = asyncHandler(async (name, email, user_id) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "somaiyasync@gmail.com",
        pass: "oqfv aium gpar resn",
      },
    });
    const mailOptions = {
      from: "somaiyasync@gmail.com",
      to: email,
      subject: "For verification mail",
      html:
        "<p>Hii!  " +
        name +
        ', please click here to <a  href="http://localhost:4200/api/users/verify?id=' +
        user_id +
        '">Verify</a> your mail.</p>',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        // res.send({ message: "Opss! Email id not found!" });
        // res.js("Opss! Email id not found!");
      } else {
        // res.send("Verification link has been sent to your email!");
        console.log("Email has been sent:- ", info.response);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
});

//@desc Register User
//@route  POST /api/user/register
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(400);
    throw new Error("Username already exists!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("Email already registered!");
  }
  //Hash Password
  const hashedPass = await bcrypt.hash(password, 10);
  console.log("Hashed pass: ", hashedPass);

  try {
    const user = await User.create({
      username,
      email,
      password: hashedPass,
    });
    console.log(`User created ${user}`);

    if (user) {
      // const url = `http://localhost:4200/api/users/verify/${user._id}`;
      await sendVerifyMail(username, email, user._id);
      // res.send({ message: "You have successfully registered!" });
      // res.status(201).json({ _id: user.id, email: user.email });
      res
        .status(200)
        .send({ message: "Email verification link has been sent!" });
    }
    // if (sendVerifyMail) {
    //   res.status(200).send({ message: "User hase been verified" });
    // }
  } catch (error) {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@desc Login User
//@route  POST /api/user/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  if (user.is_verified === 0) {
    res.status(401);
    throw new Error("Verify your email");
  }

  const accessToken = jwt.sign(
    {
      user: {
        username: user.username,
        email: user.email,
        id: user.id,
      },
    },
    process.env.ACCESS_TOKEN_KEY,
    { expiresIn: "300m" }
  );
  req.session.user_id = user._id;
  res.status(200).json({
    message: "Logged In",
    accessToken,

    user: {
      is_verified: user.is_verified,
      username: user.username,
    },
  });
});

//@desc Current User
//@route  GET /api/user/current
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

//@desc Check verified User
//@route  GET /api/user/verify
const verifyMail = asyncHandler(async (req, res) => {
  try {
    const updateInfo = await User.updateOne(
      { _id: req.query.id },
      { $set: { is_verified: 1 } }
    );
    console.log(updateInfo);
    // res.json("Email Verified");
    // res.status(200).send({ message: "Verified" });
    res.redirect("http://localhost:5173/email");
  } catch (error) {
    res.status(401);
    console.log(error.message);
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  // Clear the user's session
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ message: "Failed to logout" });
    } else {
      res.clearCookie("connect.sid"); // Clear the session cookie
      res.clearCookie("access_token"); // Clear the access token cookie
      res.status(200).json({ message: "Logged out successfully" });
    }
  });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
  verifyMail,
  logoutUser,
};
