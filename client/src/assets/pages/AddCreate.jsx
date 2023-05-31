import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddCreate() {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');

  const navigate = useNavigate();

  const backProfile = (() => {
    navigate('/perfilprofissional')
  })

  const handleCreate = (event) => {
    event.preventDefault();

    const AddData = {
      description: description,
      category: category,
      price: parseFloat(price),
      availability: availability,
    };

    const authToken = sessionStorage.getItem('token');

    axios
      .post('http://127.0.0.1:8000/advertisements/create/', AddData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log('informação enviada');
        setDescription('');
        setCategory('');
        setPrice('');
        setAvailability('');
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
        <h2 className="text-2xl font-medium mb-6 text-black flex justify-center">Criar Anúncio</h2>

        <form onSubmit={handleCreate} className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
              Descrição:
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Digite a descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
              Categoria:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Digite a categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
              Preço:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Digite o preço"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label htmlFor="availability" className="block text-gray-700 font-bold mb-2">
              Disponibilidade:
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              placeholder="Digite a disponibilidade"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <input
            type="submit"
            value="Criar Anúncio"
            className="col-span-2 bg-Purple hover:bg-blue-700 text-white cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
          <button onClick={backProfile} className="col-span-2 bg-Purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Voltar</button>
        </form>
      </div>
    </div>
  );
}
