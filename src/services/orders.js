export const searchOrders = async ({ search }) => {
  const url = (search === '')
    ? 'http://localhost:5005/orders'
    : `http://localhost:5005/orders?payer_name=${search}`

  try {
    const response = await fetch(url)
    const json = await response.json()

    return json.orders?.map(order => ({
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
  const url = `http://localhost:5005/orders/${id}`
  try {
    await fetch(url, { method: 'DELETE' })
    console.log('order deleted')
  } catch (e) {
    throw new Error('Error while retrieving and parsing orders')
  }
}

export const createOrder = async ({
  json_data: data
}) => {
  const url = 'http://localhost:5005/orders'
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

export const updateOrder = async ({
  orderId,
  json_data: data
}) => {
  const url = `http://localhost:5005/orders/${orderId}`
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

export const getOrderInvoice = async ({ number }) => {
  const url = `http://localhost:5005/invoices?number=${number}`
  try {
    const response = await fetch(url)
    const json = await response.json()

    return json
  } catch (e) {
    throw new Error('Error while retrieving the invoice details')
  }
}

export const getOrderPdfBlob = async ({ number }) => {
  const url = `http://localhost:5005/pdfs?number=${number}`
  try {
    const response = await fetch(url)
    const blob = await response.blob()

    return blob
  } catch (e) {
    throw new Error('Error while retrieving the invoice pdf')
  }
}
