import React from 'react';
import ReactPlayer from 'react-player/vimeo';
import Nav from './nav';

import {Cross as Hamburger} from 'hamburger-react';

import {HashLink as Link} from 'react-router-hash-link';

import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';

import './App.scss';

class Reel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      displayNav: false,
      titleAnimation: "",
      hover: ''
    }

    this.handleAnimation = this.handleAnimation.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.toggleNav = this.toggleNav.bind(this);

  }

  targetElement = null;

  componentDidMount(){
    this.targetElement = document.querySelector('#navid');
}

  toggleNav(){

    var option = (this.state.displayNav)? false : true;

    if (this.state.displayNav === false){

    disableBodyScroll(this.targetElement);
    } else {
      enableBodyScroll(this.targetElement);
    }

    this.setState({
      displayNav: option,
    })

    
  }

  handleAnimation(){
    this.setState({
      titleAnimation: true,
    })

    console.log("test")
  }

  handleHover(){

    var linesize = (this.state.hover === "lg")? "md" : "lg";

      this.setState({
        hover: linesize,
      })
  }

  componentWillUnmount(){
    clearAllBodyScrollLocks();
  }


  render(){

    var x = window.screen.height;
    var y = x * (16/9);

    var show = (this.state.displayNav)? "none" : "initial";
  
  return (
    
    
    
      <div className = "reel" id="reelid">

        <div className = "hamburger" onClick = {this.props.scrolling} onMouseOver = {this.handleHover} onMouseOut = {this.handleHover}>
         
          <Hamburger rounded distance = {this.state.hover} toggled = {this.state.displayNav} toggle = {this.toggleNav} />
        </div>
    {(this.state.titleAnimation)? <h1 className = "title" style = {{display: show}}>MICHAEL KELLEY <span style = {{verticalAlign: ".09em"}}>| </span><i>filmmaker</i></h1> : null}
          <ReactPlayer height = {x} width= {y} onStart = {this.handleAnimation} className = "fullscreen-video" playing = {this.props.constant} muted loop url='https://vimeo.com/301566893' />
          <Nav navstate = {this.state.displayNav} opennav = {this.toggleNav} />
          <Link smooth to="#workid" className = "down-arrow">
          {(this.state.displayNav === false)? <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg> : null}
          </Link>
      
      
          {(this.state.displayNav === false)? <div className = "play-button" onClick = {this.props.toggleplay}><svg version="1.1" id="Layer_1" width="40" height="68.40690978886755" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 52 60"><path fill="white" d="M0,0v60l52-30L0,0z M3,5.2L46,30L3,54.8V5.2z"></path><path fill="white" className="play-button-effect" d="M0,0v60l52-30L0,0z"></path></svg></div> : null}
    



    </div>
    
  );
  }
}

export default Reel;
