import React, { useState } from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import BlockIcon from '@material-ui/icons/Block';
import './MovieComponent.css'

function MovieComponent() {

    const [expandedComponent, setExpandedComponent] = useState(false)

    const cardGrow = (status) => {
        setExpandedComponent(status)
    }

    return (
        <div className="movie__component" onMouseLeave={() => cardGrow(false)} onMouseOver={() => cardGrow(true)}>
            {
                !expandedComponent ?

                    <div className="movie__wrapper__small" >
                        <img className="movie__img" src="https://res.cloudinary.com/dpjkblzgf/image/upload/v1626069107/sushi_twspn7.webp" alt="" />
                    </div>

                    :

                    <div className="movie__wrapper__large">

                        <img className="movie__img" src="https://res.cloudinary.com/dpjkblzgf/image/upload/v1626069107/sushi_twspn7.webp" alt="" />

                        <div className="movie__content">
                            <div className="icon__row">
                                <span className="icons__left">
                                    <span className="play__span">
                                        <PlayArrowIcon className="play__icon" />
                                    </span>
                                </span>

                                <span className="icons__right">
                                    <span className="icn__span">
                                        <AddIcon className="plus__icn" />
                                    </span>

                                    <span className="icn__span">
                                        <BlockIcon className="block__icn" />
                                    </span>
                                </span>
                            </div>

                            <div className="content__row">
                                <h6 className="movie__title">Biswa Kalyan Rath:Sushi</h6>
                                <p className="movie__description">Lor em, ips um dolor sit amet cons ect etur adip isi cing elit. Qu os nes ciunt recus andae seq ui ve lit, excepturi ipsa.
                                </p>
                                <span className="movie__numericals">
                                    <span className="time">{`60min`}</span>
                                    <span className="year">2019</span>
                                    <span className="adultrating">awd</span>
                                </span>

                            </div>
                        </div>
                    </div>


            }







        </div>
    )
}

export default MovieComponent
