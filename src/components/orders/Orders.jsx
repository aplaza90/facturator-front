import { Order } from './Order'
import { PropTypes } from 'prop-types'

export function ListOfOrders ({ orders }) {
  return (
    <ul className='orders'>
      {
        orders.map(order => (
          <Order key={order.id} order={order} />
        ))
      }

    </ul>
  )
}

export function NoOrdersResult () {
  return (
    <p>No se encontraron facturas</p>
  )
}

export function Orders ({ orders }) {
  const hasOrders = orders?.length > 0

  return (
    hasOrders
      ? <ListOfOrders orders={orders} />
      : <NoOrdersResult />
  )
}

ListOfOrders.propTypes = { orders: PropTypes.array }
Orders.propTypes = { orders: PropTypes.array }
