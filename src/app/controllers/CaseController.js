import CreateCaseService from '../services/CreateCaseService';
import ListCaseService from '../services/ListCaseService';
import UpdateCaseService from '../services/UpdateCaseService';
import DeleteCaseService from '../services/DeleteCaseService';

const createCaseService = new CreateCaseService();
const listCaseService = new ListCaseService();
const updateCaseService = new UpdateCaseService();
const deleteCaseService = new DeleteCaseService();

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

  async delete(req, res) {
    const { id } = req.params;

    await deleteCaseService.execute(id);

    return res.status(204).json();
  }
}

export default CaseController;
