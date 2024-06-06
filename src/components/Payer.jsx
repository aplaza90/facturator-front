import { useState } from 'react'
import { EditPayerButton } from './EditPayerButton'
import { EditPayerForm } from './EditPayerForm'
import './Payer.css'

export function Payer ({ payer }) {
  const [hiddenEdit, setHiddenEdit] = useState(true)
  return (
    <li className='payer' key={payer.id}>
      <div className='payer-complete'>
        <div className='payer-and-buttons'>
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
          <EditPayerButton hiddenEdit={hiddenEdit} setHiddenEdit={setHiddenEdit} />
        </div>
        <EditPayerForm payer={payer} hiddenEdit={hiddenEdit} setHiddenEdit={setHiddenEdit} />
      </div>
    </li>
  )
}