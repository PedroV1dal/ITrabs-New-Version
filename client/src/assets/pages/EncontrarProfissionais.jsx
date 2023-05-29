import React from 'react'
import { MainHeader } from '../components/MainHeader'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { FilterCard } from '../components/FilterCard'
import { Star } from '@phosphor-icons/react'

export const EncontrarProfissionais = () => {
  return (
    <>
      <MainHeader />
      <section className='container pt-24 min-h-80 bg-Gray flex justify-center'>

        <div className='left-info flex-1 w-30 pt-10 pr-32 pb-0 pl-32'>
          <FilterCard />
        </div>

        <div className='right-info flex-2 pt-10 pr-32 pb-0 pl-5 flex flex-col gap-8'>
          <div className="search flex flex-row bg-white rounded-3xl h-12">

            <input className='w-full rounded-3xl pl-5 text-EsmeraldGreen font-bold text-base border-none focus:border-none  focus:outline-none focus:shadow-none' type="text" placeholder="Buscar por tags, palavras chaves ou serviço" />
            <div className="flex justify-self: flex-end items-center mr-3 cursor-pointer">
              <MagnifyingGlass size={24} />
            </div>

          </div>

          <div className="profile-card flex p-8 rounded-2xl bg-Purple">
            <div className="left-info-profile flex flex-col justify-between mr-8">
              <div className="user-info flex items-center gap-4">
                <div className="icon-container w-14 h-14 rounded-full bg-EsmeraldGreen"></div>
                <div>
                  <h2 className="font-bold text-white text-2xl">Adobe Nilson</h2>
                  <div className="rating flex items-center gap-2 mt-2 mb-2">
                    <Star size={18} className='text-white' />
                    <Star size={18} className='text-white' />
                    <Star size={18} className='text-white' />
                    <Star size={18} className='text-white' />
                    <Star size={18} className='text-white' />
                  </div>
                  <p className="font-bold text-white text-xs">publicado há pipipi</p>

                </div>
              </div>
              <p className="font-normal text-white text-sm mt-4">
                Olá, me chamo José, sou designer gráfico há exatos 5 anos. Já trabalhei em grandes empresas multinacionais e estou no site em busca de uma renda extra. Tenho experiência com Photoshop, UX design, Figma e Illustrator. Se quiser conhecer mais projetos, entre no meu perfil.
              </p>
              <footer className="footer-info flex flex-col gap-2 mt-4">
                <strong className="font-bold text-white text-xs">Categoria: Designer</strong>
                <strong className="font-bold text-white text-xs">Disponibilidade: 4 vezes na semana, por 6 horas</strong>
                <strong className="font-bold text-white text-xs uppercase">Tags</strong>
                <div className="tags flex gap-1">
                  <strong className="font-bold text-white text-xs">#photoshop</strong>
                  <strong className="font-bold text-white text-xs">#design</strong>
                  <strong className="font-bold text-white text-xs">#illustrator</strong>
                </div>
              </footer>
            </div>
            <div className="right-info-profile flex flex-col justify-between w-11/12">
              <div className="price">
                <h3 className="font-bold text-white text-base uppercase">Preço por hora</h3>
                <strong className="font-medium text-white text-base">BRL 12.00</strong>
              </div>
              <div className="languages mt-4 flex flex-col">
                <h3 className="font-bold text-white text-xs uppercase">Idiomas</h3>
                <strong className='text-white text-sm'>Português - Nativo</strong>
                <strong className='text-white text-sm'>Inglês - Intermediário</strong>
              </div>
              <div className="buttons flex flex-col gap-3 mt-4">
                <button className="w-full px-6 py-3 flex items-center justify-center font-medium text-white text-sm bg-EsmeraldGreen rounded-full hover:bg-white hover:text-EsmeraldGreen" type="button">Entrar no perfil</button>
                <button className="w-full px-6 py-3 flex items-center justify-center font-medium text-EsmeraldGreen text-sm bg-white rounded-full hover:text-white hover:bg-EsmeraldGreen" type="button">Chat de venda</button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
