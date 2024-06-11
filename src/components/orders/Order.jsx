import { useState } from 'react'
import { EditOrderButton } from './edit-form/EditOrderButton'
import { EditOrderForm } from './edit-form/EditOrderForm'
import '../Element.css'
import { DeleteOrder } from './DeleteOrder'
import { PropTypes } from 'prop-types'
import { InvoiceButton } from './invoice/InvoiceButton'

export function Order ({ order }) {
  const [hiddenEdit, setHiddenEdit] = useState(true)
  return (
    <li className='order' key={order.id}>
      <div className='order-complete'>
        <div className='element-and-buttons'>
          <details>
            <summary>{order.number}</summary>
            <article className='order-details'>
              <p>{order.number}</p>
              <p>{order.date}</p>
              <p>{order.payer_name}</p>
              <p>{order.quantity}</p>
            </article>
          </details>
          <div className='button-box'>
            <EditOrderButton hiddenEdit={hiddenEdit} setHiddenEdit={setHiddenEdit} />
            <DeleteOrder id={order.id} />
            <InvoiceButton number={order.number} />
          </div>
        </div>
        <EditOrderForm order={order} hiddenEdit={hiddenEdit} setHiddenEdit={setHiddenEdit} />
      </div>
    </li>
  )
}

Order.propTypes = {
  order: PropTypes.object
}
