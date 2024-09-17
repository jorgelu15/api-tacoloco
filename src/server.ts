import dotenv from 'dotenv';
import { App } from './App';
import { ENV_CONFIG } from './config/env.config';

dotenv.config();


const app = new App(ENV_CONFIG.PORT ? ENV_CONFIG.PORT : ENV_CONFIG.PORT_DEFAULT, []);
app.listen();
