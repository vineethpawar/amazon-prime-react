import React,{useState,useEffect} from 'react'
import './MovieRow.css'
import MovieComponent from './../moviecomponent/MovieComponent';
import Axios from 'axios'

function MovieRow({requestURL,title="Default title",selectedComponent,changeSelectedComponent,muteState,changeMuteState}) {
useEffect(()=>{
   Axios.get(requestURL)
   .then(response=>{setMoviesArray(response.data.results);console.log(response.data.results)})
},[])
    const horizontalScroll = (event) => {
        const delta = Math.max(-200, Math.min(200, (event.nativeEvent.wheelDelta || -event.nativeEvent.detail)))
        event.currentTarget.scrollLeft -= (delta * 10)
        event.preventDefault()
    }

    const [moviesArray,setMoviesArray]=useState([])
    
    return (
  
  <div className="movie__row__wrapper">
      <div className="movie__row__title">
         {title}
         </div>

        <div className='movie__row' onWheel={horizontalScroll}>

           {moviesArray.map(movie=>
            <div key={movie.id} className="movie__component__wrapper" onMouseOver={()=>changeSelectedComponent(movie.id)}>
                <MovieComponent id={movie.id} selectedComponent={selectedComponent} image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} movieTitle={movie.title || movie.name} description={movie.overview} release={movie.release_date || false} rating={movie.vote_average} type={movie.media_type} popularity={movie.popularity} muteState={muteState} changeMuteState={changeMuteState} />
            </div>
              )
            }
           

        </div>

</div>

    )
}

export default MovieRow
