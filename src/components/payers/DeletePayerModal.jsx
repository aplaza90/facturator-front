import { useContext } from 'react'
import '../DeleteElement.css'
import { PayerSearchContext } from '../../context/payerSearch'
import { deletePayer } from '../../services/payers'
import { PropTypes } from 'prop-types'
import { DeleteModal } from '../DeleteModal'

export function DeletePayerModal ({ id }) {
  const { search, getPayers } = useContext(PayerSearchContext)

  const handleDelete = async () => {
    await deletePayer({ id })
    getPayers({ search })
  }

  return (
    <DeleteModal handleDelete={handleDelete} />
  )
}
DeletePayerModal.propTypes = { id: PropTypes.string }
