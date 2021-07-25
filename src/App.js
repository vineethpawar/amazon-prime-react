import React, { useState, useEffect } from 'react'
import './App.css';
import { db } from './firebase'
import MovieScreen from './screens/moviescreen/MovieScreen';
import WelcomeScreen from './screens/welcomescreen/WelcomeScreen';
import Detailed from './screens/detailed/Detailed';
import Navbar from './components/navbar/Navbar';
import VideoScreen from './screens/videoscreen/VideoScreen';
import firebase from 'firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import ChildCareIcon from '@material-ui/icons/ChildCare';

function App() {
 

  const [userDetails, setUserDetails] = useState({
    uname: 'Loading..',
    dp: 'https://www.nicepng.com/png/full/120-1201448_search-radio-icon-png-blue.png',
    wathlist: [],
    blocklist: [],
    umail: '',
    uid: '',
    paymentValidity: ''
  })

  const changeUserDetails = (obj) => setUserDetails(obj)


  const [selectedRow, setSelectedRow] = useState()
  const changeSelectedRow = (row) => setSelectedRow(row)

  const [muteState, setMuteAudio] = useState(1);
  const changeMuteState = (status) => setMuteAudio(status)

  const [selectedComponent, setSelectedComponent] = useState();
  const changeSelectedComponent = (id) => { setSelectedComponent(id) }

  const [activeScreen, setActiveScreen] = useState()
  const changeScreen = (screen) => setActiveScreen(screen)

  const [originalLanguage, setOriginalLanguage] = useState('en')
  const changeLanguage = (lan) => { setOriginalLanguage(lan); changeUpdateScreen(); }

  const [videoPlayerScreen, setVideoPlayerScreen] = useState(false)
  const changeVideoScreen = (status) => setVideoPlayerScreen(status)

  const [mediaType, setMediaType] = useState('movie')
  const changeMediaType = (type) => { setMediaType(type); }

  const [updateScreen, setUpdateScreen] = useState(0)
  const changeUpdateScreen = () => { setUpdateScreen(updateScreen + 1) }

  const [kidMode, setKidmode] = useState(false)
  const changeToKidMode = (status) => setKidmode(status)

  const [userUpdate, setUserUpdate] = useState(0)
  const updateUser = () => setUserUpdate(userUpdate + 1)


  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {

    setScreenWidth(document.body.clientWidth);
    window.addEventListener("resize", (event) => {
      setScreenWidth(document.body.clientWidth);
    })


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {

        db.collection('users').doc(user.uid).get()
          .then((res) => {

            if (res.exists) {
              console.log('user signed in')
            }
          }
          )

        changeScreen('main');
        

      } else {
        changeScreen('welcome');
        console.log('user not signed In')
      }
    })

  }, [])


  return (<>
    {videoPlayerScreen ?
      <VideoScreen />
      :
      <div className="app">
        <Navbar activeScreen={activeScreen} changeScreen={changeScreen} changeMediaType={changeMediaType} changeLanguage={changeLanguage} changeUpdateScreen={changeUpdateScreen} changeToKidMode={changeToKidMode} userUpdate={userUpdate} userDetails={userDetails} changeUserDetails={changeUserDetails} />
        <ToastContainer
          position="top-left"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />

        {activeScreen === 'preloader' && <div className="full__screen">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>}
        {activeScreen === 'welcome' && <WelcomeScreen changeScreen={changeScreen} updateUser={updateUser} />}

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
          kidMode={kidMode}
          userDetails={userDetails}
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
          kidMode={kidMode}
          userDetails={userDetails}
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
          userDetails={userDetails}
        />}

       

      </div>
    }

       {screenWidth < 600 &&
          <div className="mobile__nav">
              <div className="mobile__nav__tabs">
                <span onClick={() => { changeScreen('main'); changeMediaType('movie'); changeToKidMode(false); }}><HomeIcon className="mobile__nav__tab"/> </span>
                <span onClick={() => { changeScreen('main'); changeMediaType('tv'); changeToKidMode(false); }}> <LiveTvIcon className="mobile__nav__tab"/></span>
                <span onClick={() => { changeScreen('main'); changeMediaType('movie'); changeToKidMode(true); }}> <ChildCareIcon className="mobile__nav__tab"/> </span>
              </div>
          </div>
        }
  </>
  );
}

export default App;