import React, { useEffect } from 'react';
import {Slide} from "@material-ui/core";
import ReactPlayer from 'react-player/vimeo';

import CloseIcon from '@material-ui/icons/Close'
import { enableBodyScroll , disableBodyScroll} from 'body-scroll-lock';


const FullReel = ({ renderstate , setrenderstate }) => {
    
    var targetElement = document.querySelector('#fullreel');
    
        return(  
            <Slide in = {renderstate.playFullReel} timeout={500} mountOnEnter unmountOnExit onExited = {() => enableBodyScroll(targetElement)} onEnter = {() => disableBodyScroll(targetElement)}>           
                <div className = "full-reel" id = '#fullreel'>
                <ReactPlayer url="https://vimeo.com/301566893" width = "896px" height = "504px" controls />                        
                <CloseIcon onClick = {() => setrenderstate(Object.assign({}, renderstate, {playFullReel: false}))} className = "close-menu-black" />
                </div>
            </Slide>
                
            
        );
        
};

export default FullReel;