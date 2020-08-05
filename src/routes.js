import { Router } from 'express';

import CaseController from './app/controllers/CaseController';

const routes = new Router();
const caseController = new CaseController();

routes.post('/cases', caseController.create);
routes.get('/cases', caseController.index);

export default routes;
