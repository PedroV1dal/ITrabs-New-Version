import React from 'react'

import { Link } from 'react-router-dom'
import { ChatCenteredDots, Bell } from '@phosphor-icons/react'

export const MainHeader = () => {
  return (
    <header className="fixed pt-5 pb-4 top-0 w-screen shadow-md flex justify-center items-center">
      <div className="container max-w-7xl">
        <div className="navigation flex justify-between items-center">
          <Link to='/' className="text-5xl font-bold text-Purple">ITrabs</Link>
          <ul className='header-middle list-none flex items-center'>
            <li className='py-0 px-7'><Link to='/encontrarprofissionais' className='pb-6 font-semibold text-Purple text-base border-b-4 border-transparent hover:border-Purple'>ENCONTRAR PROFISSIONAIS</Link></li>
            <li className='py-0 px-7'><Link to='/perfilprofissional' className='pb-6 font-semibold text-Purple text-base border-b-4 border-transparent hover:border-Purple '>MEUS PERFIS</Link></li>
            <li className='py-0 px-7'><Link to='/planos' className='pb-6 font-semibold text-Purple text-base border-b-4 border-transparent hover:border-Purple'>PLANOS</Link></li>
          </ul>
          <div className="header-right list-none flex items-center">
            <Bell size={45} color='Purple' className='p-2' />
            <ChatCenteredDots size={45} color='Purple' className='pr-4' />
            <div className="image-profile bg-EsmeraldGreen w-10 h-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  )
}
