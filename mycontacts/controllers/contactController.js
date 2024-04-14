// const asyncHandler = require("express-async-handler");
// const Contact = require("../models/contactModel");
// const User = require("../models/userModel");

// //@desc Get contacts
// //@route  GET /api/contacts
// //@access public
// const getContacts = asyncHandler(async (req, res) => {
//   const contacts = await User.find();
//   res.status(200).json(contacts);
// });
// // const getContacts = asyncHandler(async (req, res) => {
// //   const contacts = await Contact.find({ user_id: req.user.id });
// //   res.status(200).json(contacts);
// // });
// //

// //@desc Create contact
// //@route  POST /api/contacts
// //@access public
// const createContact = asyncHandler(async (req, res) => {
//   console.log("The request body is: ", req.body);
//   const { name, email, phone } = req.body;
//   if (!name || !email || !phone) {
//     res.status(400);
//     throw new Error("All fields are mandatory");
//   }
//   const contact = await Contact.create({
//     name,
//     email,
//     phone,
//     user_id: req.user.id,
//   });
//   res.status(201).json(contact);
// });

// // {
// //   "email": "harsheel@gmail.com",
// //   "password": "12345"
// // }

// // @desc Get contact
// // @route  GET /api/contact/:id
// //@access public
// const getContact = asyncHandler(async (req, res) => {
//   try {
//     const contact = await Contact.findById(req.params.id);
//     res.json(contact);
//   } catch (error) {
//     res.status(404);
//     throw new Error("Contact not found in the database");
//   }
// });

// // @desc Get contact by name
// // @route  GET /api/contact/:name
// //@access public
// const getContactByName = asyncHandler(async (req, res) => {
//   try {
//     const contact = await Contact.findOne({ name: req.params.name });
//     res.json(contact);
//   } catch (error) {
//     res.status(404);
//     throw new Error("Contact not found in the database");
//   }
// });

// //@desc Update contacts
// //@route  PUT /api/contacts/:id
// //@access private
// const updateContact = asyncHandler(async (req, res) => {
//   try {
//     const contact = await Contact.findById(req.params.id);
//     const updatedContact = await Contact.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.status(201).json(updatedContact);
//   } catch (error) {
//     res.status(404);
//     throw new Error("Contact not found in the database");
//   }
// });

// //@desc Delete contacts
// //@route  DELETE /api/contacts/:id
// //@access private
// const deleteContact = asyncHandler(async (req, res) => {
//   try {
//     const contact = await User.findById(req.params.id);
//     await User.deleteOne({ _id: req.params.id });
//     res.status(200).json(contact);
//   } catch (error) {
//     res.status(404);
//     throw new Error("Contact not found in the database");
//   }
// });

// // @desc Search contacts by name
// // @route  GET /api/contacts/search?q=name
// ////@access public
// const searchContactsByName = asyncHandler(async (req, res) => {
//   try {
//     const { q } = req.query;
//     if (!q) {
//       res
//         .status(400)
//         .json({ message: "Search query parameter 'q' is required" });
//       return;
//     }
//     const contacts = await User.find({
//       $or: [
//         { username: { $regex: new RegExp(q, "i") } }, // Case-insensitive search for name
//         { email: { $regex: new RegExp(q, "i") } }, // Case-insensitive search for email
//       ],
//     });
//     res.json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// module.exports = {
//   getContacts,
//   createContact,
//   getContact,
//   updateContact,
//   deleteContact,
//   getContactByName,
//   searchContactsByName,
// };

// //async Handler functions -> not giving proper output
// // TO GET SINGLE CONTACT:
// // const getContact = asyncHandler(async (req, res) => {
// //   const contact = await Contact.findById(req.params.id);
// //   if (!contact) {
// //     res.status(404)
// //     throw new Error("Contact not found in the database");
// //   }
// //   res.status(200).json(contact);
// // });

// //TO UPDATE CONTACT
// // const updateContact = asyncHandler(async (req, res) => {
// //   const contact = await Contact.findById(req.params.id);
// //   if (!contact) {
// //     res.status(404);
// //     throw new Error("Contact not found in the database");
// //   }

// //TO DELETE CONTACT
// //   const updatedContact = await Contact.findByIdAndUpdate(
// //     req.params.id,
// //     req.body,
// //     { new: true }
// //   );
// //   res.status(201).json(updatedContact);
// // });

// // const deleteContact = asyncHandler(async (req, res) => {

// //   const contact = await Contact.findById(req.params.id);
// //   if (!contact) {
// //     res.status(404);
// //     throw new Error("Contact not found in the database");
// //   }
// //   await Contact.remove();
// //   res.status(200).json(contact);
// // });

const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const User = require("../models/userModel");

//@desc Get contacts
//@route  GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});
//@desc Get Users
//@route  GET /api/users
//@access public
const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
});
//// profile created by particular user
const getContactsofUser = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});
//

//@desc Create contact
//@route  POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body);

  const existingContact = await Contact.findOne({ user_id: req.user.id });
  if (existingContact) {
    res.status(400);
    throw new Error("User already has a contact");
  }
  const {
    fname,
    // lname,
    gender,
    usertype,
    email,
    currdegree,
    currcourse,
    // curryear,
    passyear,
    // percentage,
    // cgpa,
    skillss,
    skillsDescp,
    // projectTitle,
    // projectDesc,
    projectLink,
    // techno,
    linkedIn,
    github,
    // leetCode,
    insta,
    // wp,
    // facebook,
    // twitter,
  } = req.body;
  if (
    !fname ||
    // !lname ||
    !gender ||
    !usertype ||
    !email ||
    !currdegree ||
    !currcourse ||
    // !curryear ||
    !passyear ||
    !skillss
  ) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    fname,
    // lname,
    gender,
    usertype,
    email,
    education: {
      currdegree,
      currcourse,
      // curryear,
      passyear,
      // percentage,
      // cgpa,
    },
    skills: {
      skillss,
      skillsDescp,
    },
    project: {
      // projectTitle,
      // projectDesc,
      projectLink,
      // techno,
    },
    personalInfo: {
      linkedIn,
      github,
      // leetCode,
      insta,
      // wp,
      // facebook,
      // twitter,
    },
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});

// const createContact = asyncHandler(async (req, res) => {
//   console.log("The request body is: ", req.body);
//   const { name, email, phone } = req.body;
//   if (!name || !email || !phone) {
//     res.status(400);
//     throw new Error("All fields are mandatory");
//   }
//   const contact = await Contact.create({
//     name,
//     email,
//     phone,
//     user_id: req.user.id,
//   });
//   res.status(201).json(contact);
// });

// @desc Get contact
// @route  GET /api/contact/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
  } catch (error) {
    res.status(404);
    throw new Error("Contact not found in the database");
  }
});

// @desc Get contact by name
// @route  GET /api/contact/:name
//@access public
const getContactByName = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findOne({ name: req.params.name });
    res.json(contact);
  } catch (error) {
    res.status(404);
    throw new Error("Contact not found in the database");
  }
});

//@desc Update contacts
//@route  PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updatedContact);
  } catch (error) {
    res.status(404);
    throw new Error("Contact not found in the database");
  }
});

//@desc Delete contacts
//@route  DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
  } catch (error) {
    res.status(404);
    throw new Error("Contact not found in the database");
  }
});

// @desc Search contacts by name
// @route  GET /api/contacts/search?q=name
////@access public
const searchUserByName = asyncHandler(async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      res
        .status(400)
        .json({ message: "Search query parameter 'q' is required" });
      return;
    }
    const contacts = await User.find({
      $or: [
        { username: { $regex: new RegExp(q, "i") } }, // Case-insensitive search for name
        { email: { $regex: new RegExp(q, "i") } }, // Case-insensitive search for email
      ],
    });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = {
  getContacts, //All profiles
  getContactsofUser, // profile created by particular user
  createContact,
  getContact,
  updateContact,
  deleteContact,
  getContactByName,
  searchUserByName,
  getUsers,
};

//async Handler functions -> not giving proper output
// TO GET SINGLE CONTACT:
// const getContact = asyncHandler(async (req, res) => {
//   const contact = await Contact.findById(req.params.id);
//   if (!contact) {
//     res.status(404)
//     throw new Error("Contact not found in the database");
//   }
//   res.status(200).json(contact);
// });

//TO UPDATE CONTACT
// const updateContact = asyncHandler(async (req, res) => {
//   const contact = await Contact.findById(req.params.id);
//   if (!contact) {
//     res.status(404);
//     throw new Error("Contact not found in the database");
//   }

//TO DELETE CONTACT
//   const updatedContact = await Contact.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );
//   res.status(201).json(updatedContact);
// });

// const deleteContact = asyncHandler(async (req, res) => {

//   const contact = await Contact.findById(req.params.id);
//   if (!contact) {
//     res.status(404);
//     throw new Error("Contact not found in the database");
//   }
//   await Contact.remove();
//   res.status(200).json(contact);
// });
