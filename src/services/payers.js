export const searchPayers = async ({ search }) => {
  const url = (search === '')
    ? 'http://localhost:5005/payer'
    : `http://localhost:5005/payer?name=${search}`

  try {
    const response = await fetch(url)
    const json = await response.json()

    return json?.map(payer => ({
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
