import { Home } from "./assets/pages/Home"
import { Login } from "./assets/pages/Login"
import { PerfilProfissional } from "./assets/pages/PerfilProfissional"
import { Register } from "./assets/pages/Register"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/perfilprofissional" element={<PerfilProfissional />} />
    </Routes>
  )
}

export default App