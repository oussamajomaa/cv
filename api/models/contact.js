const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    tel:String,
    mail: String,
    adresse:String
})





const Contact = mongoose.model('Contact',contactSchema)
module.exports = Contact