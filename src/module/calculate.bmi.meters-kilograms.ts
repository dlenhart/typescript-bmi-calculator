import IBmiCalculator from '../interfaces/IBmiCalculator';

class calculateBmiMetersKilograms implements IBmiCalculator {
  constructor(
        public height: number,
        public weight: number,
  ) {}

  public calculate(): number {
    return this.weight / (this.height ** 2);
  }
}

export default calculateBmiMetersKilograms;
