import React, { useState, useEffect } from 'react'
import MovieRow from './../../components/movierow/MovieRow';
import { API_KEY } from '../../request.js'
import MovieBanner from '../../components/moviebanner/MovieBanner';
import './MovieScreen.css'
import Footer from './../../components/footer/Footer';

function MovieScreen({ mediaType, originalLanguage, changeScreen, selectedRow, muteState, selectedComponent, changeMuteState, changeSelectedComponent, changeSelectedRow, updateScreen, kidMode,userDetails }) {

useEffect(()=>{})
  return (

    <div className="movie__screen" >


      <MovieBanner originalLanguage={originalLanguage} mediaType={mediaType} updateScreen={updateScreen} changeScreen={changeScreen} changeSelectedComponent={changeSelectedComponent}  kidMode={kidMode}/>

      <div className="movie__strips">

        {!kidMode && <>
          <div className="movie__row__strip movie__row__strip1" onMouseOver={() => changeSelectedRow('popular')} >
            <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${API_KEY}&with_original_language=${originalLanguage}&page=1`} rowTitle='popular' selectedRow={selectedRow} updateScreen={updateScreen} mediaType={mediaType} userDetails={userDetails}/>
          </div>

          <div className="movie__row__strip movie__row__strip2" onMouseOver={() => changeSelectedRow('top rated')} >
            <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=${API_KEY}&with_original_language=${originalLanguage}&page=1`} rowTitle='top rated' selectedRow={selectedRow} updateScreen={updateScreen} mediaType={mediaType} userDetails={userDetails}/>
          </div>

          <div className="movie__row__strip movie__row__strip3" onMouseOver={() => changeSelectedRow('trending')}>
            <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${API_KEY}&with_original_language=${originalLanguage}`} rowTitle='trending' selectedRow={selectedRow} updateScreen={updateScreen} mediaType={mediaType} userDetails={userDetails}/>
          </div>

          <div className="movie__row__strip movie__row__strip4" onMouseOver={() => changeSelectedRow('anime')}>
            <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${API_KEY}&with_original_language=ja&page=1`} rowTitle='anime' selectedRow={selectedRow} updateScreen={updateScreen} mediaType={mediaType} userDetails={userDetails}/>
          </div>

          <div className="movie__row__strip movie__row__strip5" onMouseOver={() => changeSelectedRow('kannada')}>
            <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${API_KEY}&with_original_language=kn&page=1`} rowTitle='kannada' selectedRow={selectedRow} updateScreen={updateScreen} mediaType={mediaType} userDetails={userDetails}/>
          </div>

          <div className="movie__row__strip movie__row__strip6" style={{ position: 'relative', padding: '80px 0 10px' }}>
          <Footer />
          </div>
        </>
       }
        

       {kidMode &&
          <>
            <div className="movie__row__strip movie__row__strip1" onMouseOver={() => changeSelectedRow('popular')} >
              <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${API_KEY}&with_original_language=${originalLanguage}&with_genres=16&page=1`} rowTitle='popular' selectedRow={selectedRow} updateScreen={updateScreen} mediaType={mediaType} userDetails={userDetails}/>
            </div>

            <div className="movie__row__strip movie__row__strip2" onMouseOver={() => changeSelectedRow('top rated')} >
              <MovieRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${API_KEY}&with_original_language=${originalLanguage}&with_genres=16&page=2`} rowTitle='top rated' selectedRow={selectedRow} updateScreen={updateScreen} mediaType={mediaType} userDetails={userDetails}/>
            </div>

            <div className="movie__row__strip movie__row__strip3" style={{ position: 'relative', padding: '80px 0 10px' }}>
            <Footer />
            </div>
          </>
        }

      


      </div>



    </div>
  )
}

export default MovieScreen
