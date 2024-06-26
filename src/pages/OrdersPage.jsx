import { useCallback, useContext } from 'react'
import debounce from 'just-debounce-it'
import { Orders } from '../components/orders/Orders'
import './OrdersPage.css'
import { OrderSearchContext } from '../context/orderSearch'
import { UploadFileForm } from '../components/orders/upload-form/UploadFileForm'
import { Button } from 'flowbite-react'
import { TestAddElementModal } from '../components/TestAddElementModal'
import { OrderForm } from '../components/orders/OrderForm'

const sortOrders = ({ orders }) => {
  return orders.sort((a, b) => new Date(a.date) - new Date(b.date))
}

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
    <div className='page flex-grow mb-44'>
      <header className='page-header'>
        <h1>Lista de facturas</h1>
        <div className='action-options'>
          <form className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange} value={search} name='query' placeholder='Name' />
            <Button
              color='dark'
              type='submit'
              className='bg-transparent text-zinc-50 border border-zinc-400 hover:bg-zinc-500 font-normal'
            >Buscar
            </Button>
          </form>
          <UploadFileForm />
          <TestAddElementModal text='Añadir factura'>
            <OrderForm />
          </TestAddElementModal>
        </div>
        {error}
      </header>

      <main>
        <Orders orders={sortOrders({ orders })} />
      </main>
    </div>
  )
}
