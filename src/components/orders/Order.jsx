import { useState } from 'react'
import { EditOrderButton } from './EditOrderButton'
import { EditOrderForm } from './EditOrderForm'
import './Order.css'
import { DeleteIcon } from '../Icons'
import { DeleteOrder } from './DeleteOrder'

export function Order ({ order }) {
  const [hiddenEdit, setHiddenEdit] = useState(true)
  return (
    <li className='order' key={order.id}>
      <div className='order-complete'>
        <div className='order-and-buttons'>
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
          </div>
        </div>
        <EditOrderForm order={order} hiddenEdit={hiddenEdit} setHiddenEdit={setHiddenEdit} />
      </div>
    </li>
  )
}