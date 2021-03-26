const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "name required"],
        minlength: [3, "Name must be at least 3 characters"],
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [8, "Password must be at least 8 characters long"] 
        }
    },
    {timestamps: true}
);

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;