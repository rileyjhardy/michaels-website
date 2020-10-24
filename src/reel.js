import React, { useEffect, useState } from 'react';
import Nav from './nav';
import reelvideo from './media/reelvideo.mp4';
import {Cross as Hamburger} from 'hamburger-react';
import {HashLink as Link} from 'react-router-hash-link';
import './App.scss';

const Reel = ({ renderstate , setrenderstate }) => {  

    var toggler = (renderstate.displayNav)? false : true;

    const [ loadedVideo , setLoadedVideo ] = useState('');

    useEffect(() => {
      setTimeout(() =>  setLoadedVideo(reelvideo), 500)
    },[])

    return (   
    
        <div className = "reel" id="reelid">

          <div className = "hamburger" onClick = {() => setrenderstate(Object.assign({}, renderstate, {displayNav: toggler, reelPlaying: !toggler }))} onMouseOver = {() => setrenderstate(Object.assign({}, renderstate, {hover: 'lg'}))} onMouseOut = {() => setrenderstate(Object.assign({}, renderstate, {hover: 'md'}))}>
          
          <Hamburger rounded distance = {renderstate.hover} toggled = {renderstate.displayNav}   />
          </div>
          
            <h1 className = "title" style = {{ display: renderstate.reelPlaying ? 'initial' : 'none' }}>MICHAEL KELLEY <span className = 'lifted-line'> |</span> <i>filmmaker</i></h1>    
            
          <video autoPlay muted loop playsInline onPlay = {() => setrenderstate(Object.assign({},renderstate, {reelPlaying: true}))} className = "fullscreen-video" src = {loadedVideo}  />
          <Nav renderstate = {renderstate}  setrenderState = {setrenderstate} />

           
          {(renderstate.reelPlaying)? <Link smooth to="#workid" className = "down-arrow"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg></Link> : null}
                  
        
          {(renderstate.reelPlaying)? <div className = "play-button" onClick = {() => setrenderstate(Object.assign({}, renderstate, {playFullReel: true}))}><svg version="1.1" id="Layer_1" width="40" height="68.40690978886755" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 52 60"><path fill="white" d="M0,0v60l52-30L0,0z M3,5.2L46,30L3,54.8V5.2z"></path><path fill="white" className="play-button-effect" d="M0,0v60l52-30L0,0z"></path></svg></div> : null}

        </div>    
  );
  }

export default Reel;
