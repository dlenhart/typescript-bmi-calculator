import {IsNumber, IsOptional, IsString} from 'class-validator';

type Metric = 'inches' | 'feet' | 'meters' | 'centimeters';

export interface Request {
    height: number;
    weight: number;
    inches?: number;
    metric: Metric;
}

export class RequestDto implements Request {
    @IsNumber()
      height!: number;

    @IsNumber()
      weight!: number;

    @IsNumber()
    @IsOptional()
      inches?: number;

    @IsString()
      metric!: Metric;
}
