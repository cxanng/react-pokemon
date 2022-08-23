import React from 'react';
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom';
import { getPokemonByName } from '../../services/pokemons';
import { AiFillHeart, AiFillFire } from 'react-icons/ai';
import { TbSword } from 'react-icons/tb';
import { BsFillShieldFill } from 'react-icons/bs';
import { GiWalkingBoot, GiFireShield } from 'react-icons/gi';
import { GrFireball } from 'react-icons/gr';
import './singlePokemonView.css';
import Loading from '../loading/Loading';
import NotFound from '../notFound/NotFound';

const SinglePokemonDialog = () => {
  let { name } = useParams();

  const {
    data,
    status,
  } = useQuery(["Pokemon card", name], () => getPokemonByName(name), { keepPreviousData: true });

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'error') {
    return <NotFound name={name} />
  }

  return (
    <div className="single-view-container">
      <div className='single-view-left'>
        <img src={data.sprites.other.dream_world.front_default} alt={name} />
      </div>
      <div className="single-view-right">
        <h2 className='single-view-title'>{name}</h2>
        <div className="single-view-content">
          <span className='single-view-prop'>Types:</span> 
            {data.types.map(item => (
              <span className='pokemon-card-type-item' key={`pokemon-type-${item.type.name}`}>{
                item.type.name
              }</span>
            ))}
          <br />
          <span className='single-view-prop'>Abilities:</span>
            <ul className='single-view-ability-list'>
              {data.abilities.map(item => (
                <li 
                  className='pokemon-card-ability-item' 
                  key={`ability-${item.ability.name}`}
                >
                  <GrFireball className='single-icons'/>{item.ability.name}
                </li>
              ))}
            </ul>
          <br />
          <span className="single-view-prop">Stats:</span>
            <table className='single-view-stats'>
              <tbody>
                <tr>
                  <td style={{ 'color': 'green'}}><AiFillHeart className='single-icons'/>HP</td> 
                  <td style={{ 'color': 'green'}}>{data.stats[0].base_stat}</td>
                </tr>
                <tr>
                  <td style={{ 'color': 'red'}}><TbSword className='single-icons'/>Attatck</td> 
                  <td style={{ 'color': 'red'}}>{data.stats[1].base_stat}</td>
                </tr>
                <tr>
                  <td style={{ 'color': 'blue'}}><BsFillShieldFill className='single-icons'/>Defense</td> 
                  <td style={{ 'color': 'blue'}}>{data.stats[2].base_stat}</td>
                </tr>
                <tr>
                  <td style={{ 'color': 'orange'}}><AiFillFire className='single-icons'/>Special attack</td> 
                  <td style={{ 'color': 'orange'}}>{data.stats[3].base_stat}</td>
                </tr>
                <tr>
                  <td style={{ 'color': 'brown'}}><GiFireShield className='single-icons'/>Special defense</td> 
                  <td style={{ 'color': 'brown'}}>{data.stats[4].base_stat}</td>
                </tr>
                <tr>
                  <td style={{ 'color': '#ffc300'}}><GiWalkingBoot className='single-icons'/>Speed</td> 
                  <td style={{ 'color': '#ffc300'}}>{data.stats[5].base_stat}</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default SinglePokemonDialog;