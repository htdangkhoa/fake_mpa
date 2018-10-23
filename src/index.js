import './logger';
import dotenv from 'dotenv';
import express from 'express';
import basicAuth from 'express-basic-auth';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import timeout from 'connect-timeout';
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
  bodyParser.urlencoded({ limit: '50mb', extended: true }),
  bodyParser.json({ limit: '50mb' }),
  helmet(),
  timeout('120s'),
]);

// app.use(
//   basicAuth({
//     users: { admin: 'UJj&p3@9y{86:J6p' },
//     challenge: false,
//     unauthorizedResponse: req => ({
//       returnCode: 0,
//       isSuccessful: false,
//       returnPayload: null,
//       returnMessage: `You don't have permission to access ${req.path} on this server.`,
//     }),
//   }),
// );

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
