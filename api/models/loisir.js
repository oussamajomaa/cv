const mongoose = require('mongoose')
const loisirSchema = new mongoose.Schema({
    description:String,
})

const Loisir = mongoose.model('Loisir', loisirSchema)
module.exports = Loisir