const express = require('express');
const router = express.Router();
const { Project } = require('../models');

router.get('/', async (req, res,) => {
    try{
     res.json(await Project.find({}));
    } catch (error) {
     res.status(400).json(error)
    }
     
 });
 
 router.post('/', async (req, res) => {
     try {
         res.json(await Project.create(req.body));
     } catch (error) {
         res.status(400).json(error)
     }
 });
 
 
 router.get('/:id', async (req, res) => {
     try {
         res.json(await Project.findById(req.params.id))
     } catch (error) {
         res.status(400).json(error)
     }
 
 });
 
 router.delete('/:id', async (req, res) => {
     try {
         res.json(await Project.findByIdAndRemove(req.params.id));
     } catch (error) {
         res.status(400).json(error)
     }
 });
 
 
 router.put('/:id', async (req, res) => {
     try {
         res.json(await Project.findByIdAndUpdate(req.params.id, req.body, {new:true}));
     } catch (error) {
         res.status(400).json(error)
     }
     
     
 })
 module.exports = router;