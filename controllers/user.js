const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models')
const { createUserToken } = require("../middleware/auth");

router.post("/login", async (req, res, next) => {
  try {
    const loggingUser = req.body.username;
    const foundUser = await User.findOne({ username: loggingUser });
    const token = await createUserToken(req, foundUser);
    res.status(200).json({
      user: foundUser,
      isLoggedIn: true,
      token,
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

router.get( "/logout", requireToken, async (req, res, next) => {
  try {
    const currentUser = req.user.username
		delete req.user
    res.status(200).json({
      message: `${currentUser} currently logged out`,
      isLoggedIn: false,
      token: "",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


  
  module.exports = router;