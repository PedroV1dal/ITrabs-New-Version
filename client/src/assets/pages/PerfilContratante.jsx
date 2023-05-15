import React from 'react'
import { MainHeader } from '../components/MainHeader'
import { Link } from 'react-router-dom'
import { Star, ChatTeardropText, PencilSimple, InstagramLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react'

export const PerfilContratante = () => {
  return (
    <div>
      <MainHeader />
      <section className='profile-type flex justify-center items-center pt-24'>
        <div className="container max-w-7xl">
          <div className="profiles flex justify-center items-center">
            <div className="profissinal pr-7"><Link to="/perfilprofissional" className='text-sm pb-2 font-semibold text-Purple border-b-4 border-transparent hover:border-Purple'>Perfil Profissional</Link></div>
            <div className="contratante pl-7"><Link to="/perfilcontratante" className='text-sm pb-2 font-semibold text-Purple border-b-4 border-transparent hover:border-Purple'>Perfil contratante</Link></div>
          </div>
        </div>
      </section>

      <section className='profile-info flex justify-center items-center pt-12 pb-12'>
        <div className="container max-w-7xl">
          <div className="info-division flex">

            <div className="left-info flex-1 bg-Purple rounded-lg">
              <div className="row flex">
                <div className="profile-image w-24 h-24 ml-7 mt-7 bg-EsmeraldGreen rounded-full"></div>
                <div className='flex justify-between w-full pr-24 pb-6'>
                  <div className="profile-information">
                    <div className='flex items-center'>
                      <h2 className='text-white text-3xl mt-8 ml-7'><span>nome do usuario</span></h2>
                      <PencilSimple size={18} color='white' className='cursor-pointer mt-8 ml-5' />
                    </div>
                    <div className="rating ml-7 mt-2 flex">
                      <Star size={18} color='white' />
                      <Star size={18} color='white' />
                      <Star size={18} color='white' />
                      <Star size={18} color='white' />
                      <Star size={18} color='white' />
                    </div>
                  </div>
                  <div className="btn-message">
                    <button className='bg-EsmeraldGreen text-white p-2 rounded-xl border-none mt-9 ml-36 w-36 flex items-center'>
                      <ChatTeardropText size={19} className='mr-3 ml-1' />
                      <p>Conversar</p>
                    </button>
                  </div>
                </div>
              </div>

              <hr className='max-w-3xl mt-4 m-auto' />

              <div className="about-box box max-w-3xl m-auto pt-7">
                <span>
                  <div className="box-label flex justify-between items-center">
                    <h3 className='text-base text-white'>sobre</h3>
                    <PencilSimple size={18} color='white' className='cursor-pointer' />
                  </div>
                </span>
                <div className="about h-12">
                  <p className='ml-0 mt-2 text-xs text-white font-medium'>
                    <span>
                      algo sobre o user
                    </span>
                  </p>
                </div>
              </div>

              <div className="professional-history box max-w-3xl m-auto pt-7">
                <span>
                  <div className="box-label flex justify-between items-center">
                    <h3 className='text-base text-white'>O que eu busco</h3>
                    <PencilSimple size={18} color='white' className='cursor-pointer' />
                  </div>
                </span>
                <div className="about h-12">
                  <p className='ml-0 mt-2 text-xs text-white font-medium'>
                    <span>
                      trajetoria
                    </span>
                  </p>
                </div>
              </div>

              <div className="professional-history box max-w-3xl m-auto pt-7">
                <span>
                  <div className="box-label flex justify-between items-center">
                    <h3 className='text-base text-white'>O que eu espero de um profissinal</h3>
                    <PencilSimple size={18} color='white' className='cursor-pointer' />
                  </div>
                </span>
                <div className="about h-12">
                  <p className='ml-0 mt-2 text-xs text-white font-medium'>
                    <span>
                      O que
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="right-info w-60 bg-Purple ml-6 rounded-lg">
              <div className="contact pl-6 pr-6">
                <div className='flex justify-between items-center'>
                  <h2 className='text-white text-base font-bold pt-6 pb-2'>contato </h2>
                  <PencilSimple size={18} color='white' className='cursor-pointer mt-4' />
                </div>
                <div className="contacts-info flex flex-col">
                  <a href="#" className='no-underline text-white pt-3 text-sm'>Fulano@gmail.com</a>
                  <a href="#" className='no-underline text-white pt-3 text-sm'>13 99999-9999</a>
                </div>
              </div>
              <div className="social pl-6 pr-6 pt-7">
                <h2 className='text-white text-base font-bold flex justify-center'>redes sociais</h2>
                <div className="socials flex items-center justify-around pt-4">
                  <a href="#"><InstagramLogo size={22} color='white' className='cursor-pointer' /></a>
                  <a href="#"><LinkedinLogo size={22} color='white' className='cursor-pointer' /></a>
                  <a href="#"><TwitterLogo size={22} color='white' className='cursor-pointer' /></a>
                </div>
              </div>
              <div className="button flex justify-center pt-8 pb-6">
                <a href="#"><button className='bg-EsmeraldGreen text-white rounded-lg p-2 border-none cursor-pointer'>compartilhe esse perfil</button></a>
              </div>
              <div className="comments">
                <h2 className='text-white text-base font-bold flex justify-center'>comentarios</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
