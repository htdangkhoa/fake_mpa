import './logger';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cluster from 'cluster';
import os from 'os';
import route from './routes';

dotenv.config();

global.errors = {
  returnCode: 0,
  isSuccessful: false,
  returnPayload: null,
  returnMessage: 'error',
};

const cpus = os.cpus().length;

const app = express();

app.use([
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  helmet(),
]);

app.use('/api', route);

app.get('/', (req, res) => {
  res.send(`MPA Server.`);
});

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
