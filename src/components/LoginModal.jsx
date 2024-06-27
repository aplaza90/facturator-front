import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react'
import { useRef, useState } from 'react'

export function LoginModal () {
  const [openModal, setOpenModal] = useState(false)
  const nameRef = useRef(null)

  return (
    <>
      <Button
        className='bg-zinc-700'
        onClick={() => setOpenModal(true)}
      >Acceder
      </Button>
      <Modal show={openModal} size='md' popup onClose={() => setOpenModal(false)} initialFocus={nameRef}>
        <Modal.Header />
        <Modal.Body>
          <div className='space-y-6'>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Acceso a Facturator</h3>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email' value='Nombre de Ususario' />
              </div>
              <TextInput id='name' ref={nameRef} placeholder='Nombre' required />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='password' value='Contraseña' />
              </div>
              <TextInput id='password' type='password' required />
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center gap-2'>
                <Checkbox color='dark' id='remember' />
                <Label htmlFor='remember'>Recordarme</Label>
              </div>
              <a href='#' className='text-sm text-zinc-800 hover:underline'>
                ¿Olvidaste la contraseña?
              </a>
            </div>
            <div className='w-full'>
              <Button color='dark'>Acceder</Button>
            </div>
            <div className='flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300'>
              No registrado
              <a href='#' className='text-zinc-800 hover:underline'>
                Crear cuenta
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
