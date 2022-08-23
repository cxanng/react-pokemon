import React from 'react';
import PokemonCard from '../pokemonCard/PokemonCard';
import './pokemonList.css';

const PokemonList = ({
  pokemons,
  previous,
  next,
  page,
  setPage
}) => {
  return (
    <div className='pokemon-list-container'>
      <div className="pokemon-list">
        {pokemons.map(item => (
          <div className='pokemon-list-item' key={`${item.name}-card`}>
            <PokemonCard
              name={item.name}
            />
          </div>
        ))}
      </div>
      <div className="pokemon-action">
        {previous && (
          <button onClick={() => setPage(page-1)}>Previous</button>
        )}
        {next && (
          <button onClick={() => setPage(page+1)}>Next</button>
        )}
      </div>
    </div>
  )
}

export default PokemonList