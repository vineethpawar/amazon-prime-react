import React, { useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import { ClickAwayListener } from '@material-ui/core';
import FlagTwoToneIcon from '@material-ui/icons/FlagTwoTone';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import './Navbar.css'
function Navbar({ activeScreen, changeScreen, changeMediaType, changeLanguage, changeUpdateScreen }) {
    const [userOptions, setUserOptions] = useState(false)
    const [activeItem, setActiveItem] = useState('home')



    return (
        <div className='navbar'>
            <div className="nav__left">
                <img className="prime__logo"
                    src="https://res.cloudinary.com/dpjkblzgf/image/upload/v1624824154/Prime_Video_Logo_3_dkoung.png" alt="" />
                {activeScreen !== 'welcome' && <>
                    <div onClick={() => { setActiveItem('home'); changeScreen('main'); changeMediaType('movie'); }} className={activeItem === 'home' ? "nav__heading nav__active" : "nav__heading"}>
                        Home
                    </div>

                    <div onClick={() => { setActiveItem('tvshows'); changeScreen('main'); changeMediaType('tv'); }} className={activeItem === 'tvshows' ? "nav__heading nav__active" : "nav__heading"}>
                        TV Shows
                    </div>

                    <div onClick={() => { setActiveItem('movies'); changeScreen('main'); changeMediaType('movie'); }} className={activeItem === 'movies' ? "nav__heading nav__active" : "nav__heading"}>
                        Movies
                    </div>

                    <div onClick={() => { setActiveItem('kids'); changeScreen('main'); changeMediaType('movie'); }} className={activeItem === 'kids' ? "nav__heading nav__active" : "nav__heading"}>
                        Kids
                    </div>
                </>
                }

            </div>

            {activeScreen !== 'welcome' && <>
                <ClickAwayListener onClickAway={() => setUserOptions(false)}>

                    <div className="current__user__wrapper ">

                        <div className="current__user " onClick={() => setUserOptions(!userOptions)}>
                            <AccountCircleIcon className="user__profile__icon" />
                            Vineeth awdawd
                            <ArrowDropDownIcon />
                        </div>
                        {userOptions &&
                            <div className="current__user__dropdown" style={{ minWidth: '250px' }}>
                                <div className="current__user__dropdown__options">
                                    <div className="select__user " >
                                        <AccountCircleIcon className="user__profile__icon" />
                                        Vineeth p
                                    </div>
                                    <div className="select__user " >
                                        <AccountCircleIcon className="user__profile__icon" />
                                        Vineeth
                                    </div>
                                    <div className="select__user " >
                                        <AccountCircleIcon className="user__profile__icon" />
                                        Vineeth
                                    </div>
                                    <div className="select__user " >
                                        <AddCircleOutlineTwoToneIcon className="add__profile__icon" />
                                        Add new
                                    </div>
                                    <div className="select__user " >
                                        Manage profiles
                                    </div>
                                    <div className="select__user movie__regions" >
                                        <span className="movie__region" onClick={() => { changeLanguage('hi') }}>
                                            <FlagTwoToneIcon className="add__profile__icon" />
                                            Country
                                        </span>

                                        <span className="movie__region" onClick={() => { changeLanguage('en') }}>
                                            <PublicTwoToneIcon className="add__profile__icon" />
                                            World
                                        </span>
                                    </div>
                                    <div className="select__user " >
                                        Sign in
                                    </div>
                                </div>
                            </div>
                        }


                    </div>


                </ClickAwayListener>
            </>
            }





        </div>
    )
}

export default Navbar
