import {React , useState } from 'react'
import { movies } from '../data/data'
import MovieCard from './MovieCard'

const MoviesList = () => {

  const [ searchText , setSearchText ] = useState("")
  const filtredMovies = movies.filter ((movie) => (
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  ) )


  return (
    <div>
      <div class="container">
        <div id='search-box'>
          <h1 id="title"><span>A</span><span>L</span><span>L</span> <span>M</span><span>O</span><span>V</span><span>I</span><span>E</span><span>S</span></h1>

          <div class="galaxy"></div>
          <div id="search-container">
            <div class="nebula"></div>
            <div class="starfield"></div>
            <div class="cosmic-dust"></div>
            <div class="cosmic-dust"></div>
            <div class="cosmic-dust"></div>

            <div class="stardust"></div>

            <div class="cosmic-ring"></div>

            <div id="main">

              <input
              onChange={(e)=> setSearchText(e.target.value) }
                value={searchText}
                class="input"
                name="text"
                type="text"
                placeholder="Search..."
              />

              <div id="input-mask"></div>
              <div id="cosmic-glow"></div>
              <div class="wormhole-border"></div>
              <div id="wormhole-icon">
                {/* <svg
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        stroke="#a9c7ff"
        fill="none"
        height="24"
        width="24"
        viewBox="0 0 24 24"
      >
          
        <circle r="10" cy="12" cx="12"></circle>
        <path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        ></path>
        <path d="M2 12h20"></path>
      </svg> */}
                <svg
                  preserveAspectRatio="none"
                  height="27"
                  width="27"
                  viewBox="4.8 4.56 14.832 15.408"
                  fill="none"
                >
                  <path
                    d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
                    stroke="#d6d6e6"
                    stroke-width="1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div id="search-icon">
                <svg
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="url(#cosmic-search)"
                  fill="none"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <circle r="8" cy="11" cx="11"></circle>
                  <line y2="16.65" x2="16.65" y1="21" x1="21"></line>
                  <defs>
                    <linearGradient gradientTransform="rotate(45)" id="cosmic-search">
                      <stop stop-color="#a9c7ff" offset="0%"></stop>
                      <stop stop-color="#6e8cff" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id='movies-list'>
          {filtredMovies.map(movie => {
            return (
              <MovieCard title={movie.title} poster={movie.poster} genre={movie.genre} released={movie.released} runtime={movie.runtime} director={movie.director} writer={movie.writer} actors={movie.actors} language={movie.language} country={movie.country} />
            )
          })
          }
        </div>
      </div>

    </div>
  )
}

export default MoviesList