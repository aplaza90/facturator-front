import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstImput = useRef(true)

  useEffect(() => {
    if (isFirstImput.current) {
      isFirstImput.current = search === ''
      return
    }
    if (search === '') {
      setError('se recuperarán todos los elementos')
      return
    }
    if (search !== '') {
      setError(null)
    }
  }, [search])
  return { search, updateSearch, error }
}
