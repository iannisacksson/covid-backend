import CaseRepository from '../repositories/CaseRepository';

import AppError from '../../errors/AppError';

class ListCaseService {
  constructor() {
    this.caseRepository = new CaseRepository();
  }

  async execute(case_id) {
    const caseExist = await this.caseRepository.findById(case_id);

    if (!caseExist) {
      throw new AppError('Case not find');
    }

    await this.caseRepository.delete(caseExist);
  }
}

export default ListCaseService;
