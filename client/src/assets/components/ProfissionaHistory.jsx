import React, { useState } from 'react'
import { PencilSimple } from '@phosphor-icons/react';

export const ProfissionaHistory = () => {
  const [modoEdicao, setModoEdicao] = useState(false);
  const [userHistory, setUserHistory] = useState('Sua descrição profissional'); // Substitua pelo valor inicial real

  const alternarModoEdicao = () => {
    setModoEdicao(!modoEdicao);
  };

  const salvarHistory = () => {
    // Lógica para salvar o novo valor de 'sobre' no backend
    // ...

    setModoEdicao(false);
    console.log('Alterações salvas com sucesso');
  };

  const handleHistoryChange = (event) => {
    setUserHistory(event.target.value);
  };



  return (
    <div className="about-box box max-w-3xl m-auto pt-7 mb-10">
      <div className="box-label flex justify-between items-center">
        <h3 className='text-base text-white'>sobre</h3>
        {modoEdicao ? (
          <button
            className="cursor-pointer text-white"
            onClick={salvarHistory}
          >
            Salvar
          </button>
        ) : (
          <PencilSimple
            size={18}
            color='white'
            className='cursor-pointer'
            onClick={alternarModoEdicao}
          />
        )}
      </div>
      <div className="about h-12">
        {modoEdicao ? (
          <textarea
            value={userHistory}
            onChange={handleHistoryChange}
            className="ml-0 mt-2 p-1 w-full h-16 text-xs text-Purple font-medium bg-white resize-none "
          />
        ) : (
          <p className='ml-0 mt-2 text-xs text-white font-medium'>
            {userHistory}
          </p>
        )}
      </div>
    </div>
  )
}
