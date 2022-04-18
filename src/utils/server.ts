import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from '../controllers/employeesDataController';

import {errorHandler} from './helpers'

function createServer() {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors({ origin: true, credentials: true }));
  
  app.use(router);
  app.use(errorHandler)




  return app;
}

export default createServer;
