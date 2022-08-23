import React, { useState } from 'react';
import logo from '../../assets/pikachu.png';
import { useNavigate } from 'react-router-dom';
import './navBar.css';

import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [ search, setSearch ] = useState('');

  const handleSearch = () => {
    navigate(`/pokemon/${search.toLowerCase()}`);
    setSearch('');
  }

  return (
    <nav className='navbar'>
      <div className="navbar-left"> 
        <img 
          className='app-logo'
          src={logo}
          alt='Logo'
        />
        <Link to='/pokemon' className='navbar-link'><h2>Pokemons</h2></Link>
        <Link to='/type' className='navbar-link'><h2>Types</h2></Link>
      </div>
      <div className="navbar-right">
        <input
          type="text"
          placeholder="Pikachu"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  )
}

export default NavBar;