export const searchPayers = async ({ search }) => {
  const url = (search === '')
    ? 'http://localhost:5005/payers'
    : `http://localhost:5005/payers?name=${search}`

  try {
    const response = await fetch(url)
    const json = await response.json()

    return json.payers?.map(payer => ({
      id: payer.id,
      name: payer.name,
      nif: payer.nif,
      address: payer.address,
      zip_code: payer.zip_code,
      city: payer.city,
      province: payer.province
    }))
  } catch (e) {
    throw new Error('Error while retrieving and parsing payers')
  }
}

export const deletePayer = async ({ id }) => {
  const url = `http://localhost:5005/payers/${id}`
  try {
    await fetch(url, { method: 'DELETE' })
    console.log('payer deleted')
  } catch (e) {
    throw new Error('Error while deleting the payer')
  }
}

export const createPayer = async ({
  json_data: data
}) => {
  const url = 'http://localhost:5005/payers'
  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const jsonResult = await result.json()
    return {
      error: undefined,
      json: jsonResult
    }
  } catch (e) {
    return {
      error: e,
      json: undefined
    }
  }
}

export const updatePayer = async ({
  payerId,
  json_data: data
}) => {
  const url = `http://localhost:5005/payers/${payerId}`
  try {
    const result = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const jsonResult = await result.json()
    return {
      error: undefined,
      json: jsonResult
    }
  } catch (e) {
    return {
      error: e,
      json: undefined
    }
  }
}
