import BmiInterface from '../interfaces/BmiInterface';

export default class Calculate {
  protected calculator;

  constructor(calculate: BmiInterface) {
    this.calculator = calculate;
  }

  calculate(): number {
    return this.calculator.calculate();
  }
}
