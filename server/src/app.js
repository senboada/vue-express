import express,{json} from 'express';
import morgan from 'morgan';
import routes from './routes/';
import cors from 'cors';

const app = express();

app.use(morgan('dev'));

app.use(json());
app.use(cors());

app.use(routes);

export default app;