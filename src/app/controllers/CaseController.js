import CreateCaseService from '../services/CreateCaseService';
import ListCaseService from '../services/ListCaseService';
import UpdateCaseService from '../services/UpdateCaseService';

const createCaseService = new CreateCaseService();
const listCaseService = new ListCaseService();
const updateCaseService = new UpdateCaseService();

class CaseController {
  async create(req, res) {
    const newCase = await createCaseService.execute(req.body);

    return res.json(newCase);
  }

  async index(req, res) {
    const listCase = await listCaseService.execute();

    return res.json(listCase);
  }

  async update(req, res) {
    const updatedCase = await updateCaseService.execute(req.body);

    return res.json(updatedCase);
  }
}

export default CaseController;
