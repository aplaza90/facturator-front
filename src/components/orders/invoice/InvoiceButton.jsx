import { useId, useState } from 'react'
import { PropTypes } from 'prop-types'
import { DownloadIcon } from '../../Icons'
import './Invoice.css'
import { InvoiceDetail } from './InvoiceDetail'
import { getOrderInvoice } from '../../../services/orders'
import invoice from '../../../mocks/invoice.json'

export function InvoiceButton ({ number }) {
  const invoiceCheckboxId = useId()
  const [hiddenInvoice, setHiddenInvoice] = useState(true)
  const [invoiceData, setInvoiceData] = useState(invoice)

  const handleClick = async () => {
    const newData = await getOrderInvoice({ number })
    console.log(newData)
    setInvoiceData(newData)
    setHiddenInvoice(false)
  }

  return (
    <>
      <label className='invoice-button' htmlFor={invoiceCheckboxId}>
        <DownloadIcon />
      </label>
      <input onClick={handleClick} id={invoiceCheckboxId} type='checkbox' style={{ display: 'none' }} />

      <aside className={hiddenInvoice ? 'invoice-menu-hidden' : 'invoice-menu'}>
        <InvoiceDetail invoice={invoiceData} />
        <div className='buttons'>
          <button onClick={() => setHiddenInvoice(true)}>Cerrar</button>
        </div>
      </aside>
    </>
  )
}
InvoiceButton.propTypes = { number: PropTypes.string }
