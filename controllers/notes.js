const express = require('express');
const router = express.Router();
const { Notes } = require('../models');
const { handleValidateOwnership, requireToken } = require("../middleware/auth");

router.get('/', async (req, res,) => {
    try{
     res.json(await Notes.find({}))
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
      const newNotes = await Notes.create(req.body);
      res.status(201).json(newNotes);
    } catch (err) {
      res.status(400).json({
        error: err.message,
      });
    }
  });
 
 
 router.get('/:id', async (req, res) => {
     try {
         res.json(await Notes.findById(req.params.id))
     } catch (error) {
         res.status(400).json(error)
     }
 
 });
 

 router.delete("/:id", requireToken, async (req, res, next) => {
    try {
      handleValidateOwnership(req, await Notes.findById(req.params.id));
      const deletedNotes = await Notes.findByIdAndRemove(req.params.id);
      res.status(200).json(deletedNotes);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
 
 router.put("/:id", requireToken, async (req, res) => {
    try {
      handleValidateOwnership(req, await Notes.findById(req.params.id))
      const updatedNotes = await Notes.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
      res.status(200).json(updatedNotes)
    } catch (error) {
      //send error
      res.status(400).json({error: error.message})
    }
})
 

 module.exports = router;