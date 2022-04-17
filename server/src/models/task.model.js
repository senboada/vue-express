import db from '../db';

const Task = {};

Task.get = async (id = null) => {
    if(id){
        return db.query(`select * from task where id = ${id}`);
    }
    return db.query('select * from task');
};

Task.create = async (title, end_date) => {
    return db.query(`insert into task(title,create_date, end_date) values ('${title}',now(),'${end_date}')`);
}

export default Task;