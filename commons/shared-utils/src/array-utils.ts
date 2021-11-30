export const sortByFirstname = (a: { firstname: string }, b: { firstname: string }): number =>
  a.firstname.toUpperCase() > b.firstname.toUpperCase()
    ? 1
    : a.firstname.toUpperCase() < b.firstname.toUpperCase()
    ? -1
    : 0
