import React from 'react'
import { MainHeader } from '../components/MainHeader'
import { MagnifyingGlass } from '@phosphor-icons/react'

export const EncontrarProfissionais = () => {
  return (
    <>
      <MainHeader />
      <section className='container pt-24 min-h-80 bg-Gray flex justify-center'>
        <div className='left-info flex-1 w-30 pt-10 pr-32 pb-0 pl-32'>
          <div className='filter-card w-full py-9 px-6 flex flex-col justify-center gap-5 rounded-2xl bg-EsmeraldGreen mb-28'>
            <h3 className='font-bold text-white text-xl'>Encontre Profissionais</h3>
            <div className='filter-radio-container flex flex-col gap-3'>
              <span className='font-medium text-white text-sm'>Categorias de Serviços</span>

              <div className="filter-radio flex flex-col gap-3">
                <div className="radio-input flex items-center gap-1 text-black text-xs">
                  <input type="checkbox" />
                  <label>Serviços Domésticos</label>
                </div>


                <div className="radio-input flex items-center gap-1 text-black text-xs">
                  <input type="checkbox" />
                  <label>Moda e Beleza</label>
                </div>

                <div className="radio-input flex items-center gap-1 text-black text-xs">
                  <input type="checkbox" />
                  <label>Reforma e Reparos</label>
                </div>

                <div className="radio-input flex items-center gap-1 text-black text-xs">
                  <input type="checkbox" />
                  <label>Saúde</label>
                </div>

                <div className="radio-input flex items-center gap-1 text-black text-xs">
                  <input type="checkbox" />
                  <label>Assistência Técnica</label>
                </div>

                <div className="radio-input flex items-center gap-1 text-black text-xs">
                  <input type="checkbox" />
                  <label>Tradução e Conteúdo</label>
                </div>

                <div className="radio-input flex items-center gap-1 text-black text-xs">
                  <input type="checkbox" />
                  <label>Design e Multimedia</label>
                </div>
              </div>

              <span className='font-medium text-white text-sm'>TAGS DE HABILIDADE</span>

              <div className="filter-select">
                <select onmousedown="document.querySelector('#title').remove()" className='habilits flex w-11/12 h-6 border-none text-center text-black text-xs font-medium'>
                  <option value="" disabled selected className="title">Informe as habilidades que você busca: </option>
                  <option value="">Php</option>
                  <option value="">Digitador</option>
                  <option value="">Wordpress</option>
                </select>
              </div>

              <span className='font-medium text-white text-sm'>IDIOMAS</span>

              <div className="filter-select">
                <select onmousedown="document.querySelector('#title').remove()" className='habilits flex w-11/12 h-6 border-none text-center text-black text-xs font-medium'>
                  <option value="" disabled selected className="title">Informe as linguagens: </option>
                  <option value="">Português</option>
                  <option value="">Inglês</option>
                  <option value="">Espanhol</option>
                </select>
              </div>

              <div className="save flex justify-center pt-5">
                <button type="button" className='bg-Gray rounded-3xl w-36 h-7 mr-2 border-none font-normal hover:bg-Purple hover:text-white'>SALVAR</button>
              </div>

            </div>
          </div>
        </div>

        <div className='right-info flex-2 pt-10 pr-32 pb-0 pl-5 flex flex-col gap-8'>
          <div className="search">
            <input type="text" placeholder="Buscar por tags, palavras chaves ou serviço" />
            <MagnifyingGlass />
          </div>
        </div>
      </section>
    </>
  )
}
