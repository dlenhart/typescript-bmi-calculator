import IBmiCalculator from '../interfaces/IBmiCalculator';

export default class Calculate {
  protected calculator;

  constructor(calculate: IBmiCalculator) {
    this.calculator = calculate;
  }

  calculate(): number {
    return this.calculator.calculate();
  }
}
