const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true, 
        }, 
        password: {
            type: String,
            required: true,
        }, 
        email: {
            type: String,
            required: [true, "Please provide me with an email!"],
        }
    },
    
);

// mongoose.model(<mongodb collection name>, our schema)
const Users = mongoose.model('User', userSchema);

module.exports = Users;