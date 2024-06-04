const express = require('express')
const router = express.Router()

const contactModel = require('../models/contact')

//  Une route pour récupérer toutes les formations
router.get('/contact',async(req,res)=>{
    const contacts = await contactModel.find()
    res.json(contacts)
})

// router.get('/contact', async (req, res) => {
//     const contact = await CONTACT.find()
//     res.json(contact)
// })

router.post('/contact', async (req,res)=> {
    await contactModel.deleteOne({})
    const contact = req.body
    await contactModel.create(contact)
    res.json({message:"Les contacts ont été mis à jours"})
})

module.exports = router;
