import taskService from '../models/task.model';
import httpStatus from 'http-status';

const TaskController = {};

TaskController.index = async (req, res) => {
    const task = await taskService.get();
    res.status(httpStatus.OK).json(task);
};

TaskController.show = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await taskService.get(id);
        res.status(httpStatus.OK).json(task);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json(error.message);
    }
};

TaskController.store = async (req, res) => {
    try {
        const {title, end_date} = req.body;
        const task = await taskService.create(title, end_date);
        if(task){
            res.status(httpStatus.CREATED).json('Record created successfully');
        }
        res.status(httpStatus.BAD_REQUEST);
        
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json(error.message);
    }
};

TaskController.update = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, end_date} = req.body;
        const task = await taskService.get();
        res.json(task);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json(error.message);
    }
};

TaskController.destroy = async (req, res) => {
    const task = await taskService.get();
    res.json(task);
};

export default TaskController;