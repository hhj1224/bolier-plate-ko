const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {//일반사용자:0, 관리자:1
        type: Number,
        default: 0
    },
    image: String,
    token: {//유효성 관리
        type: String
    },
    tokenExp: {//유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}//다른곳에서도 쓸수있게 exports시켜줌