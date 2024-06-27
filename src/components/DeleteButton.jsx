import { useId, useState } from 'react'
import { DeleteIcon } from './Icons'
import './DeleteElement.css'
import { PropTypes } from 'prop-types'

export function DeleteButton ({ handleDeleteClick }) {
  const deleteCheckboxId = useId()
  const [hiddenDelete, setHiddenDelete] = useState(true)

  return (
    <>
      <label className='delete-button' htmlFor={deleteCheckboxId}>
        <DeleteIcon />
      </label>
      <input onClick={() => setHiddenDelete(false)} id={deleteCheckboxId} type='checkbox' style={{ display: 'none' }} />

      <aside className={hiddenDelete ? 'delete-menu-hidden' : 'delete-menu'}>
        <h4>Se borrará el elemento</h4>
        <div className='buttons'>
          <button onClick={handleDeleteClick}>Borrar</button>
          <button onClick={() => setHiddenDelete(true)}>Cancelar</button>
        </div>
      </aside>
    </>
  )
}

DeleteButton.propTypes = { handleDeleteClick: PropTypes.function }
