import BmiInterface from '../interfaces/BmiInterface';

class bmiInchesPounds implements BmiInterface {
  constructor(
        public height: number,
        public weight: number,
  ) {}

  public calculate(): number {
    return (this.weight / (this.height ** 2)) * 703;
  }
}

export default bmiInchesPounds;
