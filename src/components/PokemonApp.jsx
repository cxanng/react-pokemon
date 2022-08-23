import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from './navBar/NavBar';
import '../App.css';
import SinglePokemonDialog from './singlePokemonView/SinglePokemonView';
import PokemonView from './pokemonView/PokemonView';
import TypeView from './typeView/TypeView';
import PokemonByTypeView from './pokemonByTypeView/PokemonByTypeView';

const PokemonApp = () => {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<PokemonView />} />
          <Route path='/pokemon' element={<PokemonView />} />
          <Route path='/pokemon/:name' element={<SinglePokemonDialog />} />
          <Route path='/type' element={<TypeView />} />
          <Route path='/type/:name' element={<PokemonByTypeView />} />
        </Routes>
      </Router>
    </div>
  )
}

export default PokemonApp