import { createContext } from 'react'
import { useSearch } from '../hooks/useSearch'
import { useOrders } from '../hooks/useOrders'

export const OrderSearchContext = createContext()

export function OrderSearchProvider ({ children }) {
  const { search, updateSearch, error } = useSearch()
  const { orders, getOrders } = useOrders({ search })

  return (
    <OrderSearchContext.Provider value={{
      search, updateSearch, error, orders, getOrders
    }}
    >
      {children}
    </OrderSearchContext.Provider>
  )
}
