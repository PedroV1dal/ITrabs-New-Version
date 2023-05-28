import React, { useState } from 'react'
import { PencilSimple } from '@phosphor-icons/react';

export const AboutUser = () => {

  const [modoEdicao, setModoEdicao] = useState(false);
  const [sobre, setSobre] = useState('algo sobre o user'); // Substitua pelo valor inicial real

  const alternarModoEdicao = () => {
    setModoEdicao(!modoEdicao);
  };

  const salvarSobre = () => {
    // Lógica para salvar o novo valor de 'sobre' no backend
    // ...

    setModoEdicao(false);
    console.log('Alterações salvas com sucesso');
  };

  const handleSobreChange = (event) => {
    setSobre(event.target.value);
  };



  return (
    <div className="about-box box max-w-3xl m-auto pt-7">
      <div className="box-label flex justify-between items-center">
        <h3 className='text-base text-white'>sobre</h3>
        {modoEdicao ? (
          <button
            className="cursor-pointer text-white"
            onClick={salvarSobre}
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
            value={sobre}
            onChange={handleSobreChange}
            className="ml-0 mt-2 p-1 w-full text-xs text-Purple font-medium bg-white resize-none "
          />
        ) : (
          <p className='ml-0 mt-2 text-xs text-white font-medium'>
            {sobre}
          </p>
        )}
      </div>
    </div>
  )
}
