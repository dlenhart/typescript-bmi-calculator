import IBmiCalculator from '../interfaces/IBmiCalculator';

class calculateBmiCentimetersKilograms implements IBmiCalculator {
  constructor(
        public height: number,
        public weight: number,
  ) {}

  public calculate(): number {
    return this.weight / ((this.height / 100) ** 2);
  }
}

export default calculateBmiCentimetersKilograms;
