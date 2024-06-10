import { useField } from '../../../hooks/useField'
import { useState } from 'react'
import './AddForm.css'
import { PropTypes } from 'prop-types'

export function AddPayerSubmenu () {
  const [status, setStatus] = useState('initial')

  const name = useField({ initValue: '' })
  const nif = useField({ initValue: '' })
  const address = useField({ initValue: '' })
  const zipCode = useField({ initValue: '' })
  const city = useField({ initValue: '' })
  const province = useField({ initValue: '' })

  const handleAdd = async (event) => {
    event.preventDefault()
    const data = {
      name: name.value,
      nif: nif.value,
      address: address.value,
      zip_code: zipCode.value,
      city: city.value,
      province: province.value
    }

    const url = 'http://localhost:5005/payer'
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
      <h1>Añadir Pagador</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          gap: '20px'
        }}
      >
        <label className='form-label'>
          Nombre
          <input
            {...name}
            placeholder='Luis Morón'
          />
        </label>
        <label className='form-label'>
          NIF
          <input
            {...nif}
            placeholder='12345678A'
          />
        </label>
        <label className='form-label'>
          Dirección
          <input
            {...address}
            placeholder='C/ Panadero, N-221, Letra-B'
          />
        </label>
        <label className='form-label'>
          Código Postal
          <input
            {...zipCode}
            placeholder='25250'
          />
        </label>
        <label className='form-label'>
          Municipio
          <input
            {...city}
            placeholder='Madrid'
          />
        </label>
        <label className='form-label'>
          Provincia
          <input
            {...province}
            placeholder='Madrid'
          />
        </label>
      </form>
      {name.value &&
       nif.value &&
       address.value &&
       zipCode.value &&
       city.value &&
       province.value &&
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
