import React, { useEffect, useState } from 'react';
import { Star } from '@phosphor-icons/react';
import axios from 'axios';

export const ProfileCard = () => {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/advertisements/')
      .then(response => {
        const data = response.data;
        setAdvertisements(data);
      })
      .catch(error => {
        console.log('erro', error);
      });
  }, []);

  return (
    <div>
      {advertisements.map(ad => {
        const createdDate = new Date(ad.created_at);
        const formattedDate = createdDate.toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });

        return (
          <div key={ad.id} className="profile-card flex p-8 rounded-2xl bg-Purple mb-5">
            <div className="left-info-profile flex flex-col justify-between flex-1">
              <div className="user-info flex items-center gap-4">
                <div className="icon-container w-14 h-14 rounded-full bg-EsmeraldGreen"></div>
                <div>
                  <h2 className="font-bold text-white text-2xl">
                    {ad.user_name || 'Nome indisponível'}
                  </h2>
                  <div className="rating flex items-center gap-2 mt-2 mb-2">
                    <Star size={18} className="text-white" />
                    <Star size={18} className="text-white" />
                    <Star size={18} className="text-white" />
                    <Star size={18} className="text-white" />
                    <Star size={18} className="text-white" />
                    {ad.average_rating}
                  </div>
                  <p className="font-bold text-white text-xs">publicado em: {formattedDate}</p>
                </div>
              </div>
              <p className="font-normal text-white text-sm mt-4">{ad.description}</p>
              <footer className="footer-info flex flex-col gap-2 mt-4">
                <strong className="font-bold text-white text-xs">Categoria: {ad.category}</strong>
                <strong className="font-bold text-white text-xs">Disponibilidade: {ad.availability}</strong>
              </footer>
            </div>
            <div className="right-info-profile flex flex-col justify-between ">
              <div className="price">
                <h3 className="font-bold text-white text-base uppercase">Preço por hora</h3>
                <strong className="font-medium text-white text-base">BRL {ad.price}</strong>
              </div>
              <div className="buttons flex flex-col gap-3 mt-4">
                <button
                  className="w-full px-6 py-3 flex items-center justify-center font-medium text-white text-sm bg-EsmeraldGreen rounded-full hover:bg-white hover:text-EsmeraldGreen"
                  type="button"
                >
                  Entrar no perfil
                </button>
                <button
                  className="w-full px-6 py-3 flex items-center justify-center font-medium text-EsmeraldGreen text-sm bg-white rounded-full hover:text-white hover:bg-EsmeraldGreen"
                  type="button"
                >
                  Chat de venda
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
