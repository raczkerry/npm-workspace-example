import { Route } from '@belette/rest-utils'

export const ping: Route = {
  path: '/ping',
  method: 'get',
  handler: async (req, res) => {
    res.json({ status: 200, message: 'Ready!' })
  },
}
