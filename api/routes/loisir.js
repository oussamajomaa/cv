const express = require('express')
const router = express.Router()
const loisirModel = require('../models/loisir')
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const { token } = req.cookies
    if (!token) {
        return res.status(401).json({ message: 'Access token is missing or invalid' });
    }

    jwt.verify(token, 'osm', (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        // req.user = user;
        next();
    });
};

router.get('/loisir', async (req, res) => {
    const loisirs = await loisirModel.find()
    res.json(loisirs)
})

router.post('/loisir', verifyToken, async (req, res) => {
    // console.log(req.user);
    const loisir = req.body
    await loisirModel.create(loisir)
    res.json({ message: `Le loisir ${loisir.description} a été ajouté` })
})



// router.put('/loisir/:id', async(req,res)=> {
//     const loisir =req.body
//     const {id} = req.params
//     await loisirModel.findByIdAndUpdate(id,loisir)
//     const updatedloisir = await loisirModel.findById(id)
//     res.json(updatedloisir)
// })

router.delete('/loisir/:id', verifyToken, async (req, res) => {
    const { id } = req.params
    const loisir = await loisirModel.findById(id)
    await loisirModel.findByIdAndDelete(id)
    res.json({ message: `le loisir ${loisir.description} a été supprimé` })
})


module.exports = router