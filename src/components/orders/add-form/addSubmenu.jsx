import { useField } from '../../../hooks/useField'
import { useState } from 'react'
import './AddForm.css'
import { PropTypes } from 'prop-types'

export function AddOrderSubmenu () {
  const [status, setStatus] = useState('initial')

  const number = useField({ initValue: '' })
  const date = useField({ initValue: '' })
  const payerName = useField({ initValue: '' })
  const quantity = useField({ initValue: '' })

  const handleAdd = async (event) => {
    event.preventDefault()
    console.log('number && date && payerName && quantity')
    const data = {
      number: number.value,
      date: date.value,
      payer_name: payerName.value,
      quantity: quantity.value
    }

    const url = 'http://localhost:5005/order'
    try {
      const result = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      await result.json()
      setStatus('success')
    } catch (error) {
      setStatus('fail')
    }
  }

  return (
    <>
      <h1>Add Order</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          gap: '20px'
        }}
      >
        <label className='form-label'>
          Número
          <input
            {...number}
            placeholder='TEST-001'
          />
        </label>
        <label className='form-label'>
          Fecha
          <input
            {...date}
            placeholder='2022-01-01'
          />
        </label>
        <label className='form-label'>
          Pagador
          <input
            {...payerName}
            placeholder='Luis Morón'
          />
        </label>
        <label className='form-label'>
          Cantidad
          <input
            {...quantity}
            placeholder='50'
          />
        </label>
      </form>
      {number.value &&
       date.value &&
       payerName.value &&
       quantity.value &&
       (
         <button onClick={handleAdd} className='submit'>
           Añadir
         </button>
       )}
      <Result status={status} />
    </>
  )
}

const Result = ({ status }) => {
  if (status === 'success') {
    return <p>✅ File uploaded successfully!</p>
  } else if (status === 'fail') {
    return <p>❌ File upload failed!</p>
  } else if (status === 'uploading') {
    return <p>⏳ Uploading selected file...</p>
  } else {
    return null
  }
}

Result.propTypes = { status: PropTypes.string }
