import { AsyncValidationOptions } from 'joi'

export const joiOptions: AsyncValidationOptions = {
  abortEarly: false,
  stripUnknown: true,
  convert: true,
}
