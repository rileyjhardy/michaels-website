
import React, { useEffect, useState } from 'react';
import Reel from './reel';
import FullReel from './fullreel';
import About from './about';
import Contact from './contact';
import Work from './work';
import IsolatedPlayer from './IsolatedPlayer';
import Quote from './quote';
import Gear from './gear';
import {Slide} from '@material-ui/core'
import {HashLink as Link} from 'react-router-hash-link';
import {
    BrowserRouter as Router
}   from "react-router-dom";

import './App.scss';

const Main = () => {

    const [ renderState , setRenderState ] = useState({ 
        fontLoaded: false, 
        reelPlaying: false,      
        displayGear: false,
        displayContact: false,
        playFullReel: false,    
        displayNav: false,        
        hover: '',
    });
    
    const [ playerData , setPlayerData ] = useState({
        url: {
            friends: "https://vimeo.com/339679804",
            minga: "https://vimeo.com/283152904",
            paperweight: "https://vimeo.com/262309280",
            mothermoon: "https://vimeo.com/263257237",
            jacque: "https://vimeo.com/263256889",
            vinh: "https://vimeo.com/263257106",
        },        
        currentURL: '',
        currentData: null,
    });

    return (
        <Router>                
            <div className='main'>            
                <Reel renderstate = {renderState} setrenderstate = {setRenderState} />                
                <FullReel renderstate={renderState} setrenderstate = {setRenderState} />                           
                <Quote />
                <div data-aos = "zoom-in" className = "line-break"></div>
                <Work  setplayerdata = {setPlayerData} />
                <div data-aos = "zoom-in" className = "line-break"></div>
               
                {playerData.currentData !== null ? <IsolatedPlayer renderstate = {renderState} data = {playerData} setplayerdata = {setPlayerData} /> : null}
        
                <About />
                
                <div data-aos = "zoom-in" onClick = {() => setRenderState(Object.assign({}, renderState, {displayContact: true}))} >
                    <div className = "contact-us">contact</div>
                </div>
                <Link smooth to="#reelid" className = "up-arrow">
                    <div data-aos = "zoom-in" data-aos-anchor-placement = "bottom-bottom">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/></svg>
                    </div>
                </Link>                
                
                {renderState.displayGear ? <Gear setrenderstate = {setRenderState} renderstate = {renderState} /> : null}

                {renderState.displayContact ? <Contact renderstate = {renderState} setrenderstate = {setRenderState} /> : null}        
            </div>                
        </Router>
        )
    };


export default Main;