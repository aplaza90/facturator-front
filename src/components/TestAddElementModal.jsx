import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'
import { PropTypes } from 'prop-types'

export function TestAddElementModal ({ text, children }) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Button
        color='dark'
        onClick={() => setOpenModal(true)}
        className='fixed top-2 right-14 flex items-center justify-center w-30 h-8 p-1 bg-zinc-700 cursor-pointer transition-all duration-300 ease-in-out z-2'
      >
        + {text}
      </Button>
      <Modal
        show={openModal}
        size='md'
        popup
        onClose={() => setOpenModal(false)}
        className='bg-zinc-950/50'
      >
        <Modal.Header className='bg-zinc-900' />
        <Modal.Body className='bg-zinc-900'>
          {children}
        </Modal.Body>
      </Modal>
    </>
  )
}

TestAddElementModal.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
}
