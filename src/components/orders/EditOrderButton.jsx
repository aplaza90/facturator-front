import { useId } from 'react'
import './EditOrderButton.css'
import { EdiIcon } from '../Icons'

export function EditOrderButton ({ hiddenEdit, setHiddenEdit }) {
  const formCheckboxId = useId()
  const handleChange = () => {
    setHiddenEdit(!hiddenEdit)
  }
  return (
    <>
      <label className='edit-button' htmlFor={formCheckboxId}>
        <EdiIcon />
      </label>
      <input id={formCheckboxId} onChange={handleChange} type='checkbox' style={{ display: 'none' }} />
    </>
  )
}
