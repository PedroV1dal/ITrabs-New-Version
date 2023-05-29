import { Home } from "./assets/pages/Home"
import { Login } from "./assets/pages/Login"
import { PerfilProfissional } from "./assets/pages/PerfilProfissional"
import { PerfilContratante } from "./assets/pages/PerfilContratante"
import { Register } from "./assets/pages/Register"
import { Routes, Route, useNavigate } from "react-router-dom"
import { EncontrarProfissionais } from "./assets/pages/EncontrarProfissionais"
import { useEffect } from "react"


function App() {

  const authenticated = sessionStorage.getItem('token')
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate('/login');
    }
  }, [authenticated, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {authenticated ? <Route path="/perfilprofissional" element={<PerfilProfissional />} /> : null}
      {authenticated ? <Route path="/perfilcontratante" element={<PerfilContratante />} /> : null}
      {authenticated ? <Route path="/encontrarprofissionais" element={<EncontrarProfissionais />} /> : null}

    </Routes>
  );
}

export default App