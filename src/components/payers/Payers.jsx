import { Payer } from './Payer'
// eslint-disable-next-line react/prop-types
export function ListOfPayers ({ payers }) {
  return (
    <ul className='payers'>
      {
        payers.map(payer => (
          <Payer payer={payer} />
        ))
      }

    </ul>
  )
}

export function NoPayersResult () {
  return (
    <p>No se encontraron pacientes</p>
  )
}

export function Payers ({ payers }) {
  const hasPayers = payers?.length > 0

  return (
    hasPayers
      ? <ListOfPayers payers={payers} />
      : <NoPayersResult />
  )
}
