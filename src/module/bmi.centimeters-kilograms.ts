import BmiInterface from '../interfaces/BmiInterface';

class bmiCentimetersKilograms implements BmiInterface {
  constructor(
        public height: number,
        public weight: number,
  ) {}

  public calculate(): number {
    return this.weight / ((this.height / 100) ** 2);
  }
}

export default bmiCentimetersKilograms;
