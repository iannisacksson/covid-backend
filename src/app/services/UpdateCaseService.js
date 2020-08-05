import CaseRepository from '../repositories/CaseRepository';

import AppError from '../../errors/AppError';

class CreateCaseService {
  constructor() {
    this.caseRepository = new CaseRepository();
  }

  async execute(caseBody) {
    const { state } = caseBody;

    const stateExist = await this.caseRepository.findByState(state);

    if (!stateExist) {
      throw new AppError('State not find');
    }

    const caseUpdated = await this.caseRepository.update(caseBody, stateExist);

    return caseUpdated;
  }
}

export default CreateCaseService;
