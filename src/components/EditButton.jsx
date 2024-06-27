import { useId } from 'react'
import { PropTypes } from 'prop-types'
import './EditButton.css'
import { EdiIcon } from './Icons'

export function EditButton ({ onChange }) {
  const formCheckboxId = useId()
  return (
    <>
      <label className='edit-button' htmlFor={formCheckboxId}>
        <EdiIcon />
      </label>
      <input
        id={formCheckboxId}
        onChange={onChange}
        type='checkbox'
        style={{ display: 'none' }}
      />
    </>
  )
}
EditButton.propTypes = {
  onChange: PropTypes.function
}
