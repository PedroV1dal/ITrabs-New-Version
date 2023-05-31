import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ProProfileEdit = () => {

  const [name, setName] = useState('');
  const [occupation, setOcupation] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [currency_amount, setCurrency] = useState('');
  const [about_professional, setAbout] = useState('');
  const [professional_history, setHistory] = useState('');

  const navigate = useNavigate();

  const backProfile = (() => {
    navigate('/perfilprofissional')
  })

  const ProfileUpdate = (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      occupation: occupation,
      email: email,
      phone_number: phone_number,
      currency_amount: currency_amount,
      about_professional: about_professional,
      professional_history: professional_history,
    };

    const authToken = sessionStorage.getItem('token');


    axios
      .patch('http://127.0.0.1:8000/users/9/update/', userData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log('informação enviada');

        navigate('/perfilprofissional');
      })
      .catch((error) => {
        // console.error('Erro ao enviar a solicitação:', error);
        console.log(error.response.data)
      });
  };

  return (
    <div className="bg-Purple min-h-screen flex items-center justify-center">
      <div className="bg-white p-16 rounded shadow-md">
        <p className="text-7xl font-bold text-Purple flex justify-center">ITrabs</p>
        <h2 className="text-2xl font-medium mb-6 text-black flex justify-center">Editar Perfil</h2>

        <form onSubmit={ProfileUpdate} className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite o nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Cargo:
            </label>
            <input
              type="text"
              id="ocupation"
              name="ocupation"
              placeholder="Digite seu cargo"
              value={occupation}
              onChange={(e) => setOcupation(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite o email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-gray-700 font-bold mb-2">
              Número de telefone:
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              placeholder="Digite o número de telefone"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label htmlFor="currency_amount" className="block text-gray-700 font-bold mb-2">
              Valor da moeda:
            </label>
            <input
              type="text"
              id="currency_amount"
              name="currency_amount"
              placeholder="Digite o valor da moeda"
              value={currency_amount}
              onChange={(e) => setCurrency(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="about_professional" className="block text-gray-700 font-bold mb-2">
              Sobre o profissional:
            </label>
            <textarea
              id="about_professional"
              name="about_professional"
              placeholder="Digite informações sobre o profissional"
              value={about_professional}
              onChange={(e) => setAbout(e.target.value)}
              rows={3}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="professional_history" className="block text-gray-700 font-bold mb-2">
              Histórico profissional:
            </label>
            <textarea
              id="professional_history"
              name="professional_history"
              placeholder="Digite o histórico profissional"
              value={professional_history}
              onChange={(e) => setHistory(e.target.value)}
              rows={3}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            />
          </div>

          <input
            type="submit"
            value="Atualizar Perfil"
            className="col-span-2 bg-Purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
          <button onClick={backProfile} className="col-span-2 bg-Purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Voltar</button>
        </form>
      </div>
    </div>
  );
}
