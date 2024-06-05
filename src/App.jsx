import './App.css'
import { useEffect, useState, useRef, useCallback } from 'react'
import { Payers } from './components/payers'
import { usePayers } from './hooks/usePayers.js'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstImput = useRef(true)

  useEffect(() => {
    if (isFirstImput.current) {
      isFirstImput.current = search === ''
      return
    }
    if (search === '') {
      setError('se recuperarán todos los pagadoeres')
      return
    }
    if (search !== '') {
      setError(null)
    }
  }, [search])
  return { search, updateSearch, error }
}

function App () {
  const { search, updateSearch, error } = useSearch()
  const { payers, getPayers } = usePayers({ search })

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

    </div>
  )
}

export default App
