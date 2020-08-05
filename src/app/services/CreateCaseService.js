import CaseRepository from '../repositories/CaseRepository';

import AppError from '../../errors/AppError';

class CreateCaseService {
  constructor() {
    this.caseRepository = new CaseRepository();
  }

  async execute(caseBody) {
    const { state } = caseBody;

    const stateExist = await this.caseRepository.findByState(state);
    // const caseUpdated = await this.caseRepository.update(
    //   caseBody,
    //   stateExist,
    // );

    // return caseUpdated;
    if (stateExist) {
      throw new AppError('State exist');
    }

    const newCase = await this.caseRepository.create(caseBody);

    return newCase;
  }
}

export default CreateCaseService;