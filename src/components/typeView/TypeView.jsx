import React from 'react'
import { useQuery } from 'react-query';
import { getAllTypes } from '../../services/pokemons';
import Loading from '../loading/Loading';
import { Link } from "react-router-dom";
import './typeView.css';

const TypeView = () => {
  const {
    data,
    status
  } = useQuery(['Pokemon type'], () => getAllTypes(), { keepPreviousData: true });

  if (status === 'loading') {
    return <Loading />
  }

  return (
    <div className='pokemon-type-container'>
      <h2 className='pokemon-type-title'>Pokemon types:</h2>
      <div className="pokemon-type-list">
        {data.results.map(item => (
          <span className='pokemon-type-item' key={`type-${item.name}`}>
            <Link to={`/type/${item.name}`}>{item.name}</Link>
          </span>
        ))}
      </div>
    </div>
  )
}

export default TypeView