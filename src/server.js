import express from 'express';
import 'express-async-errors';
import routes from './routes';
import AppError from './errors/AppError';

import './database';

const app = express();

app.use(express.json());

app.use(routes);

app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('🚀️ Server started on port 3333!');
});
