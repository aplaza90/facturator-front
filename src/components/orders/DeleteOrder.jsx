import { useContext, useId, useState } from 'react'
import { DeleteIcon } from '../Icons'
import './DeleteOrder.css'
import { deleteOrder } from '../../services/orders'
import { OrderSearchContext } from '../../context/orderSearch'

export function DeleteOrder ({ id }) {
  const deleteCheckboxId = useId()
  const { search, getOrders } = useContext(OrderSearchContext)
  const [hiddenDelete, setHiddenDelete] = useState(true)

  const handleDeleteClick = async () => {
    await deleteOrder({ id })
    getOrders({ search })
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