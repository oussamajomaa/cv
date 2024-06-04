const express = require('express')
const router = express.Router()
const competenceModel = require('../models/competence')


router.get('/competence', async(req,res)=> {
    const competences = await competenceModel.find()
    res.json(competences)
})

router.post('/competence', async(req,res)=> {
    const competence = req.body
    await competenceModel.create(competence)
    res.json({message:`la competence ${competence.skill} a été ajoutée`})
})

router.put('/competence/:id', async(req,res)=> {
    const competence =req.body
    const {id} = req.params
    await competenceModel.findByIdAndUpdate(id,competence)
    const updatedcompetence = await competenceModel.findById(id)
    res.json({message:`la competence ${updatedcompetence.skill} a été modifiée`})
})

router.delete('/competence/:id', async(req,res)=> {
    const {id} = req.params
    const competence = await competenceModel.findById(id)

    await competenceModel.findByIdAndDelete(id)
    res.json({message:`la competence ${competence.skill} a été supprimée`})
})


module.exports = router