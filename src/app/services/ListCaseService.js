import CaseRepository from '../repositories/CaseRepository';

import AppError from '../../errors/AppError';

class ListCaseService {
  constructor() {
    this.caseRepository = new CaseRepository();
  }

  async execute() {
    const cases = await this.caseRepository.findAllCases();

    if (!cases) {
      throw new AppError('Cases not find');
    }

    return cases;
  }
}

export default ListCaseService;
