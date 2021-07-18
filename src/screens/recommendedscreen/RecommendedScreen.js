import React, { useState } from 'react'
import MovieRow from './../../components/movierow/MovieRow';
import { API_KEY } from '../../request.js'
import MovieBanner from '../../components/moviebanner/MovieBanner';
import './RecommendedScreen.css'
import Footer from './../../components/footer/Footer';
import Navbar from './../../components/navbar/Navbar';

function RecommendedScreen({ movieId, changeScreen }) {
  const [selectedRow, setSelectedRow] = useState()
  const [muteState, setMuteAudio] = useState(1);
  const [selectedComponent, setSelectedComponent] = useState();
  const changeMuteState = (status) => { setMuteAudio(status) }
  const changeSelectedComponent = (id) => { setSelectedComponent(id) }
  return (

    <div className="movie__screen" >

      <Navbar />


      <div className="movie__strips">
        <div className="movie__row__strip movie__row__strip1" onMouseOver={() => setSelectedRow('')}>
          <MovieRow muteState={muteState} changeScreen={changeScreen} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}&page=1`} rowTitle='trending' selectedRow={selectedRow} />
        </div>


        <div className="movie__row__strip movie__row__strip2" style={{ position: 'relative', padding: '80px 0 10px' }}>
          <Footer />
        </div>




      </div>



    </div>
  )
}

export default RecommendedScreen
