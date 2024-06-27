import { useContext } from 'react'
import '../DeleteElement.css'
import { deleteOrder } from '../../services/orders'
import { OrderSearchContext } from '../../context/orderSearch'
import { PropTypes } from 'prop-types'
import { DeleteModal } from '../DeleteModal'

export function DeleteOrderModal ({ id }) {
  const { search, getOrders } = useContext(OrderSearchContext)

  const handleDelete = async () => {
    await deleteOrder({ id })
    getOrders({ search })
  }

  return (
    <DeleteModal handleDelete={handleDelete} />
  )
}

DeleteOrderModal.propTypes = { id: PropTypes.string }
