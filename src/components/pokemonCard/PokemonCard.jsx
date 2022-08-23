import React from 'react'
import { useQuery } from 'react-query'
import { getPokemonByName } from '../../services/pokemons';
import { useNavigate } from 'react-router-dom';
import './pokemonCard.css'

const PokemonCard = ({
  name
}) => {
  const {
    data,
    status,
  } = useQuery(
    ["Pokemon card", name], 
    () => getPokemonByName(name), 
    { 
      keepPreviousData: true,
    });

  const navigate = useNavigate();
  const getImgSrc = () => {
    return data.sprites.other.dream_world.front_default ? 
      data.sprites.other.dream_world.front_default :
      data.sprites.other.home.front_default ?
      data.sprites.other.home.front_default :
      data.sprites.other["official-artwork"].front_default ?
      data.sprites.other["official-artwork"].front_default :
      data.sprites.front_default
  }

  if (status === 'loading') {
    return <div className='pokemon-card-loading'>Loading...</div>
  }

  if (status !== 'loading' && !data) {
    return <></>
  }

  return (
    <div className='pokemon-card-container'>
      <img 
        className='pokemon-card-img'
        src={getImgSrc()} 
        alt={`Pokemon ${name}`} 
      />
      <div className='pokemon-card-body'>
        <h2 className='pokemon-card-title'>{name.replaceAll('-', ' ')}</h2>
        <div className='pokemon-card-text'>
          Types: 
          {data.types.map(item => (
            <span 
              className='pokemon-card-type-item' 
              key={`type-${item.type.name}`}
              onClick={() => navigate(`/type/${item.type.name}`)}
            >{
              item.type.name
            }</span>
          ))}
        </div>
        <button 
          className='pokemon-card-detail-btn'
          onClick={() => navigate(`/pokemon/${name}`)}
        >More details
        </button>
      </div>
    </div>
  )
}

export default PokemonCard