const express = require('express')
const router = express.Router()
const formationModel = require('../models/formation')

//  Une route pour récupérer toutes les formations
router.get('/formation',async(req,res)=>{
    const formations = await formationModel.find()
    res.json(formations)
})

// Une route pour ajouter une formation
router.post('/formation',async(req,res)=>{
    const formation = req.body
    await formationModel.create(formation)
    res.json(formation)
})

// Une route pour modifier une formation
router.put('/formation/:id', async(req,res)=>{
    const formation = req.body
    const {id} = req.params
    await formationModel.findByIdAndUpdate(id,formation)
    const updatedFormation = await formationModel.findById(id)
    res.json(updatedFormation)
})

router.delete('/formation/:id', async(req,res)=>{
    const { id } = req.params
    const formation = await formationModel.findById(id)
    await formationModel.findByIdAndDelete(id)
    res.json({message:`la formation ${formation.diplome} a été supprimée`})
})


module.exports = router

