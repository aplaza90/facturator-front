import { Payer } from './Payer'
import { PropTypes } from 'prop-types'

export function ListOfPayers ({ payers }) {
  return (
    <ul className='payers'>
      {
        payers.map(payer => (
          <Payer key={payer.id} payer={payer} />
        ))
      }

    </ul>
  )
}
ListOfPayers.propTypes = { payers: PropTypes.array }

export function NoPayersResult () {
  return (
    <p>No se encontraron pagadores</p>
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
Payers.propTypes = { payers: PropTypes.array }
