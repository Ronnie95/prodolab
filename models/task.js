require('../config/connection');
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    taskName: {
        type: String,
        require: true,
        

    },

    description: {
        type: String,
        require: true,
    },

    dueDate: {
        due: Date,
        require: true,
    },


    priority: {
        type: String,
        require: true,
    },

    status: {
        complete: Boolean,
        require: true,
    },

})


const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;  

