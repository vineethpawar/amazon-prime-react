import React,{useState} from 'react'
import './MovieScreen.css'
import Navbar from './../../components/navbar/Navbar';
import MovieRow from './../../components/movierow/MovieRow';
import {API_KEY} from '../../request.js'
import MovieBanner from '../../components/moviebanner/MovieBanner';
function MovieScreen() {
  const [selectedRow,setSelectedRow]=useState()
 const [muteState,setMuteAudio] = useState(1);
 const [selectedComponent,setSelectedComponent]=useState();
 const changeMuteState = (status) =>{setMuteAudio(status)}
 const changeSelectedComponent=(id)=>{setSelectedComponent(id)}
  return (

    <div className="movie__screen">
  
      <Navbar />
  
     <MovieBanner/>
      
              <div className="movie__strips">
                <div className="movie__row__strip movie__row__strip1" onMouseOver={()=>setSelectedRow('trending')}>
                  <MovieRow muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL = {`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&with_original_language=hi`} rowTitle='trending' selectedRow={selectedRow}/>
                </div>

                <div className="movie__row__strip movie__row__strip2" onMouseOver={()=>setSelectedRow('popular')} >
                  <MovieRow muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL = {`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&with_original_language=zh&page=1`} rowTitle='popular' selectedRow={selectedRow} />
                </div>

                <div className="movie__row__strip movie__row__strip3" onMouseOver={()=>setSelectedRow('top rated')} >
                  <MovieRow muteState={muteState} changeMuteState={changeMuteState} selectedComponent={selectedComponent} changeSelectedComponent={changeSelectedComponent} requestURL = {`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&with_original_language=en&page=1`} rowTitle='top rated' selectedRow={selectedRow} />
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
