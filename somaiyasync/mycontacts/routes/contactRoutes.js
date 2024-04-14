// const express = require("express");
// const router = express.Router();
// const {
//   getContacts,
//   createContact,
//   getContact,
//   updateContact,
//   deleteContact,
//   searchContactsByName,
// } = require("../controllers/contactController");
// const validateToken = require("../middleware/validateTokenHandler");

// // router.use(validateToken)

// // router.use((req, res, next) => {
// //     if (
// //       req.path === "/" ||
// //       req.path === "/search" ||
// //       req.path === "/:id"
// //     ) {
// //       return next(); // Skip validateToken middleware for these routes
// //     }
// //     validateToken(req, res, next); // Apply validateToken middleware to other routes
// // });

// router.route("/").get(getContacts).post(createContact);
// router.route("/search").get(searchContactsByName);

// router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContactsofUser,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  searchUserByName,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use((req, res, next) => {
  if (req.path === "/getAll" || req.path === "/search" || req.path === "/:id") {
    return next(); // Skip validateToken middleware for these routes
  }
  validateToken(req, res, next); // Apply validateToken middleware to other routes
});

// router.use(validateToken);
router.route("/getAll").get(getContacts);
router.route("/").get(getContactsofUser).post(createContact);
router.route("/search").get(searchUserByName);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
