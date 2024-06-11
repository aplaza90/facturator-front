export const searchOrders = async ({ search }) => {
  const url = (search === '')
    ? 'http://localhost:5005/order'
    : `http://localhost:5005/order?number=${search}`

  try {
    const response = await fetch(url)
    const json = await response.json()

    return json?.map(order => ({
      id: order.id,
      number: order.number,
      date: order.date,
      payer_name: order.payer_name,
      quantity: order.quantity
    }))
  } catch (e) {
    throw new Error('Error while retrieving and parsing orders')
  }
}

export const deleteOrder = async ({ id }) => {
  const url = `http://localhost:5005/order/${id}`
  try {
    const response = await fetch(url, { method: 'DELETE' })
    const json = await response.json()
    console.log('order deleted')
    return json
  } catch (e) {
    throw new Error('Error while retrieving and parsing orders')
  }
}

export const getOrderInvoice = async ({ number }) => {
  const url = `http://localhost:5005/invoice?number=${number}`
  try {
    const response = await fetch(url)
    const json = await response.json()

    return json
  } catch (e) {
    throw new Error('Error while retrieving the invoice details')
  }
}
