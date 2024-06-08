import { createContext } from 'react'
import { useSearch } from '../hooks/useSearch'
import { usePayers } from '../hooks/usePayers'

export const PayerSearchContext = createContext()

export function PayerSearchProvider ({ children }) {
  const { search, updateSearch, error } = useSearch()
  const { payers, getPayers } = usePayers({ search })

  return (
    <PayerSearchContext.Provider value={{
      search, updateSearch, error, payers, getPayers
    }}
    >
      {children}
    </PayerSearchContext.Provider>
  )
}
