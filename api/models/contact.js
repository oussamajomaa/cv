const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    nom:String,
    prenom:String,
    tel:String,
    email: String,
    adresse:String
})





const Contact = mongoose.model('Contact',contactSchema)
module.exports = Contact