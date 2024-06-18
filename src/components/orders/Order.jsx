import { useState } from 'react'
import { EditOrderButton } from './edit-form/EditOrderButton'
import { EditOrderForm } from './edit-form/EditOrderForm'
import '../Element.css'
import { DeleteOrder } from './DeleteOrder'
import { PropTypes } from 'prop-types'
import { InvoiceButton } from './invoice/InvoiceButton'
import { Button } from 'flowbite-react'

export const formatDate = ({ dateString }) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

export function Order ({ order }) {
  const [hiddenEdit, setHiddenEdit] = useState(true)
  const [printed, setPrinted] = useState(false)
  return (
    <li className='order' key={order.id}>
      <div className='order-complete'>
        <div className='element-and-buttons'>
          <details>
            <summary>{order.payer_name}</summary>
            <article className='order-details'>
              <p>{order.number}</p>
              <p>{formatDate({ dateString: order.date })}</p>
              <p>{order.payer_name}</p>
              <p>{order.quantity}</p>
              <p>Descargada: {printed ? 'Si' : 'No'}</p>
            </article>
          </details>
          <div className='button-box'>
            <EditOrderButton hiddenEdit={hiddenEdit} setHiddenEdit={setHiddenEdit} />
            <DeleteOrder id={order.id} />
            <InvoiceButton number={order.number} setPrinted={setPrinted} />
          </div>
        </div>
        <EditOrderForm order={order} hiddenEdit={hiddenEdit} setHiddenEdit={setHiddenEdit} setPrinted={setPrinted} />
      </div>
    </li>
  )
}

Order.propTypes = {
  order: PropTypes.object
}
