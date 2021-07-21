import React, { useState, useEffect } from 'react'
import MovieRow from './../../components/movierow/MovieRow';
import { API_KEY } from '../../request.js'
import MovieBanner from '../../components/moviebanner/MovieBanner';
import './MovieScreen.css'
import Footer from './../../components/footer/Footer';

function MovieScreen({ mediaType, originalLanguage, changeScreen, selectedRow, muteState, selectedComponent, changeMuteState, changeSelectedComponent, changeSelectedRow, updateScreen }) {


  return (

    <div className="movie__screen" >


      <MovieBanner originalLanguage={originalLanguage} mediaType={mediaType} updateScreen={updateScreen} />

      <div className="movie__strips">


        <div className="movie__row__strip movie__row__strip1" onMouseOver={() => changeSelectedRow('popular')} >
          <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${API_KEY}&with_original_language=${originalLanguage}&page=1`} rowTitle='popular' selectedRow={selectedRow} updateScreen={updateScreen} />
        </div>

        <div className="movie__row__strip movie__row__strip2" onMouseOver={() => changeSelectedRow('top rated')} >
          <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=${API_KEY}&with_original_language=${originalLanguage}&page=1`} rowTitle='top rated' selectedRow={selectedRow} updateScreen={updateScreen} />
        </div>

        <div className="movie__row__strip movie__row__strip3" onMouseOver={() => changeSelectedRow('trending')}>
          <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${API_KEY}&with_original_language=${originalLanguage}`} rowTitle='trending' selectedRow={selectedRow} updateScreen={updateScreen} />
        </div>

        <div className="movie__row__strip movie__row__strip4" style={{ position: 'relative', padding: '80px 0 10px' }}>
          <Footer />
        </div>




      </div>



    </div>
  )
}

export default MovieScreen
