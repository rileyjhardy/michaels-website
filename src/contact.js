import React, { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faImdb, faInstagram, faLinkedin, faVimeo } from '@fortawesome/free-brands-svg-icons'
import Sharegrid from './media/ShareGrid_Logo_small.svg';


const Contact = ({ renderstate , setrenderstate }) => {
    
    const [ exiting , setExiting ] = useState(false);
    const [ sharefileHover , setSharefileHover ] = useState(false);

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
                            <a href="mailto:michaelkelleyfilm@gmail.com">
                                <div  className="contact-link">email</div>
                            </a>
                            <a href="tel:479-220-2683">
                                <div className = "contact-link">call</div>
                            </a>
                            {/*<div style = {{cursor: 'pointer'}} onClick = {() => setrenderstate(Object.assign({}, renderstate, {displayGear: true}))} >
                                <div className = "contact-link">gear</div>
    </div>*/}               
                            <a href = "https://www.sharegrid.com/p/michael_kelley?type=rent" target = '_blank' rel = 'noopener noreferrer'>
                                <div className = 'contact-link'>gear</div>
                            </a>
                            
                        </div>
                        <div className = "icons" id="iconsid" >
                            <a href="https://www.facebook.com/michael.kelley.9028194" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebook} className = 'about-icons' /></a>
                            <a href="https://www.instagram.com/kelley_michael" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className = 'about-icons' /></a>
                            <a href="https://www.linkedin.com/in/michael-kelley-b64b70b7/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className = 'about-icons' /></a>
                            <a href="https://vimeo.com/michaelkelley" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faVimeo}className = 'about-icons' /></a>
                            <a href="https://www.imdb.com/name/nm6512040/?ref_=fn_nm_nm_155" target="_blank" rel="noopener noreferrer"  ><FontAwesomeIcon icon = {faImdb} className = 'about-icons' /></a>
                            <a href = "https://www.sharegrid.com/p/michael_kelley?type=rent" target="_blank" rel="noreferrer" >
                                <svg onMouseOver = {() => setSharefileHover(true)} onMouseOut = {() => setSharefileHover(false)} className = 'sharefile' xmlns="http://www.w3.org/2000/svg" version="1.0" width="274.000000pt" height="154.000000pt" viewBox="0 0 274.000000 154.000000" preserveAspectRatio="xMidYMid meet"><g style={{transition: 'all .2s'}} transform="translate(0.000000,154.000000) scale(0.100000,-0.100000)" fill={ sharefileHover ? "#808080" : "#FFFFFF"} stroke="none"><path d="M535 1516 c-371 -121 -588 -479 -521 -856 29 -163 101 -297 221 -415 109 -106 228 -170 378 -202 110 -23 289 -14 392 21 241 82 416 257 495 496 12 37 27 123 34 203 12 119 18 147 45 202 113 229 421 285 609 110 101 -94 146 -218 123 -343 -31 -168 -151 -289 -318 -322 -78 -16 -166 -2 -243 38 l-56 28 -46 -96 c-26 -54 -69 -127 -96 -163 l-50 -66 66 -34 c124 -65 199 -82 357 -82 119 0 151 4 215 23 136 43 226 97 325 197 101 101 152 181 192 300 25 73 27 94 28 235 0 149 -1 158 -31 243 -45 125 -87 190 -190 294 -80 80 -103 97 -195 141 -136 65 -169 72 -347 72 -124 0 -162 -4 -218 -21 -164 -51 -304 -150 -399 -284 -94 -132 -132 -244 -145 -424 -8 -108 -13 -132 -39 -186 -74 -150 -222 -235 -384 -222 -155 13 -286 115 -338 264 -30 84 -23 206 15 286 96 201 336 281 536 179 l55 -27 46 95 c26 52 68 123 93 158 25 34 46 64 46 67 0 11 -99 60 -173 86 -78 27 -91 29 -247 28 -144 0 -174 -3 -235 -23z"/><path d="M723 970 c-43 -10 -99 -53 -120 -93 -22 -43 -21 -122 2 -171 28 -58 94 -96 165 -96 214 0 252 302 45 359 -44 12 -47 12 -92 1z"/><path d="M1905 975 c-5 -2 -22 -6 -37 -9 -64 -14 -127 -102 -128 -179 0 -67 52 -143 113 -166 40 -15 123 -14 155 3 162 85 123 320 -58 349 -19 3 -39 4 -45 2z"/></g>
                                </svg>
                            </a>
                            
                        </div>
                
            </div>
        </div>
      
     
    )
}

export default Contact;