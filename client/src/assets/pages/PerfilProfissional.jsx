import React, { useEffect, useState } from 'react'
import { MainHeader } from '../components/MainHeader'
import { Link } from 'react-router-dom'
import { Star, ChatTeardropText, PencilSimple, InstagramLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react'
import { AboutUser } from '../components/AboutUser'
import { ProfissionaHistory } from '../components/ProfissionaHistory'
import axios from 'axios'

export const PerfilProfissional = () => {
  const [userInfo, setUserInfo] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleModalOpen = () => {
  //   setIsModalOpen(true);
  // };

  // const [name, setName] = useState()
  // const [email, setEmail] = useState()
  // const [phone_number, setPhoneNumber] = useState()
  // const [about_general, setAboutGeneral] = useState()
  // const [about_professional, setAboutProfessional] = useState()
  // const [about_expectation, setAboutExpectation] = useState()
  // const [about_looking, setAboutLookin] = useState()
  // const [professional_history, setProfessionalHistory] = useState()
  // // const [name, setName] = useState()
  // // const [name, setName] = useState()
  // // const [name, setName] = useState()
  // // const [name, setName] = useState()
  // // const [name, setName] = useState()
  // // const [name, setName] = useState()
  // // const [name, setName] = useState()
  // // const [name, setName] = useState()
  // // const [name, setName] = useState()
  // // const [name, setName] = useState()

  // const userInfos = {
  //   name: name,
  //   email: email,
  //   phone_number: phone_number,
  //   about_general: about_general,
  //   about_looking: about_looking,
  //   about_expectation: about_expectation,
  //   // occupation: occupation,
  //   professional_history: professional_history,
  //   about_professional: about_professional,
  //   // about_advertisement: about_advertisement,
  //   // category: category,
  //   // availability: uavailability,
  //   // currency: currency,
  //   // currency_amount: currency_amount,
  //   // languages: languages,
  //   // instagram_link: instagram_link,
  //   // twitter_link: twitter_link,
  //   // linkedin_link: linkedin_link,
  // };

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

            <div className="left-info flex-1 bg-Purple rounded-lg">
              <div className="row flex">
                <div className="profile-image w-24 h-24 ml-7 mt-7 bg-EsmeraldGreen rounded-full"></div>
                <div className='flex justify-between w-full pr-24 pb-6'>
                  <div className="profile-information">
                    <h2 className='text-white text-3xl mt-8 ml-7'><span>{userInfo.name}</span></h2>
                    <p className='text-white font-bold text-sm ml-7 pt-1'><span>{userInfo.occupation}</span></p>
                    <div className="rating ml-7 mt-2 flex">
                      <Star size={18} color='white' />
                      <Star size={18} color='white' />
                      <Star size={18} color='white' />
                      <Star size={18} color='white' />
                      <Star size={18} color='white' />
                    </div>
                  </div>
                  {/* <PencilSimple size={22} className='mt-10 text-white' onClick={handleModalOpen} /> */}
                  <div className="btn-message">
                    <button className='bg-EsmeraldGreen text-white p-2 rounded-xl border-none mt-9 ml-36 w-36 flex items-center'>
                      <ChatTeardropText size={19} className='mr-3 ml-1' />
                      <p>Conversar</p>
                    </button>
                    <div className="hour-price text-right pr-4">
                      <span className='text-white text-sm mt-2 font-normal'>preço por hora:</span><br />
                      <div className="price">
                        <span className='text-white text-sm mt-2 font-normal'>{userInfo.currency} <span>{userInfo.currency_amount}</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className='max-w-3xl m-auto' />

              <AboutUser />
              <ProfissionaHistory />

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