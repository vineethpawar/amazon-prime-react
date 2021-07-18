import React from 'react'
import './WelcomeScreen.css'
import Navbar from './../../components/navbar/Navbar';
import WelcomeComponent from './../../components/welcomecomponent/WelcomeComponent';
import Footer from '../../components/footer/Footer';
function WelcomeScreen({ changeScreen }) {
    return (
        <div className="welcome__screen">
            <Navbar />
            <WelcomeComponent changeScreen={changeScreen} />
            <Footer />
        </div>
    )
}

export default WelcomeScreen
