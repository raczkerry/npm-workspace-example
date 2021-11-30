import { Application, Handler } from 'express'
import { Route } from './rest-utils-types'
import { asyncHandler } from './async-handler'

export const registerRoutes = (app: Application, routes: Route[]): void => {
  for (const { path, method, handler, middlewares = [], schema } of routes) {
    const handlers = [...middlewares, handler]

    const args: [string, ...Handler[]] = [path, ...handlers.map(asyncHandler)]
    app[method](...args)
  }
}
