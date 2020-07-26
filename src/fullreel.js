import React from 'react';
import {Slide} from "@material-ui/core";
import ReactPlayer from 'react-player/vimeo';

import CloseIcon from '@material-ui/icons/Close'

class FullReel extends React.Component {

    render(){
    
        return(
            
                <Slide in={this.props.playstate} timeout={500} unmountOnExit>
                    <div className = "full-reel">
                        <ReactPlayer url="https://vimeo.com/301566893" width = "896px" height = "504px" controls />
                        
                        <CloseIcon onClick = {this.props.toggleplay} className = "close-menu-black" />
                    </div>
                </Slide>
            
        );
        }
};

export default FullReel;