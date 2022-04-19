import db from '../db';

const Task = {};

Task.get = async (id = null) => {
    if (id) {
        return db.task.findUnique({
            where: {
                id
            }
        });
    }
    return db.task.findMany();

};

Task.create = async (title, end_date) => {
    const result = await db.task.create({
        data: {
            title,
            end_date,
        },
    })
    return result;
};

Task.update = async (id,data) => {
    const result = await db.task.update({
        where: {
            id,
        },
        data,
    });
    return result;
};

Task.delete = async (id) => {
    const result = await db.task.update({
        where: {
            id,
        },
        data:{
            status: 'deleted',
        },
    });
    return result;
};


export default Task;