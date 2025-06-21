import React from 'react'

const Navbar = () => {
  return (
    <div id='nav'>
    <nav>
        <div id='logo' className='animated tada'>
          <b>CIMAFREE</b>            
        </div>
        <ul>
          <b><a id='link' href="">About</a></b>
          <b><a id='link' href="">Home</a></b>
          <b><a id='link' href="#movies-list">Movies</a></b>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar