require('../config/connection');
const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({

    title: {
        type: String,
        required:[true, "It has to be something"]
        

    },

    content: {
        type: String,
        required: [true, "It has to be something"]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },

})


const Notes = mongoose.model('Notes', NotesSchema);

module.exports = Notes;  

