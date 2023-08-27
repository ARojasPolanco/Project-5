import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Page404 from './pages/Page404'
import PokemonDetail from './pages/PokemonDetail'
import PrivateRoutes from './components/auth/PrivateRoutes'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<PrivateRoutes />}>
        <Route path='/pokedex/' element={<Pokedex />} />
        <Route path='/pokedex/:pokemonId' element={<PokemonDetail />} />
      </Route>

      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App
