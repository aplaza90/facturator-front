import { useContext, useId, useState } from 'react'
import { DeleteIcon } from '../Icons'
import '../DeleteElement.css'
import { PayerSearchContext } from '../../context/payerSearch'
import { deletePayer } from '../../services/payers'
import { PropTypes } from 'prop-types'

export function DeletePayer ({ id }) {
  const deleteCheckboxId = useId()
  const { search, getPayers } = useContext(PayerSearchContext)
  const [hiddenDelete, setHiddenDelete] = useState(true)

  const handleDeleteClick = async () => {
    await deletePayer({ id })
    getPayers({ search })
  }

  return (
    <>
      <label className='delete-button' htmlFor={deleteCheckboxId}>
        <DeleteIcon />
      </label>
      <input onClick={() => setHiddenDelete(false)} id={deleteCheckboxId} type='checkbox' style={{ display: 'none' }} />

      <aside className={hiddenDelete ? 'delete-menu-hidden' : 'delete-menu'}>
        <h4>Se borrará el elemento</h4>
        <div className='buttons'>
          <button onClick={handleDeleteClick}>Delete</button>
          <button onClick={() => setHiddenDelete(true)}>Cancel</button>
        </div>
      </aside>
    </>
  )
}
DeletePayer.propTypes = { id: PropTypes.string }
