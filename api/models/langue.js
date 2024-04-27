const mongoose = require('mongoose')
const langueSchema = new mongoose.Schema({
    name:String,
    level:String
})

const Langue = mongoose.model('Langue', langueSchema)
module.exports = Langue