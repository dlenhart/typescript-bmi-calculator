import {IsIn, IsNumber, IsOptional} from 'class-validator';

const Metrics = ['inches', 'feet', 'meters', 'centimeters'];
export type Metric = typeof Metrics[number];

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

    @IsIn(Metrics)
      metric!: Metric;
}
