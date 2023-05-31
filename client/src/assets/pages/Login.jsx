import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const recaptchaRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtém o valor do reCAPTCHA
    const recaptchaValue = recaptchaRef.current.getValue();


    const loginData = {
      email: email,
      password: password,
      recaptchaValue: recaptchaValue, // Adiciona o valor do reCAPTCHA aos dados de login
    };

    axios
      .post('http://127.0.0.1:8000/token/', loginData)
      .then((response) => {
        sessionStorage.setItem('token', response.data.access);
        alert('Bem-Vindo');
        setEmail('');
        setPassword('');
        navigate('/perfilprofissional');
      })
      .catch((error) => {
        alert('Erro ao fazer login.');
        console.error(error);
      });
  };

  return (
    <div className="bg-Purple min-h-screen flex items-center justify-center">
      <div className="bg-white p-16 rounded shadow-md">
        <p className="text-7xl font-bold text-Purple">ITrabs</p>
        <h2 className="text-2xl font-medium mb-6 text-black">Entre na sua conta</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Senha:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <ReCAPTCHA ref={recaptchaRef} sitekey="key_uwu" size="invisible" />
            <input
              type="submit"
              id="button"
              value="Fazer Login"
              className="bg-Purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
            <Link
              to="/register"
              className="inline-block align-baseline font-bold text-sm text-Purple hover:text-blue-800"
            >
              Registre-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};