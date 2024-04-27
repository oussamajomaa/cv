const express = require('express')
const router = express.Router()
const langueModel = require('../models/langue')
const { findById } = require('../models/formation')


router.get('/langue', async(req,res)=> {
    const langues = await langueModel.find()
    res.json(langues)
})

router.post('/langue', async(req,res)=> {
    const langue = req.body
    await langueModel.create(langue)
    res.json({message:`La langue ${langue.name} a été ajoutée`})
})

router.put('/langue/:id', async(req,res)=> {
    const langue =req.body
    const {id} = req.params
    await langueModel.findByIdAndUpdate(id,langue)
    const updatedLangue = await langueModel.findById(id)
    res.json(updatedLangue)
})

router.delete('/langue/:id', async(req,res)=> {
    const {id} = req.params
    const langue = await langueModel.findById(id)
    await langueModel.findByIdAndDelete(id)
    res.json({message:`La langue ${langue.name} a été supprimée`})
})


module.exports = router