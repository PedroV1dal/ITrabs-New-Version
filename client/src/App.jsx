

function App() {
  return (
    <div>
      <header className="header flex justify-center pb-2 fixed top-0 w-screen">
        <div className="container max-w-7xl mx-auto">
          <div className="navigation flex justify-between items-center pt-4 pb-2">
            <p className="text-5xl text-Purple">ITrabs</p>
            <nav className="flex space-x-14 text-Purple font-semibold">
              <a href="#" className="hover:border-    solid hover:border-2 hover:border-sky-500">INICIO</a>
              <a href="#" className="hover:border-solid hover:border-2 hover:border-sky-500">COMO FUNCIONA</a>
              <a href="#" className="hover:border-solid hover:border-2 hover:border-sky-500">CATEGORIAS</a>
              <a href="#" className="hover:border-solid hover:border-2 hover:border-sky-500">SOBRE</a>
            </nav>
            <button>TORNE-SE PROFISSIONAL</button>
          </div>
        </div>
      </header>
      <main>
        <section className="hero bg-[./images/background-image.png] w-full FLEX justify-center">
          <div className="container max-w-7xl mx-auto">
            <div className="hero-content ">
              <p>Bem vindo ao ITrabs 🧑‍💻</p>
              <h1>REVOLUCIONE A FORMA DE DIVULGAR O SEU SERVIÇO</h1>
              <p>Profissionais qualificados reunidos em um só lugar, com um único propósito: resolver seus problemas</p>
              <button>TORNE-SE PROFISSIONAL</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
  
}

export default App
