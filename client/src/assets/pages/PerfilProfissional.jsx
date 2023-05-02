import React from 'react'
import { Link } from 'react-router-dom'

export const PerfilProfissional = () => {
  return (
    <header className="fixed pt-5 pb-2 top-0 w-screen shadow-md flex justify-center items-center">
      <div className="container max-w-7xl">
        <div className="navigation flex justify-between items-center">
          <Link to='/encontrarprofissionais' className="text-5xl font-bold text-Purple">ITrabs</Link>
          <ul className='header-middle list-none flex items-center'>
            <li className='py-0 px-7'><Link to='/encontrarprofissionais'>ENCONTRAR PROFISSIONAIS</Link></li>
            <li className='py-0 px-7'><Link to='/meusperfis'>MEUS PERFIS</Link></li>
            <li className='py-0 px-7'><Link to='/planos' >PLANOS</Link></li>
          </ul>
          <div className="header-right list-none flex items-center">
            <div className="image-profile">a</div>
          </div>
        </div>
      </div>
    </header>
  )
}
