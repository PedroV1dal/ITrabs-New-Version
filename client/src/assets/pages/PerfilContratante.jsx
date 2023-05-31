import React, { useEffect, useState } from 'react'
import { MainHeader } from '../components/MainHeader'
import { Link, useNavigate } from 'react-router-dom'
import { Star, ChatTeardropText, PencilSimple, InstagramLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react'
import axios from 'axios'

export const PerfilContratante = () => {
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  const editarPerfil = (() => {
    navigate('/clientperfil')
  })

  useEffect(() => {
    const authToken = sessionStorage.getItem('token');

    axios.get('http://127.0.0.1:8000/user-info/', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then(response => {
        const userData = response.data;
        setUserInfo(userData);
      })
      .catch(error => {
        console.log('erro');
      });
  }, []);

  if (!userInfo) {
    return <div>Carregando...</div>;
  }


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

            <div className="left-info flex-1 bg-Purple rounded-lg pb-11">
              <div className="row flex">
                <img src="https://picsum.photos/90/90" className='w-24 h-24 ml-7 mt-7 bg-EsmeraldGreen rounded-full' />
                {/* <div className="profile-image w-24 h-24 ml-7 mt-7 bg-EsmeraldGreen rounded-full"></div> */}
                <div className='flex justify-between w-full pr-24 pb-6'>
                  <div className="profile-information">
                    <div className='flex items-center'>
                      <h2 className='text-white text-3xl mt-8 ml-7'><span>{userInfo.name}</span></h2>
                      <PencilSimple size={18} color='white' className='cursor-pointer mt-8 ml-5' />
                    </div>
                    <div className="rating ml-7 mt-2 flex">
                      <Star size={18} color='white' />
                      {userInfo.average_rating}
                    </div>
                  </div>
                  <div className="btn-message">
                    <button onClick={editarPerfil} className='bg-EsmeraldGreen text-white p-2 rounded-xl border-none mt-4 mb-2 ml-36 w-36 flex items-center justify-center'>
                      <p>Editar Perfil</p>
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
                      {userInfo.about_general}
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
                      {userInfo.about_looking}
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
                  <p className='ml-0 mt-2 text-xs text-white font-medium mb-11'>

                    {userInfo.about_expectation}

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
                  <a href="#" className='no-underline text-white pt-3 text-sm'>{userInfo.email}</a>
                  <a href="#" className='no-underline text-white pt-3 text-sm'>{userInfo.phone_number}</a>
                </div>
              </div>
              <div className="social pl-6 pr-6 pt-7">
                <h2 className='text-white text-base font-bold flex justify-center'>redes sociais</h2>
                <div className="socials flex items-center justify-around pt-4">
                  <a href={userInfo.instagram_link}><InstagramLogo size={22} color='white' className='cursor-pointer' /></a>
                  <a href={userInfo.linkedin_link}><LinkedinLogo size={22} color='white' className='cursor-pointer' /></a>
                  <a href={userInfo.twitter_link}><TwitterLogo size={22} color='white' className='cursor-pointer' /></a>
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
