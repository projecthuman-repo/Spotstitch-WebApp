const express = require("express");
const router = express.Router();
const login = require("./login");
const register = require("./register");
const update = require("./update");
const deleteUser = require("./delete"); // Cannot use delete as it is a reserved keyword

// creating user
router.post("/register", register);

// login user
router.post("/login", login);

// update user
router.put("/:id", update);

// delete user
router.delete("/:id", deleteUser);

module.exports = router;
