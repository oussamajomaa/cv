const express = require('express')
const router = express.Router()
const experienceModel = require('../models/experience')


router.get('/experience', async(req,res)=> {
    const experiences = await experienceModel.find()
    res.json(experiences)
})

router.post('/experience', async(req,res)=> {
    const experience = req.body
    await experienceModel.create(experience)
    res.json(experience)
})

router.put('/experience/:id', async(req,res)=> {
    const experience =req.body
    const {id} = req.params
    await experienceModel.findByIdAndUpdate(id,experience)
    const updatedexperience = await experienceModel.findById(id)
    res.json(updatedexperience)
})

router.delete('/experience/:id', async(req,res)=> {
    const {id} = req.params
    await experienceModel.findByIdAndDelete(id)
    res.json({message:`la experience dont l'ID est ${id} a été supprimée`})
})


module.exports = router