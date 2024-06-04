const mongoose = require('mongoose')
const experienceSchema = new mongoose.Schema({
    year:String,
    company:String,
    job:String,
    mission:String,
})

const Experiece = mongoose.model('Experiece', experienceSchema)
module.exports = Experiece