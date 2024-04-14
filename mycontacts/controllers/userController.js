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
    { expiresIn: "30m" }
  );
  req.session.user_id = user._id;
  res.status(200).json({
    message: "Logged In",
    accessToken,
    user: { is_verified: user.is_verified },
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
    res.redirect("/email");
  } catch (error) {
    res.status(401);
    console.log(error.message);
  }
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
  verifyMail,
};

// // const registerUser = asyncHandler(async (req, res) => {
// //   const { username, email, password } = req.body;

// //   if (!username || !email || !password) {
// //     res.status(400);
// //     throw new Error("All fields are mandatory!");
// //   }

// //   // Check if email has the required domain
// //   const emailRegex = /^[^\s@]+@somaiya\.edu$/;
// //   if (!emailRegex.test(email)) {
// //     res.status(400);
// //     throw new Error("Email must have a domain ending with @somaiya.edu!");
// //   }

// //   const userAvailable = await User.findOne({ email });
// //   if (userAvailable) {
// //     res.status(400);
// //     throw new Error("Email already registered!");
// //   }

// //   // Hash Password
// //   const hashedPass = await bcrypt.hash(password, 10);
// //   console.log("Hashed pass: ", hashedPass);
// //   try {
// //     const user = await User.create({
// //       username,
// //       email,
// //       password: hashedPass,
// //     });
// //     console.log(`User created ${user}`);

// //     if (user) {
// //       sendVerifyMail(req.body.name, req.body.email, user_id);
// //       res.status(201).json({ _id: user.id, email: user.email });
// //     }
// //   } catch (error) {
// //     res.status(400);
// //     throw new Error("User data is not valid");
// //   }
// // });

// const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");
// const Token = require("../models/tokenModel");
// const crypto = require("crypto");

// //For email verification
// const sendVerifyMail = asyncHandler(async (name, email, url) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       requireTLS: true,
//       auth: {
//         user: "somaiyasync@gmail.com",
//         pass: "oqfv aium gpar resn",
//       },
//     });
//     const mailOptions = {
//       from: "somaiyasync@gmail.com",
//       to: email,
//       subject: "For verification mail",
//       html:
//         // "<p>Hii!  " +
//         // name +
//         // ", please click here to <a href= "${url}">Verify</a> your mail.</p>",
//         `<p>Hii!  ${name}, please click here to <a href="${url}">Verify</a> your mail.</p>`,
//     };
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//         // res.send({ message: "Opss! Email id not found!" });
//         // res.js("Opss! Email id not found!");
//       } else {
//         // res.send("Verification link has been sent to your email!");
//         console.log("Email has been sent:- ", info.response);
//       }
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// //@desc Register User
// //@route  POST /api/user/register
// const registerUser = asyncHandler(async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     if (!username || !email || !password) {
//       res.status(400);
//       throw new Error("All fields are mandatory!");
//     }

//     let user = await User.findOne({ email });
//     if (user) {
//       res.status(400);
//       throw new Error("Email already registered!");
//     }

//     // Hash Password
//     const hashedPass = await bcrypt.hash(password, 10);

//     // Create user
//     user = await new User({ username, email, password: hashedPass }).save();

//     // Create verification token
//     const token = await new Token({
//       user_id: user._id,
//       token: crypto.randomBytes(32).toString("hex"),
//     }).save();

//     // Construct verification URL
//     const url = `http://localhost:4200/api/users/verify/${user._id}/${token.token}`;

//     // Send verification email
//     await sendVerifyMail(username, email, url);

//     // Send response
//     res
//       .status(200)
//       .send("An email has been sent to your account. Please verify.");
//   } catch (error) {
//     res.status(400);
//     // throw new Error("User data is not valid");
//     res.status(400).json({ message: error.message });
//   }
// });

// //@desc Login User
// //@route  POST /api/user/login
// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     res.status(400);
//     throw new Error("All fields are mandatory!");
//   }

//   const user = await User.findOne({ email });

//   if (!user) {
//     res.status(401);
//     throw new Error("Invalid email or password");
//   }

//   const passwordMatch = await bcrypt.compare(password, user.password);

//   if (!passwordMatch) {
//     res.status(401);
//     throw new Error("Invalid email or password");
//   }

//   if (user.is_verified === 0) {
//     res.status(401);
//     throw new Error("Verify your email");
//   }

//   const accessToken = jwt.sign(
//     {
//       user: {
//         username: user.username,
//         email: user.email,
//         id: user.id,
//       },
//     },
//     process.env.ACCESS_TOKEN_KEY,
//     { expiresIn: "1m" }
//   );
//   req.session.user_id = user._id;
//   res.status(200).json({ message: "Logged In", accessToken });
// });

// //@desc Current User
// //@route  GET /api/user/current
// const currentUser = asyncHandler(async (req, res) => {
//   res.json(req.user);
// });

// //@desc Check verified User
// //@route  GET /api/user/verify
// const verifyMail = asyncHandler(async (req, res) => {
//   try {
//     const user = await User.findOne({ _id: req.params.id });
//     if (!user) return res.status(400).send({ message: "Invalid link" });

//     const token = await Token.findOne({
//       user_id: user._id,
//       token: req.params.token,
//     });
//     if (!token) {
//       return res.status(400).send({ message: "Invalid link" });
//     }

//     const updateInfo = await User.updateOne(
//       { _id: req.params.id }, // Corrected to use req.params.id
//       { $set: { is_verified: 1 } }
//     );
//     console.log(updateInfo);

//     // Remove the token if it exists
//     if (token) {
//       await token.deleteOne(); // Use deleteOne() instead of remove()
//     }

//     // If user is not verified and a token is successfully removed, generate a new token and send verification email
//     if (user.is_verified !== 1) {
//       let newToken = await Token.findOne({ user_id: user._id });
//       if (!newToken) {
//         newToken = await new Token({
//           user_id: user._id,
//           token: crypto.randomBytes(32).toString("hex"),
//         }).save();
//         const url = `http://localhost:4200/api/users/verify/${user._id}/${newToken.token}`;

//         await sendVerifyMail(user.username, user.email, url);
//       }
//       return res
//         .status(200)
//         .send("An email has been sent to your account. Please verify.");
//     }

//     // If user is already verified, send success message
//     res.send({ message: "Email verification successful" });
//   } catch (error) {
//     console.error("Error verifying email:", error);
//     res
//       .status(500)
//       .send({ message: "An error occurred while verifying email" });
//   }
// });

// module.exports = {
//   registerUser,
//   loginUser,
//   currentUser,
//   verifyMail,
// };

// const registerUser = asyncHandler(async (req, res) => {
//   const { username, email, password } = req.body;

//   if (!username || !email || !password) {
//     res.status(400);
//     throw new Error("All fields are mandatory!");
//   }

//   // Check if email has the required domain
//   const emailRegex = /^[^\s@]+@somaiya\.edu$/;
//   if (!emailRegex.test(email)) {
//     res.status(400);
//     throw new Error("Email must have a domain ending with @somaiya.edu!");
//   }

//   const userAvailable = await User.findOne({ email });
//   if (userAvailable) {
//     res.status(400);
//     throw new Error("Email already registered!");
//   }

//   // Hash Password
//   const hashedPass = await bcrypt.hash(password, 10);
//   console.log("Hashed pass: ", hashedPass);
//   try {
//     const user = await User.create({
//       username,
//       email,
//       password: hashedPass,
//     });
//     console.log(`User created ${user}`);

//     if (user) {
//       sendVerifyMail(req.body.name, req.body.email, user_id);
//       res.status(201).json({ _id: user.id, email: user.email });
//     }
//   } catch (error) {
//     res.status(400);
//     throw new Error("User data is not valid");
//   }
// });
