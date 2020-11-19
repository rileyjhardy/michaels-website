import React, { useEffect, useState } from 'react';
import { Fade } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faImdb, faInstagram, faLinkedin, faVimeo } from '@fortawesome/free-brands-svg-icons'


const Contact = ({ renderstate , setrenderstate }) => {
    
    const [ exiting , setExiting ] = useState(false)

    useEffect(() => {
        disableBodyScroll(document.querySelector('#contactid'));
    },[])

    useEffect(() => () => {
        enableBodyScroll(document.querySelector('#contactid'))
    },[])

    const delayClose = () => {
        setExiting(true);
        setTimeout(() => setrenderstate(Object.assign({}, renderstate, {displayContact: false})), 500)
    }
    return (        
            <div className = {`contact-whole ${ exiting ? 'fade-out' : 'fade-in'}`}  id = 'contactid' >
                    <div className = "close-menu-black" onClick = {() => delayClose()}>                            
                        <CloseIcon />
                    </div>
                    <div className = "contact">
                        <div className = "action-links">
                            <a href="mailto: michaelkelleyfilm@gmail.com">
                                <div  className="contact-link">email</div>
                            </a>
                            <a href="tel:479-220-2683">
                                <div className = "contact-link">call</div>
                            </a>
                            <div style = {{cursor: 'pointer'}} onClick = {() => setrenderstate(Object.assign({}, renderstate, {displayGear: true}))} >
                                <div className = "contact-link">gear</div>
                            </div>
                            
                        </div>
                        <div className = "icons" id="iconsid" >
                            <a href="https://www.facebook.com/michael.kelley.9028194" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebook} className = 'about-icons' /></a>
                            <a href="https://www.instagram.com/kelley_michael" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className = 'about-icons' /></a>
                            <a href="https://www.linkedin.com/in/michael-kelley-b64b70b7/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className = 'about-icons' /></a>
                            <a href="https://vimeo.com/michaelkelley" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faVimeo}className = 'about-icons' /></a>
                            <a href="https://www.imdb.com/name/nm6512040/?ref_=fn_nm_nm_155" target="_blank" rel="noopener noreferrer"  ><FontAwesomeIcon icon = {faImdb} className = 'about-icons' /></a>
                            
                        </div>
                
            </div>
        </div>
      
     
    )
}

export default Contact;