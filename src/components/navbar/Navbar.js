import React, { useState, useEffect } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ClickAwayListener } from '@material-ui/core';
import FlagTwoToneIcon from '@material-ui/icons/FlagTwoTone';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BlockIcon from '@material-ui/icons/Block';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './Navbar.css'
import firebase from 'firebase'
import swal from 'sweetalert'
import { addMonths, format } from 'date-fns'
import { db } from '../../firebase'
import { KEY_ID} from '../../razorpay'



function Navbar({ activeScreen, changeScreen, changeMediaType, changeLanguage, changeToKidMode, userUpdate,userDetails,changeUserDetails }) {
    const [screenWidth, setScreenWidth] = useState(0);
    const checkValidity = (status) => {
        if (new Date() > new Date(userDetails.paymentValidity)) {
            if (status)
                toast.error('Please update plan to watch', {
                    position: "top-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    paymentExpiry: `${new Date()}`
                });

            return false
        }
        return true
    }


    useEffect(() => {

        setScreenWidth(document.body.clientWidth);
        window.addEventListener("resize", (event) => {
          setScreenWidth(document.body.clientWidth);
        })

        
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                db.collection('users').doc(user.uid).get()
                    .then((res) => {
                        if (res.exists) {
                            changeUserDetails({
                                uname: res.data().uname,
                                dp: res.data().dp,
                                umail: res.data().umail,
                                paymentValidity: res.data().paymentValidity,
                                uid: res.data().uid,
                                blocklist: res.data().blocklist,
                                watchlist: res.data().watchlist
                            })
                        }
                    }
                    )
            }
        })
    }, [userUpdate])
    const pay = (order) => {

        let options = {

            "key": KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": "19900", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Prime Video",
            "description": "By Vineeth pawar",
            "image": "data:image/jpeg;base64,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",
            "order_id": order, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response) {
                let currentDate = new Date();
                let planValidity = `${new Date(currentDate.setMonth(currentDate.getMonth() + 1))}`

                db.collection('users').doc(userDetails.uid).set(
                    {
                        paymentValidity: planValidity
                    }, { merge: true }

                )
                changeScreen('main');
                swal({
                    title: "Payment Successful",
                    // text: `Plan valid till ${format(new Date(), 'yyyy-MM-dd')}`,
                    text: `Plan valid till ${format(new Date(planValidity), 'do-MMM-yyyy')}`,
                    icon: "success",
                });
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
            },
            "redirect": false,
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            },
            "modal": {
                "ondismiss": function () {
                    console.log('Checkout form cancelled'); changeScreen('main');
                }
            },
            "prefill": {
                "email": userDetails.umail,

            }
        };


        let rzp1 = new window.Razorpay(options);
        rzp1.open();

    }

    const paymentOrder = () => {
        const orderURL = 'https://razorpay-prime.herokuapp.com/order/monthly'
        fetch(orderURL).then((res) => res.json().then((res) => pay(res.id)))
    }



    const [userOptions, setUserOptions] = useState(false)
    const [activeItem, setActiveItem] = useState('home')



    return (
        <div className='navbar' style={screenWidth>600?{padding:'15px 40px'}:{padding:'15px 20px'}}>

            <div className="nav__left">
                <img className="prime__logo"
                    src="https://res.cloudinary.com/dpjkblzgf/image/upload/v1624824154/Prime_Video_Logo_3_dkoung.png" alt="" onClick={() => changeScreen('main')} />
                {activeScreen !== 'welcome' && screenWidth>600  && activeScreen !== 'preloader' && <>

                    <div onClick={() => { setActiveItem('home'); changeScreen('main'); changeMediaType('movie'); changeToKidMode(false); }} className={activeItem === 'home' ? "nav__heading nav__active" : "nav__heading"}>
                        Movies
                    </div>

                    <div onClick={() => { setActiveItem('tvshows'); changeScreen('main'); changeMediaType('tv'); changeToKidMode(false); }} className={activeItem === 'tvshows' ? "nav__heading nav__active" : "nav__heading"}>
                        TV Shows
                    </div>

                    <div onClick={() => { setActiveItem('kids'); changeScreen('main'); changeMediaType('movie'); changeToKidMode(true); }} className={activeItem === 'kids' ? "nav__heading nav__active" : "nav__heading"}>
                        Kids
                    </div>
                    <ToastContainer
                        position="top-left"
                        autoClose={2500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable={false}
                        pauseOnHover={false}
                    />
                </>
                }

            </div>

            {activeScreen !== 'welcome' && <>
                <ClickAwayListener onClickAway={() => setUserOptions(false)}>

                    <div className="current__user__wrapper ">

                        <div className="current__user " onClick={() => setUserOptions(!userOptions)}>
                            {userDetails &&
                                <>
                                    <img className="user__profile__icon__dp" src={userDetails.dp} />
                                   
                                    {screenWidth>600 && <>
                                       <span> {userDetails.uname}</span> 
                                       <ArrowDropDownIcon /> 
                                        </>
                                     }
                                </>
                            }
                        </div>
                        {userOptions &&
                            <div className="current__user__dropdown shadow__bg" style={{ minWidth: '250px' }}>

                                <div className="current__user__dropdown__options">

                                    {!checkValidity(false) ?
                                        <div className="select__user " onClick={() => {
                                            toast.dark('Generating payment orderID', {
                                                position: "top-left",
                                                autoClose: 3000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: false,
                                                draggable: false,
                                                progress: undefined,
                                            });
                                            changeScreen('preloader');
                                            paymentOrder(); setUserOptions(false);
                                        }}>
                                            <MonetizationOnIcon className="user__profile__icon bg__green" />
                                            Buy membership
                                        </div>
                                        :
                                        <div className="select__user " >
                                            <CheckCircleIcon className="user__profile__icon bg__green" />
                                            Valid till {format(new Date(userDetails.paymentValidity), 'do-MMM-yyyy')}
                                        </div>
                                    }



                                    <div className="select__user " >
                                        <ListIcon className="user__profile__icon " />
                                        Watchlist
                                    </div>
                                    <div className="select__user " >
                                        <BlockIcon className="user__profile__icon bg__red" />
                                        BlockList
                                    </div>

                                    <div className="select__user " >
                                        Region
                                    </div>
                                    <div className="select__user movie__regions" >
                                        <span className="movie__region" onClick={() => { changeLanguage('hi'); setUserOptions(false); }}>
                                            <FlagTwoToneIcon className="add__profile__icon" />
                                            Country
                                        </span>

                                        <span className="movie__region" onClick={() => { changeLanguage('en'); setUserOptions(false); }}>
                                            <PublicTwoToneIcon className="add__profile__icon" />
                                            World
                                        </span>
                                    </div>
                                    <div className="select__user " onClick={() => firebase.auth().signOut().then(() => {
                                        changeScreen('welcome');
                                        toast.dark('Signing Out', {
                                            position: "top-left",
                                            autoClose: 1000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: false,
                                            draggable: false,
                                            progress: undefined,
                                        });
                                        changeUserDetails({
                                            uname: 'Loading..',
                                            dp: 'https://www.nicepng.com/png/full/120-1201448_search-radio-icon-png-blue.png',
                                            wathlist: [],
                                            blocklist: [],
                                        })
                                        setUserOptions(false)

                                    })} >
                                        <ExitToAppIcon className="add__profile__icon bg__red" />
                                        Sign out
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
