const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: [true, "Name required"] },
    password: { type: String, required: [true, "Password required"]}    
});
module.exports = mongoose.model('Author', userSchema);