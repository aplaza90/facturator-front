import { useCallback, useContext } from 'react'
import debounce from 'just-debounce-it'
import { Payers } from '../components/payers/Payers'
import { PayerSearchContext } from '../context/payerSearch'
import './PayersPage.css'
import { AddPayerForm } from '../components/payers/add-form/addForm'
import { Button } from 'flowbite-react'

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
    <div className='page flex-grow mb-44'>
      <header className='page-header'>
        <h1>Lista de pagadores</h1>
        <div>
          <form className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange} value={search} name='query' placeholder='Name' />
            <Button
              color='dark'
              type='submit'
              className='bg-transparent text-zinc-50 border border-zinc-400 hover:bg-zinc-500 font-normal'
            >Buscar
            </Button>
          </form>
          <AddPayerForm />
        </div>
        {error}
      </header>

      <main>
        <Payers payers={payers} />
      </main>
    </div>
  )
}
