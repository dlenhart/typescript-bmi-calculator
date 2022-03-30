import {Request, Response} from 'express';
import {Service} from 'typedi';
import BmiService from '../services/BmiService';

@Service()
class BmiController {
  constructor(private readonly bmiService: BmiService) { }

  async calculate(request: Request, response: Response) {
    return this.bmiService.calculateBmi(request.body, response);
  }
}

export default BmiController;
