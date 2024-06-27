import { useId } from 'react'
import { AddIcon } from '../../Icons'

import './AddForm.css'
import { PayerForm } from '../PayerForm'

export function AddPayerForm () {
  const addCheckboxId = useId()
  return (
    <>
      <label className='add-payer-button' htmlFor={addCheckboxId}>
        <AddIcon />
      </label>
      <input
        id={addCheckboxId}
        type='checkbox'
        style={{ display: 'none' }}
      />

      <aside className='add-payer-submenu'>
        <PayerForm />
      </aside>
    </>
  )
}
