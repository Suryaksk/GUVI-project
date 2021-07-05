const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        name: { type: String, lowercase: true, unique: true, required: true, minlength: 3, maxlength: 10 },
        email: String,
        password:String,
        mobile: Number,
        gender: String,
        age: Number,
        dob: Number,

    });


module.exports = mongoose.model("User", userSchema);
