import React, { useEffect, useRef} from 'react';
import ReactPlayer from 'react-player';
import CloseIcon from '@material-ui/icons/Close';
import { Fade } from '@material-ui/core';

import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

const IsolatedPlayer = ({ renderstate , data , setplayerdata }) => {
    

    useEffect(() => {
        disableBodyScroll(document.querySelector('#player'));
                
    },[])

    useEffect(() => () => {
        enableBodyScroll(document.querySelector('#player'))
    },[])

    return (

            <div className = {`work-player fade-on-load`} id = 'player'>
                <ReactPlayer url = {data.currentURL} className = "work-player-vid" width = "100%" height = "100%" playing controls playsinline/>
                
                <div className = "work-player-content">
                    {data.currentData}                   
                </div>
                <div className = "close-menu-black" onClick = {() => setplayerdata(Object.assign({}, data, {currentData: null}))}>
                    <CloseIcon />
                </div>
            </div>
        
    )
}

export default IsolatedPlayer;