import CaseRepository from '../repositories/CaseRepository';

class CreateCaseService {
  constructor() {
    this.caseRepository = new CaseRepository();
  }

  async execute(caseBody) {
    const { state } = caseBody;

    const stateExist = await this.caseRepository.findByState(state);

    if (stateExist) {
      const { date, count } = caseBody;

      const updatedCase = await this.caseRepository.update(
        { date, count },
        stateExist,
      );

      return updatedCase;
    }

    const newCase = await this.caseRepository.create(caseBody);

    return newCase;
  }
}

export default CreateCaseService;
