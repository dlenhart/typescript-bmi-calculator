import IBmiCalculator from '../interfaces/IBmiCalculator';

class bmiMetersKilograms implements IBmiCalculator {
  constructor(
        public height: number,
        public weight: number,
  ) {}

  public calculate(): number {
    return this.weight / (this.height ** 2);
  }
}

export default bmiMetersKilograms;
