import React from 'react'

const Navbar = () => {
  return (
    <div id='nav'>
    <nav>
        <div id='logo' className='animated tada'>
          <b>CIMAFREE</b>            
        </div>
        <ul>
          <b><a href="">About</a></b>
          <b><a href="">Homme</a></b>
          <b><a href="#movies-list">Movies</a></b>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar