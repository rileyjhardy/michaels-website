import React from 'react';
import ReactPlayer from 'react-player';
import {Fade} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close'
import { clearAllBodyScrollLocks } from 'body-scroll-lock';



class Jacque extends React.Component {

    componentWillUnmount(){
        clearAllBodyScrollLocks();
    }

    render(){

        var rendered = this.props.render;
        return (
            <Fade in = {rendered} timeout = {500} unmountOnExit>
            <div className = "work-player" id = 'jacque'>
                <ReactPlayer url = "https://vimeo.com/263256889" className = "work-player-vid" width = "100%" height = "100%" playing controls />
                <div className = "close-menu-black" onClick={this.props.close}>
                <CloseIcon />
                </div>
                <div className = "work-player-content">
                    <p>TYSON // JACQUE</p>
                    <p>Short Documentary for Tyson Foods - Directed, Shot, & Edited by Michael Kelley</p>
                </div>

            </div>
            </Fade>
        )
    }
}

export default Jacque;