import { useState, useRef, useCallback } from 'react'
import { searchOrders } from '../services/orders'

export function useOrders ({ search }) {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previosusSearch = useRef(search)

  const getOrders = useCallback(async ({ search }) => {
    try {
      setLoading(true)
      setError(null)
      previosusSearch.current = search
      const newOrders = await searchOrders({ search })
      setOrders(newOrders)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [])

  return { orders, getOrders, loading }
}
