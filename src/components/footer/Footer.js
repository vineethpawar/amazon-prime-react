import React,{useEffect} from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import './Footer.css'
function Footer() {
    
    useEffect(()=>{
        tippy('.footer__link__blog', {
            duration: 50,
            delay: [0, 0],
            content: 'Blog coming soon : )',
        })
    })
   

    return (
        <div className="footer">
            <img className="prime__logo__big"
                src="https://res.cloudinary.com/dpjkblzgf/image/upload/v1624824154/Prime_Video_Logo_3_dkoung.png" alt="" />
            <div className="footer__links row">
                <span className="footer__link__item col-lg">
                    <a target="__blank" href="https://www.linkedin.com/in/vineethpawar/">
                        <LinkedInIcon className="footer__link__item__img" />
                        /&nbsp;vineethpawar
                    </a>
                </span>

                <span className="footer__link__item col-lg">
                    <a target="__blank" href="https://github.com/vineethpawar/">
                        <GitHubIcon className="footer__link__item__img" />
                       /&nbsp;vineethpawar
                    </a>
                </span>
                <span className="footer__link__item col-lg">
                    <a href="mailto:vineethpawar99@gmail.com">
                        <EmailIcon className="footer__link__item__img" />
                        vineethpawar99@gmail.com
                    </a>
                </span>
                <span className="footer__link__item col-lg footer__link__blog">
                    <a  target="__blank" >
                        <LibraryBooksIcon className="footer__link__item__img" />
                        vineethpawar
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Footer
