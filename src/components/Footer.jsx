import React from 'react'
import { movies } from '../data/data'

const Footer = () => {
  return (
    <div id='footer-1'>
            <div id="movies-list-2">
            {
            movies.map(movie=>{
                return (
                    <div id='t-1'>
                        <a id="t-2" href={movie.classe}><span id="id">{movie.id} . </span>{movie.title}</a>
                    </div>
                        )
            })
            }
            </div>
    <nav id="nav-2">
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

export default Footer