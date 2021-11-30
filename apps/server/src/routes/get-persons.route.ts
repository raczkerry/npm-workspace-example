import { Person } from '@belette/shared-utils'
import { Route } from '@belette/rest-utils'

export const getPersons: Route = {
  path: '/persons',
  method: 'get',
  handler: async (req, res) => {
    const persons: Person[] = [
      { firstname: 'Albert' },
      { firstname: 'Georges' },
      { firstname: 'Alice' },
      { firstname: 'Sandy' },
      { firstname: 'Bruno' },
      { firstname: 'Artur' },
      { firstname: 'Perceval' },
      { firstname: 'Caradoc' },
    ]

    res.json(persons)
  },
}
