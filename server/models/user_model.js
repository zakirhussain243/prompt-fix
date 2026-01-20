const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{"strict":"throw"})
const user_model = mongoose.model('user',userSchema)
module.exports = user_model