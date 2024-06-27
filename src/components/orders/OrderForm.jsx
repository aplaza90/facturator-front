import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { updateOrder, createOrder } from '../../services/orders'
import { PropTypes } from 'prop-types'
import { UploadStatus } from '../UploadStatus'

const REQUIRED_FIELD_ERROR = 'Este campo es obligatorio'
const INVALID_TYPE_ERROR = 'El tipo de dato no es válido'
const formSchema = z.object({
  number: z
    .string()
    .min(1, { message: REQUIRED_FIELD_ERROR }),
  date: z
    .string()
    .min(1, { message: REQUIRED_FIELD_ERROR }),
  payer_name: z
    .string()
    .min(1, { message: REQUIRED_FIELD_ERROR }),
  quantity: z
    .number({
      required_error: REQUIRED_FIELD_ERROR,
      invalid_type_error: INVALID_TYPE_ERROR
    })
    .positive({ message: 'La cantidad debe ser positiva' })
})

export const OrderForm = ({ order }) => {
  const [status, setStatus] = useState('initial')

  const onSubmit = async (data) => {
    if (order) {
      const { error } = updateOrder({ orderId: order.id, json_data: data })
      if (error) {
        setStatus('fail')
        setError('root', {
          message: 'Error al ingresar la factura'
        })
        return
      }
      setStatus('success')
    } else {
      const { error } = createOrder({ json_data: data })
      if (error) {
        setStatus('fail')
        setError('root', {
          message: 'Error al ingresar la factura'
        })
        return
      }
      setStatus('success')
    }
  }

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: order
      ? {
          number: order.number,
          date: order.date,
          payer_name: order.payer_name,
          quantity: order.quantity
        }
      : undefined,
    resolver: zodResolver(formSchema)
  })

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col justify-around gap-5'
      >
        <label className='form-label'>
          Número
          <input
            {...register('number')}
            type='text'
            placeholder='FACTURA-001'
            className='bg-zinc-800 text-zinc-50'
          />
        </label>
        {errors.number && (
          <div className='text-red-500'>{errors.number.message}</div>
        )}
        <label className='form-label'>
          Fecha
          <input
            {...register('date')}
            type='text'
            placeholder='2022-01-01'
            className='bg-zinc-800 text-zinc-50'
          />
        </label>
        {errors.date && (
          <div className='text-red-500'>{errors.date.message}</div>
        )}
        <label className='form-label'>
          Pagador
          <input
            {...register('payer_name')}
            type='text'
            placeholder='Pagador Pagadorez'
            className='bg-zinc-800 text-zinc-50'
          />
        </label>
        {errors.payer_name && (
          <div className='text-red-500'>{errors.payer_name.message}</div>
        )}
        <label className='form-label'>
          Cantidad
          <input
            {...register('quantity', { valueAsNumber: true })}
            type='number'
            placeholder='50'
            className='bg-zinc-800 text-zinc-50'
          />
        </label>
        {errors.quantity && (
          <div className='text-red-500'>{errors.quantity.message}</div>
        )}
        <button disabled={isSubmitting} type='submit'>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
        {errors.root && <div className='text-red-500'>{errors.root.message}</div>}
      </form>
      <UploadStatus status={status} />
    </>
  )
}
OrderForm.propTypes = { order: PropTypes.object }
