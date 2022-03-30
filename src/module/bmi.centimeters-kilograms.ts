import IBmiCalculator from '../interfaces/IBmiCalculator';

class bmiCentimetersKilograms implements IBmiCalculator {
  constructor(
        public height: number,
        public weight: number,
  ) {}

  public calculate(): number {
    return this.weight / ((this.height / 100) ** 2);
  }
}

export default bmiCentimetersKilograms;
