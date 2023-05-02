import React from 'react'
import { publique, venda, anuncie } from '../images'

export const Cards = () => {
  return (
    <div className='flex flex-row justify-around py-14 px-20'>
      <div className='w-40 h-72'>
        <img src={publique} alt="publique" />
        <h2 className="font-semibold text-xl text-white text-center mb-6 mt-4">PUBLIQUE</h2>
        <p className="text-white font-medium text-center">Publique seus serviços para preencher seu perfil com seu portfólio</p>
      </div>
      <div className='w-40 h-72'>
        <img src={anuncie} alt="anuncie" />
        <h2 className="font-semibold text-xl text-white text-center mb-6 mt-4">ANÚNCIE</h2>
        <p className="text-white font-medium text-center">Divulgue sua vaga para as pessoas conhecerem seu serviço e assim compra-lo</p>
      </div>
      <div className='w-40 h-72'>
        <img src={venda} alt="venda" />
        <h2 className="font-semibold text-xl text-white text-center mb-6 mt-4">VENDA</h2>
        <p className="text-white font-medium text-center">Após o cliente entrar em contato, converse pelo chat e realize a venda como você preferir</p>
      </div>
    </div>
  )
}
