import React from 'react'

const MovieCard = ({ title, poster, genre, released, runtime, director, writer, actors, language, country }) => {
  return (
    <div>
      <div className='movie-box'>
        <div id='container'>
          <img id='img' src={poster} />
          <div id='middle'>
            <div id='info-box'>
              <div id='titre' >{title}</div>
              <div id="info" >
                <div id='inf'><span id='type'>Genre : </span>{genre}</div>
                <div id='inf'><span id='type'>Released : </span>{released}</div>
                <div id='inf'><span id='type'>Runtime : </span>{runtime}</div>
                <div id='inf'><span id='type'>Director : </span>{director}</div>
                <div id='inf'><span id='type'>Writer : </span>{writer}</div>
                <div id='inf'><span id='type'>Actors : </span>{actors}</div>
                <div id='inf'><span id='type'>Language : </span>{language}</div>
                <div id='inf'><span id='type'>Country : </span>{country}</div>
              </div>
            </div>
          </div>
        </div>
        <h3 id='movie-name' ><b>{title}</b></h3>
      </div>
    </div>
  )
}

export default MovieCard