import { Home } from "./assets/pages/Home"
import { Login } from "./assets/pages/Login"
import { PerfilProfissional } from "./assets/pages/PerfilProfissional"
import { PerfilContratante } from "./assets/pages/PerfilContratante"
import { Register } from "./assets/pages/Register"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/perfilprofissional" element={<PerfilProfissional />} />
      <Route path="/perfilcontratante" element={<PerfilContratante />} />
    </Routes>
  )
}

export default App