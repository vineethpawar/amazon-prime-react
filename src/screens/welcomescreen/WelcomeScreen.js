import React from 'react'
import './WelcomeScreen.css'
import firebase from 'firebase'
import WelcomeComponent from './../../components/welcomecomponent/WelcomeComponent';
import Footer from '../../components/footer/Footer';
import { db } from '../../firebase'
import { toast, ToastContainer } from 'react-toastify'
function WelcomeScreen({ changeScreen, updateUser }) {

    const signin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */

                var user = result.user;

                db.collection('users').doc(user.uid).get()
                    .then((res) => {
                        if (res.exists) {
                            // updateAuth(true);
                            console.log('signd in')
                        }
                        else {
                            // updateLoader(true);
                            console.log('not signd in')

                            toast.dark('Setting up your account', {
                                position: "top-left",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: false,
                                progress: undefined,
                                paymentExpiry: `${new Date()}`
                            });

                            let payVal = `${new Date()}`
                            db.collection('users').doc(user.uid).set({

                                uid: user.uid,
                                uname: user.displayName,
                                umail: user.email,
                                dp: user.photoURL,
                                watchlist: [],
                                blocklist: [],
                                paymentValidity: payVal

                            }, { merge: true })
                                .then(() => {
                                    updateUser();
                                });

                        }
                    })

            })
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <div className="welcome__screen">
            <WelcomeComponent changeScreen={changeScreen} signin={signin} />
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default WelcomeScreen
