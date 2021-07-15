import React from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import InfoIcon from '@material-ui/icons/Info';
import './MovieBanner.css'



function MovieBanner() {
    const bannerImage = 'https://noamkroll.com/wp-content/uploads/2019/02/Why-Amazon-Prime-Could-Be-The-Best-Platform-To-Release-An-Independent-Feature-Film.jpg'

    return (
        <div className="movie__banner ">
            <div className="row row__comp">
                <div className="col_img_banner col-md-7 d-md-none" style={{ backgroundImage: `url(${bannerImage})` }}>
                </div>
                <div className="col_text col-md-5">
                    <div className="d-flex mx-auto">
                        <div className="text__wrapper">
                            <h2>Welcome to Prime Video</h2>
                            <p className="banner__info mb-5">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, obcaecati?  
                            </p>                         
                            <button className="mr-3 btn btn-primary banner__btn"><PlayCircleFilledIcon className="banner__btn__icn" /> Play</button>
                            <button className="btn btn-primary-outline banner__btn"><InfoIcon className="banner__btn__icn" /> Info</button>
                        </div>
                    </div>
                </div>
                <div className="col_img_banner col-md-7 d-none d-md-block" style={{ backgroundImage: `url(${bannerImage})` }}>
                </div>
            </div>

        </div>
    )
}

export default MovieBanner
