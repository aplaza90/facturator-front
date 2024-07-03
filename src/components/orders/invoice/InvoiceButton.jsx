import { useId, useState } from 'react'
import { PropTypes } from 'prop-types'
import { DownloadIcon } from '../../Icons'
import './Invoice.css'
import { InvoiceDetail } from './InvoiceDetail'
import { getOrderInvoice, getOrderPdfBlob } from '../../../services/orders'
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

  const handlePrint = async () => {
    try {
      const blob = await getOrderPdfBlob({ number })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `factura_${number}.pdf`
      document.body.appendChild(a)
      a.click()

      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (e) {
      console.error('There was an error downloading the PDF:', e)
    }
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
          <button onClick={handlePrint}>Imprimir</button>
        </div>
      </aside>
    </>
  )
}
InvoiceButton.propTypes = {
  number: PropTypes.string,
  setPrinted: PropTypes.function
}
