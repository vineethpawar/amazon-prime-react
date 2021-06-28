import React from 'react'
import './WelcomeScreen.css'
import Navbar from './../../components/navbar/Navbar';
import WelcomeComponent from './../../components/welcomecomponent/WelcomeComponent';
function WelcomeScreen() {
    return (
        <div className="welcome__screen">
             <Navbar/>
             <WelcomeComponent/>
        </div>
    )
}

export default WelcomeScreen
