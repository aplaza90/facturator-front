import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { updatePayer, createPayer } from '../../services/payers'
import { PropTypes } from 'prop-types'
import { UploadStatus } from '../UploadStatus'

const REQUIRED_FIELD_ERROR = 'Este campo es obligatorio'
const INVALID_TYPE_ERROR = 'El tipo de dato no es válido'
const formSchema = z.object({
  name: z
    .string({ invalid_type_error: INVALID_TYPE_ERROR })
    .min(1, { message: REQUIRED_FIELD_ERROR }),
  nif: z
    .string({ invalid_type_error: INVALID_TYPE_ERROR })
    .min(1, { message: REQUIRED_FIELD_ERROR }),
  address: z
    .string({ invalid_type_error: INVALID_TYPE_ERROR })
    .min(1, { message: REQUIRED_FIELD_ERROR }),
  zip_code: z
    .string({ invalid_type_error: INVALID_TYPE_ERROR })
    .min(1, { message: REQUIRED_FIELD_ERROR }),
  city: z
    .string({ invalid_type_error: INVALID_TYPE_ERROR })
    .min(1, { message: REQUIRED_FIELD_ERROR }),
  province: z
    .string({ invalid_type_error: INVALID_TYPE_ERROR })
    .min(1, { message: REQUIRED_FIELD_ERROR })

})

export const PayerForm = ({ payer }) => {
  const [status, setStatus] = useState('initial')

  const onSubmit = async (data) => {
    if (payer) {
      const { error } = updatePayer({ payerId: payer.id, json_data: data })
      if (error) {
        setStatus('fail')
        setError('root', {
          message: 'Error al ingresar el Pagador'
        })
        return
      }
      setStatus('success')
    } else {
      const { error } = createPayer({ json_data: data })
      if (error) {
        setStatus('fail')
        setError('root', {
          message: 'Error al ingresar el Pagador'
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
    defaultValues: payer
      ? {
          name: payer.name,
          nif: payer.nif,
          address: payer.address,
          zip_code: payer.zip_code,
          city: payer.city,
          province: payer.province
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
          Nombre
          <input
            {...register('name')}
            type='text'
            placeholder='Pagador Pagadorez'
            className='bg-zinc-800 text-zinc-50'
          />
        </label>
        {errors.name && (
          <div className='text-red-500'>{errors.name.message}</div>
        )}
        <label className='form-label'>
          NIF
          <input
            {...register('nif')}
            type='text'
            placeholder='12345678A'
            className='bg-zinc-800 text-zinc-50'
          />
        </label>
        {errors.nif && (
          <div className='text-red-500'>{errors.nif.message}</div>
        )}
        <label className='form-label'>
          Dirección
          <input
            {...register('address')}
            type='text'
            placeholder='C/ Panadero, nº 221, letra B'
            className='bg-zinc-800 text-zinc-50'
          />
        </label>
        {errors.address && (
          <div className='text-red-500'>{errors.address.message}</div>
        )}
        <label className='form-label'>
          C.P.
          <input
            {...register('zip_code')}
            type='text'
            placeholder='12345'
            className='bg-zinc-800 text-zinc-50'
          />
        </label>
        {errors.zip_code && (
          <div className='text-red-500'>{errors.zip_code.message}</div>
        )}
        <label className='form-label'>
          Municipio
          <input
            {...register('city')}
            type='text'
            placeholder='Alpedrete'
            className='bg-zinc-800 text-zinc-50'
          />
        </label>
        {errors.city && (
          <div className='text-red-500'>{errors.city.message}</div>
        )}
        <label className='form-label'>
          Provincia
          <input
            {...register('province')}
            type='text'
            placeholder='Madrid'
            className='bg-zinc-800 text-zinc-50'
          />
        </label>
        {errors.province && (
          <div className='text-red-500'>{errors.province.message}</div>
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
PayerForm.propTypes = { payer: PropTypes.object }
