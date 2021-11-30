import React from 'react'
import { Person, sortByFirstname } from '@belette/shared-utils'

export const App: React.FC = () => {
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

  return (
    <>
    <h1>
      Coucou!
    </h1>
    {persons.sort(sortByFirstname).map(({ firstname }) => <p>{firstname}</p>)}
    </>
  )
}
