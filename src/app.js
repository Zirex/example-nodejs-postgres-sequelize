import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Import routes
import taskRoute from './routes/task';

// initialization
if(process.env.NODE_ENV === 'development') {
    dotenv.config();
}
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended : false}));

// Routes
app.use('/api/task', taskRoute);

export default app;