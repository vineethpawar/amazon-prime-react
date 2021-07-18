import React from 'react'
import './WelcomeComponent.css'



function WelcomeComponent({ changeScreen }) {


    return (
        <div className="welcome__component">
            <div className="row row__comp">
                <div className="col_img col-md-7 d-md-none">
                </div>
                <div className="col_text col-md-5">
                    <div className="d-flex mx-auto">
                        <div className="text__wrapper">
                            <h2>Welcome to Prime Video</h2>
                            <h4>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</h4>
                            <button onClick={() => changeScreen('main')} className="btn btn-primary join_prime ">Login to join Prime</button>
                        </div>
                    </div>
                </div>
                <div className="col_img col-md-7 d-none d-md-block">
                </div>
            </div>

            <div className="row row__comp">
                <div className="col_img2 col-md-6">
                </div>

                <div className="col_text col-md-6">
                    <div className="d-flex mx-auto">
                        <div className="text__wrapper">
                            <h2>Great Entertainment</h2>
                            <h4>With your Prime membership, you have access to exclusive Amazon Originals, blockbuster Bollywood movies, regional movies and more.</h4>
                            <button onClick={() => changeScreen('main')} className="join_prime btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row row__comp">
                <div className="col_img3 col-md-7 d-md-none">
                </div>
                <div className=" col_text col-md-5">
                    <div className="d-flex mx-auto">
                        <div className="text__wrapper">
                            <h2>One membership, many benefits</h2>
                            <h4>Your Prime membership now also includes ad-free music along with unlimited free, fast delivery on eligible items, exclusive access to deals and more.</h4>
                            <button onClick={() => changeScreen('main')} className="btn btn-primary join_prime ">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="col_img3 col-md-7 d-none d-md-block">
                </div>
            </div>

        </div>
    )
}

export default WelcomeComponent
