import joi from 'joi'
import { parseEnv } from '@belette/rest-utils'

export interface AppEnv {
  NODE_ENV: 'development' | 'production' | 'test'
  PORT: number
}

export const appEnv = parseEnv<AppEnv>(process.env, {
  NODE_ENV: joi.string().valid('development', 'production', 'test').required(),
  PORT: joi.number().optional().default(5000),
})
