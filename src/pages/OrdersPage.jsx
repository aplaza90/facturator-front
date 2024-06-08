import { useCallback, useContext, useId} from 'react'
import debounce from 'just-debounce-it'
import { Orders } from '../components/orders/Orders'
import { Link } from '../components/Link'
import './OrdersPage.css'
import { UploadIcon } from '../components/Icons'
import { OrderSearchContext } from '../context/orderSearch'

export function OrdersPage () {
  const {
    search, updateSearch, error, orders, getOrders
  } = useContext(OrderSearchContext)
  const uploadCheckboxId = useId()

  const debouncedGetOrders = useCallback(
    debounce(search => {
      getOrders({ search })
    }, 500)
    , [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getOrders({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(event.target.value)
    debouncedGetOrders(newSearch)
  }

  return (
    <div className='page'>
      <header className='page-header'>
        <h1>Lista de facturas</h1>
        <div className='action-options'>
          <form className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange} value={search} name='query' placeholder='Name' />
            <button>Buscar</button>
          </form>
          <label className='upload-button' htmlFor={uploadCheckboxId}>
            <UploadIcon />
          </label>
          <input id={uploadCheckboxId} type='checkbox' style={{ display: 'none' }} />

          <aside className='upload-form-container'>
            <form className='upload-form'>
              <input type='file' />
              <button>Subir</button>
            </form>
          </aside>
        </div>
        {error}
      </header>

      <main>
        <Orders orders={orders} />
      </main>
      <Link to='/'>Pagadores</Link>
    </div>
  )
}
