import { Route, Routes } from "react-router-dom"
import PaginaBase from "../paginas/PaginaBase"
import Home from '../paginas/Home'


const Rotas = () => {
  return (
    <Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Rotas