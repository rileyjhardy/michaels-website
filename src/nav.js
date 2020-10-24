import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

import {Slide, Fade} from '@material-ui/core';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faImdb, faInstagram, faLinkedin, faVimeo } from '@fortawesome/free-brands-svg-icons';

const Nav = ({ renderstate , setrenderState }) => {    
    
    return (
        <Slide in= {renderstate.displayNav}  direction="down" mountOnEnter unmountOnExit onEnter = {() => disableBodyScroll(document.querySelector('#navid'))} onExited = {() => enableBodyScroll(document.querySelector('#navid'))}>
            <div className = "nav" id = 'navid'>                
                <Fade in = {true} timeout = {750} style={{transitionDelay: "300ms"}} className = "nav-link">
                    <div>
                        <Link smooth to="#reelid" style = {{transition: "color .2s"}} onClick = {() => setrenderState(Object.assign({}, renderstate, {displayNav: false}))}>Reel</Link>
                    </div>
                </Fade>
                <Fade in  timeout = {750}style={{transitionDelay: "400ms"}}>
                    <div>
                        <Link smooth to="#workid" style = {{transition: "color .2s"}} onClick = {() => setrenderState(Object.assign({}, renderstate, {displayNav: false}))} className = "nav-link" >Selected Work</Link>
                    </div>
                </Fade>            
                <Fade in  timeout = {750} style={{transitionDelay: "500ms"}}>
                    <div>
                        <Link smooth to="#aboutid" style = {{transition: "color .2s"}} onClick = {() => setrenderState(Object.assign({}, renderstate, {displayNav: false}))} className = "nav-link" >About</Link>
                    </div>
                </Fade>            
                <Fade in timeout = {750} style={{transitionDelay: "600ms"}}>
                    <div className = "icons-nav">
                        <a href="https://www.facebook.com/michael.kelley.9028194" target="_blank" rel="noopener noreferrer" style = {{transition: "color .2s"}} className = "icons-nav-single">
                        <FontAwesomeIcon icon = {faFacebook} /></a>
                        <a href="https://www.instagram.com/kelley_michael" target="_blank" rel="noopener noreferrer" className = "icons-nav-single" style = {{transition: "color .2s"}}><FontAwesomeIcon icon = {faInstagram} /></a>
                        <a href="https://www.linkedin.com/in/michael-kelley-b64b70b7/" target="_blank" rel="noopener noreferrer" className = "icons-nav-single" style = {{transition: "color .2s"}}><FontAwesomeIcon icon = {faLinkedin}  /></a>
                        <a href="https://vimeo.com/michaelkelley" target="_blank" rel="noopener noreferrer" className = "icons-nav-single" style = {{transition: "color .2s"}}><FontAwesomeIcon icon = {faVimeo} /></a>
                        <a  href="https://www.imdb.com/name/nm8066625/?ref_=fn_nm_nm_14" target="_blank" rel="noopener noreferrer" className = "icons-nav-single" style = {{transition: "color .2s"}} ><FontAwesomeIcon icon = {faImdb} /></a>
                    </div>
                </Fade>
            </div>
        </Slide>
    )
    
};

export default Nav;