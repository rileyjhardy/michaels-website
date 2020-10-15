import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import CloseIcon from '@material-ui/icons/Close';
import { Fade } from '@material-ui/core';
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const IsolatedPlayer = ({ renderstate , data , setplayerdata }) => {

    

    return (
        <Fade in = {data.currentData != null} timeout = {500} mountOnEnter unmountOnExit>
            <div className = "work-player" id = '#player'>
                <ReactPlayer url = {data.currentURL} className = "work-player-vid" width = "100%" height = "100%" playing controls />
                
                <div className = "work-player-content">
                    {data.currentData}                   
                </div>
                <div className = "close-menu-black" onClick = {() => setplayerdata(Object.assign({}, data, {currentData: null}))}>
                    <CloseIcon />
                </div>
            </div>
        </Fade>
    )
}

export default IsolatedPlayer;