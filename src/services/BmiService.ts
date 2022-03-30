import {Service} from 'typedi';
import {Response} from 'express';
import {RequestDto} from '../dtos/request.dto';
import validatorDto from '../validator';
import Calculate from '../module/calculate';
import bmiInchesPounds from '../module/bmi.inches-pounds';
import bmiFeetInchesPounds from '../module/bmi.feet-inches-pounds';
import bmiMetersKilograms from '../module/bmi.meters-kilograms';
import bmiCentimetersKilograms from '../module/bmi.centimeters-kilograms';

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
        return new Calculate(new bmiInchesPounds(
            dto.height,
            dto.weight,
        )).calculate();
      case 'feet':
        return new Calculate(new bmiFeetInchesPounds(
            dto.height,
            dto.weight,
            dto.inches,
        )).calculate();
      case 'meters':
        return new Calculate(new bmiMetersKilograms(
            dto.height,
            dto.weight,
        )).calculate();
      case 'centimeters':
        return new Calculate(new bmiCentimetersKilograms(
            dto.height,
            dto.weight,
        )).calculate();
      default:
        return 0;
    }
  }
}

export default BmiService;
