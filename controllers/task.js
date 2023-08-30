const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Task } = require('../models');
const { handleValidateOwnership, requireToken } = require("../middleware/auth");

router.get('/', async (req, res,) => {
    try{
     res.json(await Task.find({}))
     .populate("owner")
     .exec();;
    } catch (error) {
     res.status(400).json(error)
    }
     
 });
 
 
 router.post("/", requireToken, async (req, res, next) => {
    try {
          // passport will verify the the token passed with the request's Authorization headers and set the current user for the request. 
          const owner = req.user._id
          req.body.owner = owner
      const newTask = await Task.create(req.body);
      res.status(201).json(newTask);
    } catch (err) {
      res.status(400).json({
        error: err.message,
      });
    }
  });
 
 router.get('/:id', async (req, res) => {
     try {
         res.json(await Task.findById(req.params.id))
     } catch (error) {
         res.status(400).json(error)
     }
 
 });
 
 router.delete("/:id", requireToken, async (req, res, next) => {
    try {
      handleValidateOwnership(req, await Task.findById(req.params.id));
      const deletedTask = await Task.findByIdAndRemove(req.params.id);
      res.status(200).json(deletedTask);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
 
  router.put("/:id", requireToken, async (req, res) => {
    try {
      handleValidateOwnership(req, await Task.findById(req.params.id))
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
      res.status(200).json(updatedTask)
    } catch (error) {
      //send error
      res.status(400).json({error: error.message})
    }
})
 
 module.exports = router;