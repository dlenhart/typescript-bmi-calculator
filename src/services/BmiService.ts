import {Service} from 'typedi';
import {Response} from 'express';
import {RequestDto} from '../dtos/request.dto';
import validatorDto from '../validator';
import Calculate from '../module/calculate';
import calculateBmiInchesPounds from '../module/calculate.bmi.inches-pounds';
import calculateBmiFeetInchesPounds from '../module/calculate.bmi.feet-inches-pounds';
import calculateBmiMetersKilograms from '../module/calculate.bmi.meters-kilograms';
import calculateBmiCentimetersKilograms from '../module/calculate.bmi.centimeters-kilograms';

@Service()
class BmiService {
  constructor() {}

  async calculateBmi(dto: RequestDto, response: Response) {
    try {
      await validatorDto(RequestDto, dto);
      const result = this.determineCalculation(dto);
      return response.status(200).json({success: true, result: result});
    } catch (errors) {
      return response.status(400).json({success: false, errors: errors});
    }
  }

  private determineCalculation(dto: any): number {
    switch (dto.metric) {
      case 'inches':
        return new Calculate(new calculateBmiInchesPounds(
            dto.height,
            dto.weight,
        )).calculate();
      case 'feet':
        return new Calculate(new calculateBmiFeetInchesPounds(
            dto.height,
            dto.weight,
            dto.inches,
        )).calculate();
      case 'meters':
        return new Calculate(new calculateBmiMetersKilograms(
            dto.height,
            dto.weight,
        )).calculate();
      case 'centimeters':
        return new Calculate(new calculateBmiCentimetersKilograms(
            dto.height,
            dto.weight,
        )).calculate();
      default:
        return 0;
    }
  }
}

export default BmiService;
