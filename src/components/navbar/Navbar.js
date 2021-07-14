import React,{useState,useEffect} from 'react'
import './Navbar.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import { ClickAwayListener } from '@material-ui/core';


function Navbar() {
    const [userOptions,setUserOptions]=useState(false)
    const [activeItem,setActiveItem]=useState('home')
   
    

    return (
        <div className='navbar'>
            <div className="nav__left">
            <img className="prime__logo" 
            src="https://res.cloudinary.com/dpjkblzgf/image/upload/v1624824154/Prime_Video_Logo_3_dkoung.png" alt="" />
                    
                    <div onClick={()=>setActiveItem('home')} className={activeItem==='home'?"nav__heading nav__active":"nav__heading"}>
                            Home
                    </div>

                    <div onClick={()=>setActiveItem('tvshows')} className={activeItem==='tvshows'?"nav__heading nav__active":"nav__heading"}>
                        TV Shows
                    </div>

                    <div onClick={()=>setActiveItem('movies')} className={activeItem==='movies'?"nav__heading nav__active":"nav__heading"}>
                        Movies
                    </div>

                    <div onClick={()=>setActiveItem('kids')} className={activeItem==='kids'?"nav__heading nav__active":"nav__heading"}>
                            Kids
                    </div>

              </div>


                    <ClickAwayListener onClickAway={()=>setUserOptions(false)}>
                    
                                <div className="current__user__wrapper ">
                                        <div className="current__user " onClick={()=>setUserOptions(!userOptions)}>
                                                <AccountCircleIcon className="user__profile__icon"/>
                                                 Vineeth
                                                <ArrowDropDownIcon/>
                                        </div>
                                        {userOptions &&
                                        <div className="current__user__dropdown" >
                                            <div className="current__user__dropdown__options">
                                                <div className="select__user " >
                                                <AccountCircleIcon className="user__profile__icon"/>
                                                    Vineeth pawar R
                                                </div>
                                                <div className="select__user " >
                                                <AccountCircleIcon className="user__profile__icon"/>
                                                    Vineeth
                                                </div>
                                                <div className="select__user " >
                                                <AccountCircleIcon className="user__profile__icon"/>
                                                    Vineeth
                                                </div>
                                                <div className="select__user " >
                                                <AddCircleOutlineTwoToneIcon className="add__profile__icon"/>
                                                    Add new
                                                </div>
                                                <div className="select__user " >
                                                    Manage profiles
                                                </div>
                                                <div className="select__user " >
                                                    Sign in
                                                </div>
                                            </div>   
                                        </div>
                                        }

                                            
                                </div>


                    </ClickAwayListener>

                                


           
        </div>
    )
}

export default Navbar
