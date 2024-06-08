import './EditPayerForm.css'

import { useField } from '../hooks/useField'

export function EditPayerForm ({ payer, hiddenEdit, setHiddenEdit }) {
  const name = useField({ initValue: payer.name })
  const nif = useField({ initValue: payer.nif })
  const address = useField({ initValue: payer.address })
  const zipCode = useField({ initValue: payer.zip_code })
  const city = useField({ initValue: payer.city })
  const province = useField({ initValue: payer.province })

  const handleSubmit = (event) => {
    event.preventDefault()
    setHiddenEdit(!hiddenEdit)
    const data = {
      name: name.value,
      nif: nif.value,
      address: address.value,
      zip_code: zipCode.value,
      city: city.value,
      province: province.value
    }
    const url = `http://localhost:5005/payer/${payer.id}`
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
      <div className={hiddenEdit ? 'edit-form-hidden' : 'edit-form'}>
        <form onSubmit={handleSubmit}>
          <input
            {...name}
          />
          <input
            {...nif}
          />
          <input
            {...address}
          />
          <input
            {...zipCode}
          />
          <input
            {...city}
          />
          <input
            {...province}
          />
          <button>Editar</button>
        </form>

      </div>
    </>
  )
}
