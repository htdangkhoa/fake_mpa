import './logger';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cluster from 'cluster';
import os from 'os';
import route from './routes';

dotenv.config();

const cpus = os.cpus().length;

const app = express();

app.use([bodyParser.json(), bodyParser.urlencoded({ extended: false })]);

app.use('/api', route);

if (cluster.isMaster) {
  console.info(`Server is running on port: ${process.env.PORT}`);
  console.info(`Master ${process.pid} is running`);

  for (let i = 0; i < cpus; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.warn(`Worker ${worker.process.pid} died (${signal || code}). Restarting...`);

    cluster.fork();
  });
} else {
  app.listen(process.env.PORT, () => {
    console.info(`Worker ${process.pid} started.`);
  });
}
