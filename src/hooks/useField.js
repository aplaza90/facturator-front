import { useState } from 'react'

export const useField = ({ initValue }) => {
  const [value, setValue] = useState(initValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const type = 'text'
  return {
    type,
    value,
    onChange
  }
}
