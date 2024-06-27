import { useId } from 'react'
import { AddIcon } from '../../Icons'
import { OrderForm } from '../OrderForm'

import './AddForm.css'

export function AddOrderForm () {
  const addCheckboxId = useId()
  return (
    <>
      <label className='add-order-button' htmlFor={addCheckboxId}>
        <AddIcon />
      </label>
      <input
        id={addCheckboxId}
        type='checkbox'
        style={{ display: 'none' }}
      />

      <aside className='add-order-submenu'>
        <OrderForm />
      </aside>
    </>
  )
}
