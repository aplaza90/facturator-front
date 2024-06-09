import { useCallback, useContext } from 'react'
import debounce from 'just-debounce-it'
import { Payers } from '../components/payers/Payers'
import { Link } from '../components/Link'
import { PayerSearchContext } from '../context/payerSearch'
import './PayersPage.css'

export function PayersPage () {
  const {
    search, updateSearch, error, payers, getPayers
  } = useContext(PayerSearchContext)

  const debouncedGetPayers = useCallback(
    debounce(search => {
      getPayers({ search })
    }, 500)
    , [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getPayers({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(event.target.value)
    debouncedGetPayers(newSearch)
  }

  return (
    <div className='page'>
      <header className='page-header'>
        <h1>Lista de pagadores</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Name' />
          <button>Buscar</button>
        </form>
        {error}
      </header>

      <main>
        <Payers payers={payers} />
      </main>
      <Link to='/facturas'>Facturas</Link>
    </div>
  )
}
