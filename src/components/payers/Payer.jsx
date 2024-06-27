import { useState } from 'react'
import { PropTypes } from 'prop-types'
import '../Element.css'
import { DeletePayerModal } from './DeletePayerModal'
import { EditButton } from '../EditButton'
import { PayerForm } from './PayerForm'

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
            <EditButton onChange={() => { setHiddenEdit(!hiddenEdit) }} />
            <DeletePayerModal id={payer.id} />
          </div>
        </div>
        {!hiddenEdit && <PayerForm payer={payer} />}
      </div>
    </li>
  )
}
Payer.propTypes = { payer: PropTypes.object }
