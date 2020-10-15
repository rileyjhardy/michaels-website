import React, { useEffect } from 'react';
import {Fade} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Contact = ({ renderstate , setrenderstate }) => {

   

    return (
        <Fade in = {renderstate.displayContact} timeout = {500} mountOnEnter unmountOnExit>
            <div className = "contact-whole" id = '#contactid'>
                    <div className = "close-menu-black" onClick = {() => setrenderstate(Object.assign({}, renderstate, {displayContact: false}))}>                            
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
                        <div className = "icons" id="iconsid">
                            <a href="https://www.facebook.com/michael.kelley.9028194" target="_blank" rel="noopener noreferrer" ><i className="fab fa-facebook about-icons"></i></a>
                            <a href="https://www.instagram.com/kelley_michael" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram about-icons"></i></a>
                            <a href="https://www.linkedin.com/in/michael-kelley-b64b70b7/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin about-icons"></i></a>
                            <a href="https://vimeo.com/michaelkelley" target="_blank" rel="noopener noreferrer"><i className="fab fa-vimeo-v about-icons"></i></a>
                            <a href="https://www.imdb.com/name/nm6512040/?ref_=fn_nm_nm_155" target="_blank" rel="noopener noreferrer"><i className="fab fa-imdb about-icons"></i></a>
                        </div>
                
            </div>
        </div>
     </Fade>
    )
}

export default Contact;