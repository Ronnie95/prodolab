require('../config/connection');
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    taskName: {
        type: String,
        required:[true, "It has to be something"]
        

    },

    description: {
        type: String,
        required: [true, "It has to be something"]
    },

    dueDate: {
        type: String,
        required: [true, "It has to be something"]
    },


    priority: {
        type: String,
        required: [true, "It has to be something"]
    },

    status: {
        complete: Boolean,
    },

})


const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;  

