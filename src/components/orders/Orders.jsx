import { Order } from './Order'
// eslint-disable-next-line react/prop-types
export function ListOfOrders ({ orders }) {
  return (
    <ul className='orders'>
      {
        orders.map(order => (
          <Order order={order} />
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
