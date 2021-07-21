import React, { useState, useEffect } from 'react'
import './App.css';
import { db } from './firebase'
import MovieScreen from './screens/moviescreen/MovieScreen';
import WelcomeScreen from './screens/welcomescreen/WelcomeScreen';
import Detailed from './screens/detailed/Detailed';
import Navbar from './components/navbar/Navbar';
import VideoScreen from './screens/videoscreen/VideoScreen';
import firebase from 'firebase'




function App() {

  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {

        // db.collection('users').doc(user.uid).get()
        //   .then((res) => {

        //     if (res.exists) {
        //       console.log('Signed In')
        //     }
        //   })


        console.log('Signed In')



      } else {

        console.log('Not Signed In')

      }
    })


  }, [])

  const [selectedRow, setSelectedRow] = useState()
  const changeSelectedRow = (row) => setSelectedRow(row)

  const [muteState, setMuteAudio] = useState(1);
  const changeMuteState = (status) => setMuteAudio(status)

  const [selectedComponent, setSelectedComponent] = useState();
  const changeSelectedComponent = (id) => { setSelectedComponent(id) }

  const [activeScreen, setActiveScreen] = useState('welcome')
  const changeScreen = (screen) => setActiveScreen(screen)

  const [originalLanguage, setOriginalLanguage] = useState('en')
  const changeLanguage = (lan) => { setOriginalLanguage(lan); changeUpdateScreen(); }

  const [videoPlayerScreen, setVideoPlayerScreen] = useState(false)
  const changeVideoScreen = (status) => setVideoPlayerScreen(status)

  const [mediaType, setMediaType] = useState('movie')
  const changeMediaType = (type) => { setMediaType(type); }

  const [updateScreen, setUpdateScreen] = useState(0)
  const changeUpdateScreen = () => { setUpdateScreen(updateScreen + 1) }
  return (<>
    {videoPlayerScreen ?
      <VideoScreen />
      :
      <div className="app">
        <Navbar activeScreen={activeScreen} changeScreen={changeScreen} changeMediaType={changeMediaType} changeLanguage={changeLanguage} changeUpdateScreen={changeUpdateScreen} />

        {activeScreen === 'welcome' && <WelcomeScreen changeScreen={changeScreen} />}

        {activeScreen === 'main' && mediaType === "movie" && <MovieScreen
          updateScreen={updateScreen}
          mediaType={mediaType}
          originalLanguage={originalLanguage}
          changeScreen={changeScreen}
          selectedRow={selectedRow}
          muteState={muteState}
          selectedComponent={selectedComponent}
          changeMuteState={changeMuteState}
          changeSelectedComponent={changeSelectedComponent}
          changeSelectedRow={changeSelectedRow}
        />}

        {activeScreen === 'main' && mediaType === "tv" && <MovieScreen
          updateScreen={updateScreen}
          mediaType={mediaType}
          originalLanguage={originalLanguage}
          changeScreen={changeScreen}
          selectedRow={selectedRow}
          muteState={muteState}
          selectedComponent={selectedComponent}
          changeMuteState={changeMuteState}
          changeSelectedComponent={changeSelectedComponent}
          changeSelectedRow={changeSelectedRow}
        />}


        {activeScreen === 'detail' && <Detailed
          mediaType={mediaType}
          changeScreen={changeScreen}
          selectedRow={selectedRow}
          muteState={muteState}
          selectedComponent={selectedComponent}
          changeMuteState={changeMuteState}
          changeSelectedComponent={changeSelectedComponent}
          changeSelectedRow={changeSelectedRow}
          movieId={selectedComponent}
        />}



      </div>
    }
  </>
  );
}

export default App;