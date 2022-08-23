import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { getType } from '../../services/pokemons';
import Loading from '../loading/Loading';
import NotFound from '../notFound/NotFound';
import PokemonList from '../pokemonList/PokemonList';
import './pokemonByTypeView.css';

const PokemonByTypeView = () => {
  let { name } = useParams();
  const [page, setPage] = useState(1);
  const {
    data: pokemonList, 
    status,
  } = useQuery(["Pokemon type", name], () => getType(name), { keepPreviousData: true });

  if (status === 'loading') {
    return <Loading />
  }
  const paginatePokemons = (page) => {
    const maxPage = pokemonList.length%12 === 0 ? 
      pokemonList.length/12 :
      (pokemonList.length - pokemonList.length%12)/12 + 1;
    const list = page === maxPage ? pokemonList.slice(page*12-12) : pokemonList.slice(page*12-12, page*12);
    return {
      pokemons: list.map(item => item.pokemon),
      next: page < maxPage,
      previous: page > 1,
    }
  }
  console.log(paginatePokemons(1))

  if (status === 'error') {
    return <NotFound name={name} />
  }

  if (pokemonList.length === 0) {
    return <div className='empty-list'>
      The pokemon list is empty.
    </div>
  }

  return (
    <PokemonList 
      pokemons={paginatePokemons(page).pokemons} 
      page={page} 
      setPage={setPage}
      previous={paginatePokemons(page).previous}
      next={paginatePokemons(page).next}
    />
  )
}

export default PokemonByTypeView