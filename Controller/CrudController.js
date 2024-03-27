const Model = require('../Model/CrudModel');

exports.Create = async function (req, res) {
    try {
        const { Task } = req.body;
        if (!Task) throw new Error("Please Enter A Task");

        const TaskData = await Model.create({
            Task
        })

        res.status(200).json({
            status: "Task Is Added As Successfully...",
            TaskData
        });
    } catch (error) {
        res.status(400).json({
            status: "Sorry The Task Is Not Added...",
            message: error.message
        });
    }
}

exports.Show = async function (req, res) {
    try {
        const TaskData = await Model.find({});

        res.status(200).json({
            status: "Task Is Find As Successfully...",
            TaskData
        });
    } catch (error) {
        res.status(400).json({
            status: "Sorry The Task Is Not Find...",
            message: error.message
        });
    }
}

exports.Update = async function (req, res) {
    try {
        const { id } = req.query;

        const TaskData = await Model.findByIdAndUpdate(id, req.body, { new: true })

        res.status(200).json({
            status: "Task Is Updated As Successfully...",
            TaskData
        });
    } catch (error) {
        res.status(400).json({
            status: "Sorry The Task Is Not Updated...",
            message: error.message
        });
    }
}

exports.Delete = async function (req, res) {
    try {
        const { id } = req.query;

        const TaskData = await Model.findByIdAndDelete(id, req.body, { new: true })

        res.status(200).json({
            status: "Task Is Deleted As Successfully...",
            TaskData
        });
    } catch (error) {
        res.status(400).json({
            status: "Sorry The Task Is Not Deleted...",
            message: error.message
        });
    }
}