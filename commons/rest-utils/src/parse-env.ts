import joi, { SchemaLike } from 'joi'
import { joiOptions } from '@belette/shared-utils'

export type EnvSpec<T = unknown> = {
  [key in keyof T]: SchemaLike | SchemaLike[]
}

export function parseEnv<E>(processEnv: NodeJS.ProcessEnv = process.env, spec: EnvSpec<E>): E {
  const schema = joi.object(spec).required()

  const { error, value } = schema.validate(processEnv, joiOptions)

  if (error) {
    const details = error.details.map(({ message }) => `- ${message}`).join('\n')
    throw new Error(`Invalid environment configuration:\n${details}`)
  }

  return value
}
