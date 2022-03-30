import IBmiCalculator from '../interfaces/IBmiCalculator';

class bmiFeetInchesPounds implements IBmiCalculator {
  constructor(
            public height: number,
            public weight: number,
            public inches: number,
  ) {}

  public calculate(): number {
    const totalInches = (this.height * 12) + this.inches;
    return (this.weight / (totalInches ** 2)) * 703;
  }
}

export default bmiFeetInchesPounds;
