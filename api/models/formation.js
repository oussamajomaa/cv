const mongoose = require('mongoose')
const formationSchema = new mongoose.Schema({
    year:String,
    establishment: String,
    description:String
})

const Formation = mongoose.model('Formation',formationSchema)
module.exports = Formation