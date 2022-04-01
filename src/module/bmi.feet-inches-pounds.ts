import BmiInterface from '../interfaces/BmiInterface';

class bmiFeetInchesPounds implements BmiInterface {
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
