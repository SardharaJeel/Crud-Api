const mongoose = require('mongoose')

const TaskModel = new mongoose.Schema({
    Task: String
})

module.exports = mongoose.model('New_Task', TaskModel)