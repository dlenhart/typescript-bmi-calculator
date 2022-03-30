import IBmiCalculator from '../interfaces/IBmiCalculator';

class calculateBmiInchesPounds implements IBmiCalculator {
  constructor(
        public height: number,
        public weight: number,
  ) {}

  public calculate(): number {
    return (this.weight / (this.height ** 2)) * 703;
  }
}

export default calculateBmiInchesPounds;