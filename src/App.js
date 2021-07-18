import React, { useState } from 'react'
import './App.css';
import MovieScreen from './screens/moviescreen/MovieScreen';
import WelcomeScreen from './screens/welcomescreen/WelcomeScreen';
import Detailed from './screens/detailed/Detailed';



function App() {
  const [selectedRow, setSelectedRow] = useState()
  const [muteState, setMuteAudio] = useState(1);
  const [selectedComponent, setSelectedComponent] = useState();
  const changeMuteState = (status) => { setMuteAudio(status) }
  const changeSelectedComponent = (id) => { setSelectedComponent(id) }

  const changeSelectedRow = (row) => setSelectedRow(row)
  const changeScreen = (screen) => setActiveScreen(screen)
  const [activeScreen, setActiveScreen] = useState('welcome')
  return (

    <div className="app">

      {activeScreen === 'welcome' && <WelcomeScreen changeScreen={changeScreen} />}

      {activeScreen === 'main' && <MovieScreen mediaType="movie" originalLanguage="hi" changeScreen={changeScreen} selectedRow={selectedRow}
        muteState={muteState} selectedComponent={selectedComponent} changeMuteState={changeMuteState} changeSelectedComponent={changeSelectedComponent} changeSelectedRow={changeSelectedRow} />}
      {activeScreen === 'detail' && <Detailed changeScreen={changeScreen} movieId={selectedComponent} mediaType="movie" />}



    </div>

  );
}

export default App;
