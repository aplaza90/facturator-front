export function Payer ({ payer }) {
  return (
    <li className='payer' key={payer.id}>
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
      <button className='edit-button'>Editar</button>
    </li>
  )
}