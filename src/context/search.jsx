import { createContext, useState, useEffect, useRef } from 'react'

export const SearchContext = createContext()

export function SearchProvider ({ children }) {
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

  return (
    <SearchContext.Provider value={{
      search, updateSearch, error
    }}
    >
      {children}
    </SearchContext.Provider>
  )
}
