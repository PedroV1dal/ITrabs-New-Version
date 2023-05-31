import React, { useState, useEffect } from 'react'
import axios from 'axios';


export const ProfissionaHistory = () => {

  const authToken = sessionStorage.getItem('token');
  const [userInfo, setUserInfo] = useState(null);

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
    <div className="about-box box max-w-3xl m-auto pt-7">

      <h3 className=' text-white text-lg font-bold'>Histórico Profissional</h3>
      <p className='text-white text-sm mt-1 mb-11'>{userInfo.professional_history}</p>

    </div>
  )
}
