import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchPokemons } from '../../services/pokemons';
import Loading from '../loading/Loading';
import PokemonList from '../pokemonList/PokemonList';

const PokemonView = () => {
  const [page, setPage] = useState(1);
  const {
    data,
    status
  } = useQuery(['Pokemon List', page], () => fetchPokemons(page), { keepPreviousData: true });

  if (status === 'loading') {
    return <Loading />
  }

  return (
    <PokemonList 
      pokemons={data.results} 
      page={page} 
      setPage={setPage}
      previous={data.previous}
      next={data.next}
    />
  )
}

export default PokemonView