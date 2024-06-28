const express = require('express')
const router = express.Router()
const userSchema = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// router.get('/user', (req,res) => {
//     const hash = bcrypt.hashSync('password', 10)

//     res.json(hash)
// })

router.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
})


router.post('/login', async (req, res) => {
    const { username, password } = req.body
    const user = await userSchema.findOne({ username: username })
    if (user) {
        let hash = user.password
        bcrypt.compare(password, hash, (err, isMatch) => {
            if (!isMatch) {
                res.json({ message: 'Password is incorrect' })
            } else {
                const token = jwt.sign({ id: user.id, username: user.username }, 'osm')
                res.status(200).cookie('token', token).json({
                    id: user.id,
                    username: user.username,
                    token: token,
                })
            }
        })
    } else {
        res.json({ message: "L'utilisateur n'existe pas" })
    }
  
})

module.exports = router