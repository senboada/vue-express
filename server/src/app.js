import express,{json} from 'express';
import morgan from 'morgan';
import routes from './routes/';

const app = express();

app.use(morgan('dev'));

app.use(json());

app.use(routes);

export default app;