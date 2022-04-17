import mysql2 from 'mysql2';
import util from 'util';
import keys from '../config/keys';

const pool = mysql2.createPool(keys.database, { debug: true });

pool.getConnection((error,connection) => {
    if (error) {
        if (error.code === 'PROTOCOLL_CONNECTION_LOST'){
            console.error('Lost connection');
        }
        if (error.code === 'ER_CON_COUNT_ERROR'){
            console.error('Too many connections');
        }
        if (error.code === 'ENCONNREFUSED'){
            console.error('Connection refused');
        }
    }

    if(connection){
        connection.release();
    }
    console.log('successful connection');

})

pool.query = util.promisify(pool.query);

export default pool;