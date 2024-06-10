import { useId } from 'react'
import { PropTypes } from 'prop-types'
import '../../EditButton.css'
import { EdiIcon } from '../../Icons'

export function EditOrderButton ({ hiddenEdit, setHiddenEdit }) {
  const formCheckboxId = useId()
  return (
    <>
      <label className='edit-button' htmlFor={formCheckboxId}>
        <EdiIcon />
      </label>
      <input
        id={formCheckboxId}
        onChange={() => setHiddenEdit(!hiddenEdit)}
        type='checkbox'
        style={{ display: 'none' }}
      />
    </>
  )
}
EditOrderButton.propTypes = {
  hiddenEdit: PropTypes.boolean,
  setHiddenEdit: PropTypes.function
}
