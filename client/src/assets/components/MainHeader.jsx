import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChatCenteredDots, Bell } from '@phosphor-icons/react';

export const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed pt-5 pb-4 top-0 w-screen shadow-md flex justify-center items-center ${isScrolled ? 'bg-Purple' : ''
        }`}
    >
      <div className="container max-w-7xl">
        <div className="navigation flex justify-between items-center">
          <Link
            to="/"
            className={`text-5xl font-bold ${isScrolled ? 'text-white' : 'text-Purple'}`}
          >
            ITrabs
          </Link>
          <ul className="header-middle list-none flex items-center">
            <li className="py-0 px-7">
              <Link
                to="/encontrarprofissionais"
                className={`pb-6 font-semibold text-base border-b-4 border-transparent hover:border-Purple ${isScrolled ? 'text-white' : 'text-Purple'
                  }`}
              >
                ENCONTRAR PROFISSIONAIS
              </Link>
            </li>
            <li className="py-0 px-7">
              <Link
                to="/perfilprofissional"
                className={`pb-6 font-semibold text-base border-b-4 border-transparent hover:border-Purple ${isScrolled ? 'text-white' : 'text-Purple'
                  }`}
              >
                MEUS PERFIS
              </Link>
            </li>
            <li className="py-0 px-7">
              <Link
                to="/planos"
                className={`pb-6 font-semibold text-base border-b-4 border-transparent hover:border-Purple ${isScrolled ? 'text-white' : 'text-Purple'
                  }`}
              >
                PLANOS
              </Link>
            </li>
          </ul>
          <div className="header-right list-none flex items-center">
            <Bell size={45} color={isScrolled ? 'white' : 'Purple'} className="p-2" />
            <ChatCenteredDots size={45} color={isScrolled ? 'white' : 'Purple'} className="pr-4" />

            <div>
              <div
                className="image-profile bg-EsmeraldGreen w-10 h-10 rounded-full"
                onClick={toggleDropdown}
              ></div>
              {showDropdown && (
                <div className="dropdown-content absolute top-0 mt-20 right-0 mr-28 bg-Purple rounded-md p-2">
                  <button
                    type='button'
                    className="dropdown-item text-white cursor-pointer hover:bg-PurpleLight"
                    onClick={navigate('/login')}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
