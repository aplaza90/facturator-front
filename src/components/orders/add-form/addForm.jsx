import { useId } from 'react'
import { AddIcon } from '../../Icons'
import { AddOrderSubmenu } from './addSubmenu'

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
        <AddOrderSubmenu />
      </aside>
    </>
  )
}
