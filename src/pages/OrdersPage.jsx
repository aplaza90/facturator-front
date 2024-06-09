import { useCallback, useContext } from 'react'
import debounce from 'just-debounce-it'
import { Orders } from '../components/orders/Orders'
import { Link } from '../components/Link'
import './OrdersPage.css'
import { OrderSearchContext } from '../context/orderSearch'
import { UploadFileForm } from '../components/orders/UploadFileForm'

export function OrdersPage () {
  const {
    search, updateSearch, error, orders, getOrders
  } = useContext(OrderSearchContext)

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
          <UploadFileForm />
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
