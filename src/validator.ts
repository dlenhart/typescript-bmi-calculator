import {ClassConstructor, plainToClass} from 'class-transformer';
import {validate} from 'class-validator';

export const validatorDto = async <T extends ClassConstructor<any>>(
  dto: T,
  obj: Object,
) => {
  const objInstance = plainToClass(dto, obj);
  const errors = await validate(objInstance);

  if (errors.length > 0) {
    console.log(errors);

    throw new TypeError(
        `validation failed. The error fields : ${errors.map(
            ({property}) => property,
        )}`,
    );
  }
};

export default validatorDto;
