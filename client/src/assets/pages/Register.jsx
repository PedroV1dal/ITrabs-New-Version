import React from 'react'
import { Form, Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className="bg-Purple min-h-screen flex items-center justify-center">
      <div className="bg-white p-16 rounded shadow-md">
        <p className="text-7xl font-bold text-Purple">ITrabs</p>
        <h2 className="text-2xl font-medium mb-6 text-black">Crie sua conta</h2>

        <form action='/login' id="form" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-Purple font-bold mb-2">Nome:</label>
            <input type="text" name="name" id="name" placeholder="Digite seu nome" className="appearance-none border rounded w-full py-2 px-3 text-Purple leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-Purple font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu Email" className="appearance-none border rounded w-full py-2 px-3 text-Purple leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-Purple font-bold mb-2">Senha:</label>
            <input type="password" name="password" id="password" placeholder="Digite sua senha" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <Link to='/login'>
            <button type="submit" id="button" className="bg-Purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cadastrar-se</button>
          </Link>
        </form>
      </div>
    </div>
  )
}
