import React from 'react'
import './WelcomeScreen.css'

import WelcomeComponent from './../../components/welcomecomponent/WelcomeComponent';
import Footer from '../../components/footer/Footer';
function WelcomeScreen({ changeScreen }) {
    return (
        <div className="welcome__screen">
            <WelcomeComponent changeScreen={changeScreen} />
            <Footer />
        </div>
    )
}

export default WelcomeScreen
