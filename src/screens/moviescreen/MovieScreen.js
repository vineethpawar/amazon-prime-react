import React,{useState} from 'react'
import './MovieScreen.css'
import Navbar from './../../components/navbar/Navbar';
import MovieRow from './../../components/movierow/MovieRow';
import {API_KEY} from '../../request.js'
function MovieScreen() {
 const [muteState,setMuteAudio] = useState(1);
 const [selectedComponent,setSelectedComponent]=useState();
 const changeMuteState = (status) =>{setMuteAudio(status)}
 const changeSelectedComponent=(id)=>{setSelectedComponent(id)}
  return (

    <div className="movie__screen">
      <Navbar />
      
      <div className="movie__strips">
                <div className="movie__row__strip movie__row__strip1" >
                  <MovieRow muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL = {`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`} title='Trending'/>
                </div>

                <div className="movie__row__strip movie__row__strip2" >
                  <MovieRow muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL = {`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`} title='Popular'/>
                </div>

                {/* <div className="movie__row__strip movie__row__strip2" >
                  <MovieRow />
                </div>
                <div className="movie__row__strip movie__row__strip3" >
                  <MovieRow />
                </div>
                <div className="movie__row__strip movie__row__strip4" >
                  <MovieRow />
                </div>
                <div className="movie__row__strip movie__row__strip5" >
                  <MovieRow />
                </div> */}
        </div>

    </div>
  )
}

export default MovieScreen
