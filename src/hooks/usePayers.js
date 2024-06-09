import { useState, useRef, useCallback } from 'react'
import { searchPayers } from '../services/payers'

export function usePayers ({ search }) {
  const [payers, setPayers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previosusSearch = useRef(search)

  const getPayers = useCallback(async ({ search }) => {
    try {
      setLoading(true)
      setError(null)
      previosusSearch.current = search
      const newPayers = await searchPayers({ search })
      setPayers(newPayers)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [])

  return { payers, getPayers, loading }
}
