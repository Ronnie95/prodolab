require('../config/connection');
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({

    projectName: {
        type: String,
        required:[true, "It has to be something"]
        

    },

    description: {
        type: String,
        required: [true, "It has to be something"]
    },

    startDate: {
        type: Date,
        required: [true, "It has to be something"]
    },


    endDate: {
        type: Date,
        required: [true, "It has to be something"]
    },

    status: {
        complete: Boolean,
    },

})


const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;  

