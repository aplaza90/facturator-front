import { useContext } from 'react'
import '../DeleteElement.css'
import { PayerSearchContext } from '../../context/payerSearch'
import { deletePayer } from '../../services/payers'
import { PropTypes } from 'prop-types'
import { DeleteButton } from '../DeleteButton'

export function DeletePayer ({ id }) {
  const { search, getPayers } = useContext(PayerSearchContext)

  const handleDeleteClick = async () => {
    await deletePayer({ id })
    getPayers({ search })
  }

  return (
    <DeleteButton handleDeleteClick={handleDeleteClick} />
  )
}
DeletePayer.propTypes = { id: PropTypes.string }
