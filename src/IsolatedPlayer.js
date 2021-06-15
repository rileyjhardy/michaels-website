import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import CloseIcon from '@material-ui/icons/Close';


import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

const IsolatedPlayer = ({ renderstate , data , setplayerdata }) => {
    
    const [ exiting, setExiting ] = useState(false);

    useEffect(() => {
        disableBodyScroll(document.querySelector('#player'));
                
    },[])

    useEffect(() => () => {
        enableBodyScroll(document.querySelector('#player'))
    },[])

    const delayClose = () => {
        setExiting(true);
        setTimeout(() => setplayerdata(Object.assign({}, data, {currentData: null})), 500)
    }

    return (

            <div className = {`work-player ${ exiting ? 'fade-out' : 'fade-in'}`} id = 'player'>
                <ReactPlayer url = {data.currentURL} className = "work-player-vid" width = "100%" height = "100%" playing controls playsinline/>
                
                <div className = "work-player-content">
                    {data.currentData}                   
                </div>
                <div className = "close-menu-black" onClick = {() => delayClose()}>
                    <CloseIcon />
                </div>
            </div>
        
    )
}

export default IsolatedPlayer;