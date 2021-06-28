import React,{useState} from 'react'
import './Navbar.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import { ClickAwayListener } from '@material-ui/core';
function Navbar() {
    const [userOptions,setUserOptions]=useState(false)
    return (
        <div className='navbar'>
            <img className="prime__logo" 
            src="https://res.cloudinary.com/dpjkblzgf/image/upload/v1624824154/Prime_Video_Logo_3_dkoung.png" alt="" />
       
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
