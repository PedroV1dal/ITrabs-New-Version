import { Home } from "./assets/pages/Home"
import { Login } from "./assets/pages/Login"
import { PerfilProfissional } from "./assets/pages/PerfilProfissional"
import { PerfilContratante } from "./assets/pages/PerfilContratante"
import { Register } from "./assets/pages/Register"
import { Routes, Route, Link } from "react-router-dom"
import { EncontrarProfissionais } from "./assets/pages/EncontrarProfissionais"
import { useState, useEffect } from "react"

function App() {

  // const isAuthenticated = () => {
  //   const token = sessionStorage.getItem('token');
  //   // Verifique se o token existe e se está válido
  //   return token !== null && token !== undefined;
  // };

  // Componente de rota protegida
  // const ProtectedRoute = ({ element, path }) => {
  //   return isAuthenticated() ? (
  //     <Route path={path} element={element} />
  //   ) : (
  //     <Link to="/login" />
  //   );
  // };

  // const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
  //   setAuthenticated(isAuthenticated());
  // }, [authenticated]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* {authenticated && (
        <>
          <Route path="/perfilprofissional" element={<PerfilProfissional />} />
          <Route path="/perfilcontratante" element={<PerfilContratante />} />
          <Route path="/encontrarprofissionais" element={<EncontrarProfissionais />} />
        </>
      )} */}

      <Route path="/perfilprofissional" element={<PerfilProfissional />} />
      <Route path="/perfilcontratante" element={<PerfilContratante />} />
      <Route path="/encontrarprofissionais" element={<EncontrarProfissionais />} />
    </Routes >
  )
}

export default App