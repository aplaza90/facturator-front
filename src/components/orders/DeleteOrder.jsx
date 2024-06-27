import { useContext } from 'react'
import '../DeleteElement.css'
import { deleteOrder } from '../../services/orders'
import { OrderSearchContext } from '../../context/orderSearch'
import { PropTypes } from 'prop-types'
import { DeleteButton } from '../DeleteButton'

export function DeleteOrder ({ id }) {
  const { search, getOrders } = useContext(OrderSearchContext)

  const handleDeleteClick = async () => {
    await deleteOrder({ id })
    getOrders({ search })
  }

  return (
    <DeleteButton handleDeleteClick={handleDeleteClick} />
  )
}

DeleteOrder.propTypes = { id: PropTypes.string }
