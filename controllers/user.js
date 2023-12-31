const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models')

router.post("/register", async (req, res, next) => {
    //   has the password before storing the user info in the database
    try {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(req.body.password, salt);
  
          req.body.password = passwordHash;
  
          const newUser = await User.create(req.body);
  
          res.status(201).json({
        currentUser: newUser,
        isLoggedIn: true,
      });
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  });
  
  
  module.exports = router;