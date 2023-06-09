import { Home } from "./assets/pages/Home"
import { Login } from "./assets/pages/Login"
import { PerfilProfissional } from "./assets/pages/PerfilProfissional"
import { PerfilContratante } from "./assets/pages/PerfilContratante"
import { Register } from "./assets/pages/Register"
import { Routes, Route, useNavigate } from "react-router-dom"
import { EncontrarProfissionais } from "./assets/pages/EncontrarProfissionais"
import { useEffect } from "react"
import AddCreate from "./assets/pages/AddCreate"
import { ProProfileEdit } from "./assets/pages/ProProfileEdit"
import { ClienteProfileEdit } from "./assets/pages/ClienteProfileEdit"



function App() {
  const authenticated = sessionStorage.getItem('token')
  const navigate = useNavigate();

  useEffect(() => handleAuth(), [authenticated, navigate]);

  const handleAuth = () => {
    if (!authenticated && window.location.pathname !== '/register')
      navigate('/login');
    else if (window.location.pathname === '/login')
      navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/criaranuncio" element={<AddCreate />} /> */}

      {authenticated ? <Route path="/perfilprofissional" element={<PerfilProfissional />} /> : null}
      {authenticated ? <Route path="/perfilcontratante" element={<PerfilContratante />} /> : null}
      {authenticated ? <Route path="/encontrarprofissionais" element={<EncontrarProfissionais />} /> : null}
      {authenticated ? <Route path="/criaranuncio" element={<AddCreate />} /> : null}
      {authenticated ? <Route path="/editarperfil" element={<ProProfileEdit />} /> : null}
      {authenticated ? <Route path="//clientperfil" element={<ClienteProfileEdit />} /> : null}

    </Routes>
  );
}

export default App