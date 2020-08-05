import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import CaseController from './app/controllers/CaseController';

const routes = new Router();
const caseController = new CaseController();

routes.post(
  '/cases',
  celebrate({
    [Segments.BODY]: {
      date: Joi.date().required(),
      state: Joi.string().max(2).required(),
      count: Joi.number().required(),
    },
  }),
  caseController.create,
);
routes.get('/cases', caseController.all);
routes.get(
  '/cases/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  caseController.index,
);
routes.put(
  '/cases/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      date: Joi.date(),
      count: Joi.number(),
    },
  }),
  caseController.update,
);
routes.delete(
  '/cases/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  caseController.delete,
);

export default routes;
