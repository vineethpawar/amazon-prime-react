import React from 'react'
import './App.css';
import MovieScreen from './screens/moviescreen/MovieScreen';
import WelcomeScreen from './screens/welcomescreen/WelcomeScreen';


function App() {

  return (

   <div className="app">

      {/* <WelcomeScreen/> */}
       <MovieScreen/>
       
   </div>
    
  );
}

export default App;
