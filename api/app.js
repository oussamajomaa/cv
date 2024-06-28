
const express = require('express')
const mongoose = require('mongoose')
const formationRoute = require('./routes/formation')
const contactRoute = require('./routes/contact')
const langueRoute = require('./routes/langue')
const experienceRoute = require('./routes/experience')
const loisirRoute = require('./routes/loisir')
const competenceRoute = require('./routes/competence')
const userRoute = require('./routes/user')
const cors = require('cors')
const URL_MONGODB = 'mongodb+srv://osmjom:root@cv.awgtwhz.mongodb.net/cv?retryWrites=true&w=majority&appName=cv'
const cookieParser = require('cookie-parser');

mongoose.connect(URL_MONGODB)
    .then(() => {
        console.log('App coonnected to database')
        app.listen(5555, () => {
            console.log('server is running on port 5555')
        })
    })
    .catch((error) => {
        console.log(error)
    })


const app = express()
app.use(express.json())
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(cookieParser())



// app.use('', contactRoute)
app.use('', formationRoute)
app.use('', contactRoute)
app.use('', langueRoute)
app.use('', experienceRoute)
app.use('', loisirRoute)
app.use('', competenceRoute)
app.use('', userRoute)




