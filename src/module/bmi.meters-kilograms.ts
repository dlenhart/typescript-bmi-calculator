import BmiInterface from '../interfaces/BmiInterface';

class bmiMetersKilograms implements BmiInterface {
  constructor(
        public height: number,
        public weight: number,
  ) {}

  public calculate(): number {
    return this.weight / (this.height ** 2);
  }
}

export default bmiMetersKilograms;
