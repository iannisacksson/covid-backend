import Case from '../models/Case';

class CaseRepository {
  async create(caseBody) {
    const newCase = await Case.create(caseBody);

    return newCase;
  }

  async findByState(state) {
    const listCase = await Case.findOne({ where: { state } });

    return listCase;
  }

  async findById(id) {
    const caseOne = await Case.findByPk(id);

    return caseOne;
  }

  async findAllCases() {
    const listCase = await Case.findAll();

    return listCase;
  }

  async update(newCase, caseDB) {
    const { date, count } = newCase;

    const caseUpdated = await caseDB.update({ date, count });

    return caseUpdated;
  }

  async delete(caseDelete) {
    await caseDelete.destroy();
  }
}

export default CaseRepository;
