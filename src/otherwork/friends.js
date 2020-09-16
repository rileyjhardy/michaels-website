import React from 'react';
import ReactPlayer from 'react-player';
import {Fade} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import {clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Friends = (props) => {

        return (
            <Fade in = {props.render} timeout = {500} unmountOnExit>
            <div className = "work-player" id = "friends">
                <ReactPlayer url = "https://vimeo.com/339679804" className = "work-player-vid" width = "100%" height = "100%" playing controls />
                
                <div className = "work-player-content">
                    <p>My Friends</p>
                    <p>I came back home to Arkansas on a job once and had some time to see my good friends, Noah & Lydiah. These two are meant to be together and there's so much about life that I've learned from them both. New conversations, new perspectives, and growth. Their new home is so beautifully "them" and so I felt inspired to film these two being themselves and record a bit of music to it.</p>
                    <p>"Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one." - C.S. Lewis</p>
                </div>
                <div className = "close-menu-black" onClick={props.close}>
                <CloseIcon />
                </div>
            </div>
            </Fade>
        )
    
};

export default Friends;