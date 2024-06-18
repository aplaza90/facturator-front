import { Button, Navbar } from 'flowbite-react'
import { Link } from '../components/Link'

export function AppNavbar () {
  return (
    <Navbar className='bg-color' fluid rounded>
      <Navbar.Brand href='/'>
        <span className='self-center whitespace-nowrap text-xl text-facturator-50 font-semibold'>Facturator APP</span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Button className='bg-gradient-to-r from-woodsmoke-600 to-woodsmoke-900'>Loig In</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to='/' className='text-zinc-50'>Pagadores</Link>
        <Link to='/facturas' className='text-zinc-50'>Facturas</Link>
        <Link to='#' className='text-zinc-50'>Información</Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
