import React from 'react'
import { HomeBtn } from './HomeBtn'
import { Link } from 'react-router-dom'

export const HomeHeader = () => {
  return (
    <header className="header flex justify-center items-center fixed top-0 w-screen pb-10">
      <div className="container max-w-7xl">
        <div className="navigation flex justify-between items-center pt-6">
          <p className="text-5xl text-Purple">ITrabs</p>
          <nav className="flex space-x-14 text-Purple font-semibold">
            <a href="#" className="border-b-4 border-transparent hover:border-Purple">INICIO</a>
            <a href="#" className="border-b-4 border-transparent hover:border-Purple">COMO FUNCIONA</a>
            <a href="#" className="border-b-4 border-transparent hover:border-Purple">CATEGORIAS</a>
            <a href="#" className="border-b-4 border-transparent hover:border-Purple">SOBRE</a>
          </nav>
          <Link to="/login"><HomeBtn /></Link>
        </div>
      </div>
    </header>
  )
}
