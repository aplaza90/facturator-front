import { Button, Modal } from 'flowbite-react'
import { useState, useContext } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { OrderSearchContext } from '../../context/orderSearch'
import { deleteOrder } from '../../services/orders'
import { PropTypes } from 'prop-types'
import { DeleteIcon } from '../Icons'

export function DeleteModal ({ id }) {
  const [openModal, setOpenModal] = useState(false)
  const { search, getOrders } = useContext(OrderSearchContext)

  const handleDeleteClick = async () => {
    await deleteOrder({ id })
    getOrders({ search })
    setOpenModal(false)
  }

  return (
    <>
      <DeleteIcon
        className='hover:scale-110'
        onClick={() => setOpenModal(true)}
      />
      <Modal show={openModal} size='md' onClose={() => setOpenModal(false)} popup>
        <Modal.Header className='bg-zinc-700' />
        <Modal.Body className='bg-zinc-700'>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-zinc-50' />
            <h3 className='mb-5 text-lg font-normal text-zinc-50'>
              Estas seguro de borrar la siguiente factura?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteClick}>
                Borrar
              </Button>
              <Button color='dark' className='bg-zinc-900' onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

DeleteModal.propTypes = { id: PropTypes.string }
