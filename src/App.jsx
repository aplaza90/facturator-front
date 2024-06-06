import './App.css'
import { useCallback, useContext } from 'react'
import { Payers } from './components/Payers'
import { usePayers } from './hooks/usePayers.js'
import debounce from 'just-debounce-it'
import { SearchContext } from './context/search.jsx'

function App () {
  const { search, updateSearch, error } = useContext(SearchContext)
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
