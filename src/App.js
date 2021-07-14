import React from 'react'
import './App.css';
import MovieScreen from './screens/moviescreen/MovieScreen';
import WelcomeScreen from './screens/welcomescreen/WelcomeScreen';


function App() {

  return (

    <div className="app">

      {/* <WelcomeScreen/> */}
      <MovieScreen />
        {/* <iframe className="movie__video" width="auto" src={`https://www.youtube.com/embed/co-VZiZNHfU?loop=1&playlist=co-VZiZNHfU&controls=0&autoplay=1&mute=1`} frameBorder="0" allow="autoplay;encrypted-media;" allowFullScreen></iframe> */}


    </div>

  );
}

export default App;
