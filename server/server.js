require('dotenv').config();
const exp = require('express');
const cors = require('cors')
const { mongoose } = require('mongoose');
const app = exp();
const user_app = require('../server/apis/user_api.js')
const resume_app = require('../server/apis/resume_upload.js')
app.use(cors())
app.use(exp.json())//middle ware.

const port = process.env.PORT || 3000
mongoose.connect(process.env.DBURL)
.then(()=>{
    app.listen(port,()=>{
        console.log(`port is listening on ${port}`)
    })
})
.catch((err)=>{
    console.log(`error occured ${err}`)
})
app.use('/user-api',user_app)
app.use('/resume',resume_app)