import React from 'react'

import { Cards } from '../components/Cards'
import { HomeHeader } from '../components/HomeHeader'
import { Facebook, FotoSobre, Instagram, Linkedin, Logo, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8 } from "../images/index.js"
import { HomeBtn } from '../components/HomeBtn'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <main>

        <section className="hero w-full flex justify-center h-auto pt-20 pb-20">
          <div className="container max-w-7xl mx-auto">
            <div className="hero-content w-600 pt-20">
              <p className="text-Purple font-semibold text-sm">Bem vindo ao ITrabs 🧑‍💻</p>
              <h1 className="text-slate-950 text-4xl pt-16 pb-8">REVOLUCIONE A FORMA DE DIVULGAR O SEU SERVIÇO</h1>
              <p className="text-slate-950 text-lg pb-12">Profissionais qualificados reunidos em um só lugar, com um único propósito: resolver seus problemas</p>
              <Link to="/login"><HomeBtn /></Link>
            </div>
          </div>
        </section>

        <section className="etapas w-full flex justify-center h-auto pt-12 pb-20 bg-EsmeraldGreen">
          <div className="container max-w-7xl mx-auto">
            <h2 className="section-title flex justify-center text-white text-2xl font-bold mt-12">COMO FUNCIONA</h2>
            <Cards />
          </div>
        </section>

        <section className="categorias w-full flex justify-center h-auto pt-2">
          <div className="container max-w-7xl mx-auto">
            <h2 className="section-title flex justify-center text-black text-2xl font-bold mt-12">NOSSAS CATEGORIAS</h2>
            <div className="grid gap-4 grid-cols-4 pt-12 pb-12">
              <img src={cat1} alt="serviços-domesticos" />
              <img src={cat2} alt="serviços-domesticos" />
              <img src={cat3} alt="serviços-domesticos" />
              <img src={cat4} alt="serviços-domesticos" />
              <img src={cat5} alt="serviços-domesticos" />
              <img src={cat6} alt="serviços-domesticos" />
              <img src={cat7} alt="serviços-domesticos" />
              <img src={cat8} alt="serviços-domesticos" />
            </div>
          </div>
        </section>

        <section className="sobre w-full flex justify-center h-auto pt-12 pb-20 bg-EsmeraldGreen">
          <div className="container max-w-7xl mx-auto">
            <div className="sobre-info flex pt-20 pb-16">
              <div className='imagem'>
                <img src={FotoSobre} width={2700} alt="Logo da Empresa" />
              </div>
              <div className='sobre-disc ps-16'>
                <h2 className="section-title text-white text-2xl font-semibold">SOBRE NOS</h2>
                <p className='text-white text-xl font-medium pt-16 pb-12'> A ITrabs está comprometida em fornecer uma solução eficiente e inovadora para conectar profissionais e clientes em uma plataforma única. Nosso objetivo é ajudar profissionais a expandir sua rede de contatos e aprimorar suas oportunidades de negócios, enquanto fornecemos aos clientes acesso fácil a uma variedade de serviços de alta qualidade.</p>
                <Link to="/login"><HomeBtn /></Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer w-full flex justify-center h-auto bg-Purple">
          <div className="container max-w-7xl mx-auto">
            <div className="footer-info flex justify-between pt-12 pb-14">
              <div className="info">
                <img src={Logo} alt="logo-empresa" />
                <p className='pt-4 text-white text-base font-normal'>©2023 - ITrabs.</p>
                <p className='text-white text-base font-normal'>Todos os direitos reservados.</p>
              </div>
              <div className="social-links flex items-center">
                <ul className='flex'>
                  <li className='ps-3'>
                    <a href="#">
                      <img src={Instagram} alt="logo-instagram" />
                    </a>
                  </li>
                  <li className='ps-5'>
                    <a href="#">
                      <img src={Facebook} alt="logo-facebook" />
                    </a>
                  </li>
                  <li className='ps-5'>
                    <a href="#">
                      <img src={Linkedin} alt="logo-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
