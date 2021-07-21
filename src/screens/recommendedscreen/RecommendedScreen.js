import React, { useEffect } from 'react'
import { API_KEY } from '../../request.js'
import './RecommendedScreen.css'
import Footer from './../../components/footer/Footer';
import RecommendedRow from './../../components/recommendedrow/RecomendedRow';


function RecommendedScreen({ movieId, mediaType, changeScreen, selectedRow, muteState, selectedComponent, changeMuteState, changeSelectedComponent, changeSelectedRow }) {
  useEffect(() => {
    document.getElementById('recommendedScreenID').scrollTop = 0;
  })

  return (

    <div id="recommendedScreenID" className="recommended__screen">

      <div className="movie__strips">
        <div className="movie__row__strip movie__row__strip1" onMouseOver={() => changeSelectedRow(' ')}>
          <RecommendedRow changeScreen={changeScreen} muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL={`https://api.themoviedb.org/3/${mediaType}/${movieId}/recommendations?api_key=${API_KEY}&page=1`} rowTitle=' ' selectedRow={selectedRow} />
        </div>

        <div className="movie__row__strip movie__row__strip2" style={{ position: 'relative', padding: '80px 0 10px' }}>
          <Footer />
        </div>

      </div>

    </div>
  )
}

export default RecommendedScreen
