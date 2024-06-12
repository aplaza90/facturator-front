import { formatDate } from '../Order'
// eslint-disable-next-line react/prop-types
export function InvoiceDetail ({ invoice }) {
  return (
    <>
      <header style={{ display: 'flex' }}>
        <section className='invoice-data'>
          <h4>Datos de la Factura</h4>
          <p>{invoice.invoice_number}</p>
          <p>{formatDate({ dateString: invoice.invoice_date })}</p>
        </section>
      </header>

      <div className='persons-data'>
        <section className='payer-data'>
          <h4>Datos del Pagador</h4>
          <p>{invoice.client_name}</p>
          <p>{invoice.client_address}</p>
          <p>
            {invoice.client_zip_code} {invoice.client_city}, {invoice.client_province}
          </p>
          <p>{invoice.client_nif}</p>
        </section>
        <section className='professional-data'>
          <h4>Datos del Beneficiario</h4>
          <p>{invoice.professional_name}</p>
          <p>{invoice.professional_address}</p>
          <p>
            {invoice.professional_zip_code} {invoice.professional_city}, {invoice.professional_province}
          </p>
          <p>{invoice.professional_nif}</p>
        </section>
      </div>

      <section className='invoice-details'>
        <h4>Detalle de la Factura</h4>
        <table>
          <thead>
            <tr>
              <th scope='col' />
              <th scope='col'>UNIDADES</th>
              <th scope='col'>PRECIO UNIDAD</th>
              <th scope='col'>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {
              invoice.order_lines.map(line => (
                // eslint-disable-next-line react/jsx-key
                <tr>
                  <td>SESIONES</td>
                  <td>{line.units}</td>
                  <td>{line.price}</td>
                  <td>{line.subtotal}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className='bottom-tables'>
          <table className='taxes-table'>
            <tr>
              <th scope='col' colSpan='2'>BASE IMPONIBLE</th>
              <td>{invoice.Total_a_pagar}</td>
            </tr>
            <tr>
              <th scope='col'>DESCUENTO (%)</th>
              <td>0,0%</td>
              <td>{invoice.Total_a_pagar}</td>
            </tr>
            <tr>
              <th scope='col'>* IVA (%)</th>
              <td>0,0%</td>
              <td>{invoice.Total_a_pagar}</td>
            </tr>
            <tr>
              <th scope='col'>** IRPF (%)</th>
              <td>0,0%</td>
              <td>{invoice.Total_a_pagar}</td>
            </tr>
          </table>

          <table className='detail-taxes'>
            <tr>
              <th scope='col'>Cantidad de IVA</th>
              <td>{invoice.iva_qty}</td>
            </tr>
            <tr>
              <th scope='col'>Cantidade de IRPF</th>
              <td>{invoice.irpf_qty}</td>
            </tr>
          </table>
        </div>
        <table className='total-invoice'>
          <tr>
            <th scope='col' colSpan='3'>TOTAL DE LA FACTURA</th>
            <td>{invoice.Total_a_pagar}</td>
          </tr>
        </table>
      </section>
    </>
  )
}
