import { useState } from 'react'
import { PropTypes } from 'prop-types'
import { EditPayerButton } from './edit-form/EditPayerButton'
import { EditPayerForm } from './edit-form/EditPayerForm'
import '../Element.css'
import { DeletePayer } from './DeletePayer'

export function Payer ({ payer }) {
  const [hiddenEdit, setHiddenEdit] = useState(true)
  return (
    <li className='payer' key={payer.id}>
      <div className='payer-complete'>
        <div className='element-and-buttons'>
          <details>
            <summary>{payer.name}</summary>
            <article className='payer-details'>
              <p>{payer.nif}</p>
              <p>{payer.address}</p>
              <p>{payer.zip_code}</p>
              <p>{payer.city}</p>
              <p>{payer.province}</p>
            </article>
          </details>
          <div className='button-box'>
            <EditPayerButton hiddenEdit={hiddenEdit} setHiddenEdit={setHiddenEdit} />
            <DeletePayer id={payer.id} />
          </div>
        </div>
        <EditPayerForm payer={payer} hiddenEdit={hiddenEdit} setHiddenEdit={setHiddenEdit} />
      </div>
    </li>
  )
}
Payer.propTypes = { payer: PropTypes.object }
