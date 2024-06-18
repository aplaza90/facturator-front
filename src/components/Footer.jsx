import { Footer } from 'flowbite-react'
import { Link } from './Link'
import { GithubIcon } from './icons/GithubIcon'

export function AppFooter () {
  return (
    <Footer container className='bg-woodsmoke-950 bottom-1'>
      <a
        href='https://github.com/aplaza90/facturator'
        target='_blank'
        rel='noreferrer noopener'
        className='text-zinc-50 flex gap-x-2 items-center'
      >
        <GithubIcon />
        GitHub
      </a>
      <Footer.LinkGroup className='flex gap-x-5'>
        <Link to='/facturas' className='text-woodsmoke-50'>Info</Link>
        <Link to='/facturas' className='text-woodsmoke-50'>Licencia</Link>
        <Link to='/facturas' className='text-woodsmoke-50'>Contacto</Link>
      </Footer.LinkGroup>
    </Footer>
  )
}
