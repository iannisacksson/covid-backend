import CreateCaseService from '../services/CreateCaseService';
import ListCaseService from '../services/ListCaseService';

const createCaseService = new CreateCaseService();
const listCaseService = new ListCaseService();

class CaseController {
  async create(req, res) {
    const newCase = await createCaseService.execute(req.body);

    return res.json(newCase);
  }

  async index(req, res) {
    const listCase = await listCaseService.execute();

    return res.json(listCase);
  }
}

export default CaseController;
