function App() {
  return (
    <div>
      <header className="header flex justify-center items-center fixed top-0 w-screen pb-16">
        <div className="container max-w-7xl">
          <div className="navigation flex justify-between items-center pt-4 pb-2">
            <p className="text-5xl text-Purple">ITrabs</p>
            <nav className="flex space-x-14 text-Purple font-semibold">
              <a href="#" className="border-b-4 border-transparent hover:border-Purple">INICIO</a>
              <a href="#" className="border-b-4 border-transparent hover:border-Purple">COMO FUNCIONA</a>
              <a href="#" className="border-b-4 border-transparent hover:border-Purple">CATEGORIAS</a>
              <a href="#" className="border-b-4 border-transparent hover:border-Purple">SOBRE</a>
            </nav>
            <button className="bg-Purple text-white p-3 w-60 rounded-xl font-semibold mb-1 flex items-center justify-center">TORNE-SE PROFISSIONAL</button>
          </div>
        </div>
      </header>
      <main>
        <section className="hero w-full flex justify-center h-auto mt-20">
          <div className="container max-w-7xl mx-auto">
            <div className="hero-content w-600 pt-20">
              <p className="text-Purple font-semibold text-sm">Bem vindo ao ITrabs 🧑‍💻</p>
              <h1 className="text-slate-950 text-4xl pt-16 pb-8">REVOLUCIONE A FORMA DE DIVULGAR O SEU SERVIÇO</h1>
              <p className="text-slate-950 text-lg pb-12">Profissionais qualificados reunidos em um só lugar, com um único propósito: resolver seus problemas</p>
              <button className="bg-Purple text-white p-3 w-60 rounded-xl font-semibold flex items-center justify-center">TORNE-SE PROFISSIONAL</button>
            </div>
          </div>
        </section>
        <section className="hero w-full flex justify-center h-auto mt-20 bg-EsmeraldGreen">
          <div className="container max-w-7xl mx-auto">
            <h2 className="section-title flex justify-center text-white text-2xl font-bold mt-5">COMO FUNCIONA</h2>
            <div className="cards">
              <div className="card1">
                
                <h2>PUBLIQUE</h2>
                <p>Publique seus serviços para preencher seu perfil com seu portfólio</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
  
}

export default App
