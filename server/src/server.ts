import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import connect from './app/database/DB';
import routes from './routes';

dotenv.config();
connect();
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://alkabot.vercel.app');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', routes);
const port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port, () => {
  console.log(`🔥 server rodando na porta ${port}`);
});
