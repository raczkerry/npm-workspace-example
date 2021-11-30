import { AnySchema } from 'joi'
import { Handler } from 'express'

export type HttpVerb = 'get' | 'post' | 'patch' | 'put' | 'delete' | 'head'

export interface Route {
  path: string
  method: HttpVerb
  schema?: {
    body?: AnySchema
    params?: AnySchema
    query?: AnySchema
    headers?: AnySchema
  }
  middlewares?: Handler[]
  handler: Handler
}
