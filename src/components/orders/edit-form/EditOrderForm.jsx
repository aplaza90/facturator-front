import '../../EditForm.css'

import { useField } from '../../../hooks/useField'
import { PropTypes } from 'prop-types'

export function EditOrderForm ({ order, hiddenEdit, setHiddenEdit, setPrinted }) {
  const number = useField({ initValue: order.number })
  const date = useField({ initValue: order.date })
  const payerName = useField({ initValue: order.payer_name })
  const quantity = useField({ initValue: order.quantity })

  const handleSubmit = (event) => {
    event.preventDefault()
    setHiddenEdit(true)
    setPrinted(false)
    const data = {
      number: number.value,
      date: date.value,
      payer_name: payerName.value,
      quantity: quantity.value
    }
    const url = `http://localhost:5005/order/${order.id}`
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(() => {
        console.log('payer_modified')
      })
      .catch(() => {
        throw Error('Error while patching the data')
      })
  }
  return (
    <>
      <div className={hiddenEdit && 'edit-form-hidden'}>
        <form onSubmit={handleSubmit}>
          <input
            {...number}
          />
          <input
            {...date}
          />
          <input
            {...payerName}
          />
          <input
            {...quantity}
          />
          <button>Editar</button>
        </form>

      </div>
    </>
  )
}

EditOrderForm.propTypes = {
  order: PropTypes.object,
  hiddenEdit: PropTypes.bool,
  setHiddenEdit: PropTypes.function,
  setPrinted: PropTypes.function
}
