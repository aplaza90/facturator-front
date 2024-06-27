import { useState } from 'react'
import '../Element.css'
import { PropTypes } from 'prop-types'
import { InvoiceButton } from './invoice/InvoiceButton'
import { OrderForm } from './OrderForm'
import { EditButton } from '../EditButton'
import { DeleteModal } from './TestDeleteModal'

export const formatDate = ({ dateString }) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

export function Order ({ order }) {
  const [hiddenEdit, setHiddenEdit] = useState(true)
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
            </article>
          </details>
          <div className='button-box'>
            <EditButton onChange={() => { setHiddenEdit(!hiddenEdit) }} />
            <DeleteModal id={order.id} />
            <InvoiceButton number={order.number} />
          </div>
        </div>
        {!hiddenEdit && <OrderForm order={order} />}
      </div>
    </li>
  )
}

Order.propTypes = {
  order: PropTypes.object
}
