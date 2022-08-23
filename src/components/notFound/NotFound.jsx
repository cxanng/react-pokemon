import React from 'react';
import './notfound.css'

const NotFound = ({ name }) => {
  return (
    <div className='notfound'>
      <h1 className='notfound-title'>404</h1>
      <div className="notfound-text">
        Pokemon named {name} not found.
      </div>
    </div>
  )
}

export default NotFound