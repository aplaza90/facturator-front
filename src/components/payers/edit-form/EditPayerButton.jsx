import { useId } from 'react'
import { PropTypes } from 'prop-types'
import '../../EditButton.css'
import { EdiIcon } from '../../Icons.jsx'

export function EditPayerButton ({ hiddenEdit, setHiddenEdit }) {
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
EditPayerButton.propTypes = {
  hiddenEdit: PropTypes.boolean,
  setHiddenEdit: PropTypes.function
}
