import React from 'react';
import ReactPlayer from 'react-player';
import {Fade} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close'
import { clearAllBodyScrollLocks } from 'body-scroll-lock';

class Minga extends React.Component {

    componentWillUnmount(){
        clearAllBodyScrollLocks();
    }

    render(){

        var rendered = this.props.render;

        

        return (
            <Fade in = {rendered} timeout = {500} unmountOnExit>
            <div className = "work-player" id = "minga">
                <ReactPlayer url = "https://vimeo.com/283152904" className = "work-player-vid" width = "100%" height = "100%" playing controls />
                <div className = "close-menu-black" onClick={this.props.close}>
                <CloseIcon classes = {{strokeWidth: ".2px"}} />
                </div>
                <div className = "work-player-content">
                    <p>MINGA // SUSTAINABLE EQUALITY FOR ALL</p>
                    <p>Client Concept Video - Cinematography by Michael Kelley</p>
                    <p>Direction by Molly Devine</p>
                    <p>Editor - Michael Kelley</p>
                </div>

            </div>
            </Fade>
        )
    }
}

export default Minga;