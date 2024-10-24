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
  deleteUser,
  getContactByUsername,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use((req, res, next) => {
  if (
    req.path === "/getAll" ||
    // req.path === "/:username" ||
    req.path === "/search" ||
    req.path === "/deluser/:id"
  ) {
    return next(); // Skip validateToken middleware for these routes
  }
  validateToken(req, res, next); // Apply validateToken middleware to other routes
});

// router.use(validateToken);
router.route("/getAll").get(getContacts);
router.route("/deluser/:id").delete(deleteUser);
router.route("/").get(getContactsofUser).post(createContact);
router.route("/search").get(searchUserByName);
router.route("/:username").get(getContactByUsername);

router
  .route("/:id")
  .get(getContactsofUser)
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
