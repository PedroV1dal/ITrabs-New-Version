import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ClienteProfileEdit = () => {

  const [about_general, setAboutGeneral] = useState('');
  const [about_looking, setAboutLooking] = useState('');
  const [about_expectation, setAboutExpectation] = useState('');

  const navigate = useNavigate();

  const backProfile = (() => {
    navigate('/perfilcontratante')
  })

  const ProfileUpdate = (event) => {
    event.preventDefault();

    const userData = {
      about_expectation: about_expectation,
      about_general: about_general,
      about_looking: about_looking
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

        navigate('/perfilcontratante');
      })
      .catch((error) => {
        // console.error('Erro ao enviar a solicitação:', error);
        console.log(error.response.data)
      });
  };


  return (
    <div className="bg-Purple min-h-screen flex items-center justify-center">
      <div className="bg-white p-16 rounded shadow-md w-40">
        <p className="text-7xl font-bold text-Purple flex justify-center">ITrabs</p>
        <h2 className="text-2xl font-medium mb-6 text-black flex justify-center">Editar Perfil</h2>

        <form onSubmit={ProfileUpdate} className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label htmlFor="about_professional" className="block text-gray-700 font-bold mb-2">
              Sobre:
            </label>
            <textarea
              id="about_general"
              name="about_general"
              placeholder="Digite informações sobre o profissional"
              value={about_general}
              onChange={(e) => setAboutGeneral(e.target.value)}
              rows={3}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="professional_history" className="block text-gray-700 font-bold mb-2">
              O que eu procuro:
            </label>
            <textarea
              id="about_looking"
              name="about_looking"
              placeholder="Digite o histórico profissional"
              value={about_looking}
              onChange={(e) => setAboutLooking(e.target.value)}
              rows={3}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="professional_history" className="block text-gray-700 font-bold mb-2">
              O que eu espero:
            </label>
            <textarea
              id="about_expectation"
              name="about_expectation"
              placeholder="Digite o histórico profissional"
              value={about_expectation}
              onChange={(e) => setAboutExpectation(e.target.value)}
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
  )
}
