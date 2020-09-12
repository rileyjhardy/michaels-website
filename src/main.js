import React from 'react';
import Reel from './reel';
import FullReel from './fullreel';
import About from './about';
import Contact from './contact';
import Work from './work';
import Friends from './otherwork/friends';
import Minga from './otherwork/minga';
import Paperweight from './otherwork/paperweight';
import Mothermoon from './otherwork/mothermoon';
import Jacque from './otherwork/jacque';
import Vinh from './otherwork/vinh';
import Quote from './quote';

import {HashLink as Link} from 'react-router-hash-link';

import {
    BrowserRouter as Router
}   from "react-router-dom";

import './App.scss';

class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            
            landingReelPlaying: true,
            displayContact: false,
            lockScroll: false,
            playFullReel: false,
            renderFriend: false,
            renderMinga: false,
            renderPaperweight: false,
            renderMothermoon: false,
            renderJacque: false,
            renderVinh: false,            
        }
        
        this.toggleFullReel = this.toggleFullReel.bind(this);
        this.playFriends = this.playFriends.bind(this);
        this.playMinga  = this.playMinga.bind(this);
        this.playPaperweight = this.playPaperweight.bind(this);
        this.playMothermoon = this.playMothermoon.bind(this);
        this.playJacque = this.playJacque.bind(this);
        this.playVinh = this.playVinh.bind(this);
        this.closeWorkPlayer = this.closeWorkPlayer.bind(this);
        this.toggleScroll = this.toggleScroll.bind(this);
        this.toggleContact = this.toggleContact.bind(this);
    }

    toggleContact(){

        var toggle = (this.state.displayContact)? false : true;

        this.setState({
            displayContact: toggle,
        })
    }

    toggleScroll(){

        var locked = (this.state.lockScroll)? false : true;

        this.setState({
            lockScroll: locked
        })
    }

    toggleFullReel(){

        let toggle = ((this.state.playFullReel === false)? true : false)

        this.setState({
                playFullReel: toggle
        });
    }

    closeWorkPlayer(){
        this.setState({
            renderFriend: false,
            renderMinga: false,
            renderPaperweight: false,
            renderMothermoon: false,
            renderJacque: false,
            renderVinh: false,
            landingReelPlaying: true,
        })
    }

    playFriends(){
        this.setState({
            renderFriend: true,
        })
        
        
    }

    playMinga(){
        this.setState({
            renderMinga: true,
        })
        
    }

    playPaperweight(){
        this.setState({
            renderPaperweight: true,
        })
       
    }

    playMothermoon(){
        this.setState({
            renderMothermoon: true,
        })
        
    }
    
    playJacque(){
        this.setState({
            renderJacque: true,
        })
        
    }

    playVinh(){
        this.setState({
            renderVinh: true,
        })
        
        
    }

    render(){

    return (
        <Router>
                
        <div className='main'>
        
                <Reel scrolling = {this.toggleScroll} constant = {this.state.landingReelPlaying} opennav = {this.toggleNav} navstate = {this.state.displayNav} toggleplay={this.toggleFullReel}/>
                <FullReel playstate={this.state.playFullReel} toggleplay={this.toggleFullReel} />
            
                <Quote />
                <div data-aos = "zoom-in" className = "line-break"></div>
                <Work  friends = {this.playFriends} minga = {this.playMinga} paperweight = {this.playPaperweight} mothermoon = {this.playMothermoon} jacque = {this.playJacque} vinh = {this.playVinh} />
                <div data-aos = "zoom-in" className = "line-break"></div>
                <Friends render = {this.state.renderFriend} close = {this.closeWorkPlayer} />
                <Minga render = {this.state.renderMinga} close = {this.closeWorkPlayer} />
                <Paperweight render = {this.state.renderPaperweight} close = {this.closeWorkPlayer} />
                <Mothermoon render = {this.state.renderMothermoon} close = {this.closeWorkPlayer} />
                <Jacque render = {this.state.renderJacque} close = {this.closeWorkPlayer} />
                <Vinh render = {this.state.renderVinh} close = {this.closeWorkPlayer} />

                <About />
                
                <div data-aos = "fade-up">
                    <div className = "contact-us"  onClick = {this.toggleContact}>contact</div>
                </div>
                <Link smooth to="#reelid" className = "up-arrow">
                <div data-aos = "zoom-in" data-aos-anchor-placement = "bottom-bottom">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/></svg>
                </div>
                </Link>
                <Contact displaystate = {this.state.displayContact} toggle = {this.toggleContact} />           
        </div>
                
            </Router>
        )
    };
};

export default Main;