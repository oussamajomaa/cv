const express = require('express')
const router = express.Router()
const loisirModel = require('../models/loisir')


router.get('/loisir', async(req,res)=> {
    const loisirs = await loisirModel.find()
    res.json(loisirs)
})

router.post('/loisir', async(req,res)=> {
    const loisir = req.body
    await loisirModel.create(loisir)
    res.json({message:`Le loisir ${loisir.description} a été ajouté`})
})

router.put('/loisir/:id', async(req,res)=> {
    const loisir =req.body
    const {id} = req.params
    await loisirModel.findByIdAndUpdate(id,loisir)
    const updatedloisir = await loisirModel.findById(id)
    res.json(updatedloisir)
})

router.delete('/loisir/:id', async(req,res)=> {
    const {id} = req.params
    const loisir = await loisirModel.findById(id)
    await loisirModel.findByIdAndDelete(id)
    res.json({message:`le loisir ${loisir.description} a été supprimé`})
})


module.exports = router