import CaseRepository from '../repositories/CaseRepository';

import AppError from '../../errors/AppError';

class CreateCaseService {
  constructor() {
    this.caseRepository = new CaseRepository();
  }

  async execute(case_id, caseBody) {
    const stateExist = await this.caseRepository.findById(case_id);

    if (!stateExist) {
      throw new AppError('Case not find');
    }

    const caseUpdated = await this.caseRepository.update(caseBody, stateExist);

    return caseUpdated;
  }
}

export default CreateCaseService;
