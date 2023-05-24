import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    axios.post('/api/login/', data)
      .then(response => {
        // Processar a resposta do backend, como salvar o token de autenticação
        // ou redirecionar para a página de perfil
        console.log(response.data);
      })
      .catch(error => {
        // Lidar com erros, como exibir uma mensagem de erro ao usuário
        console.error(error);
      });
  };


  return (
    <div className="bg-Purple min-h-screen flex items-center justify-center">
      <div className="bg-white p-16 rounded shadow-md">
        <p className="text-7xl font-bold text-Purple">ITrabs</p>
        <h2 className="text-2xl font-medium mb-6 text-black">Entre na sua conta</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu Email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Senha:</label>
            <input type="password" name="password" id="password" placeholder="Digite sua senha" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="flex items-center justify-between">
            <Link to='/perfilprofissional'><input type="submit" id="button" value="Fazer Login" className="bg-Purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" /></Link>
            <Link to="/register" className="inline-block align-baseline font-bold text-sm text-Purple hover:text-blue-800">Registre-se</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
