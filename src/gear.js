import React, { useEffect, useState } from 'react';
import { Fade } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import croppedgear from './media/croppedgear.jpg'

const Gear = ({ renderstate , setrenderstate }) => {  
    
    const [ imageLoaded , setImageLoaded] = useState(false);
    
    return (

        
            <div className = {`gear smooth-image image-${imageLoaded ? "visible" : "hidden"}`} id = '#gearid'>
               <img className = {imageLoaded ? 'gear-background' : ''} src = {croppedgear} onLoad = {() => setImageLoaded(true)} />
               <div className = {imageLoaded ? 'background-mask' : ""} ></div>
               <div className = {imageLoaded ? 'gear-content' : ''}  >            
               <ul>
                    <li>Blackmagic URSA Mini Pro G2/Viewfinder with Gold Mount</li> 
                    <li>Shape Shoulder Rig/Handles</li> 
                    <li>Smallrig AKS Cheese mounts</li> 
                    <li>Wooden Camera Universal Follow Focus</li> 
                    <li>Bright Tangerine Support Arm</li> 
                    <li>ProGrade Digital 128GB Cards (x4) with Reader</li> 
                    <li>2TB SSD & Mount</li> 
                    <li>Easy Rig 2 (30-46lb.)</li>
                    <li>Sachtler Video 18s2 Head and Sticks</li> 
                    <li>Core 150 Gold Mount Battery (x2)</li>
                    <li>Core 90 Gold Mount Battery (x4)</li>
                    <li>2-Bay Charger</li> 
                    <li>Core Shark Fin</li>
                    <li>D-tap Splitter</li> 
                    <li>Smallrig VCT</li> 
                    <li>Sigma 18-35mm</li>
                    <li>Sigma 50mm-100mm</li>
                    <li>Blackmagic URSA Mini PL Mount</li> 
                    <li>82mm 1/4 Promist</li>
                    <li>Bright Tangerine Misfit Matte Box</li> 
                    <li>Nucleus-M Follow Focus Kit (with Case & Batteries)</li>
                    <li>Small HD 702 w/LP-E6 Batteries & P-Tap</li>
                    <li>Small HD 701 w/handles & Terakdek Mount—Gold Mount Power Distribution</li>  
                    <li>Teradek Wireless Receiver (x2)</li>
                    <li>Teradek Wireless Transmiter</li> 
                    <li>Cables, SDIs, etc</li>
                    <li>Cinebag AC Kit</li>
                    <li>Magliner Cart</li>
                    <li>Super 16mm Film Camera with AKS & Gold Mount adapter for power (x3)</li>
                    <li>Mags & Accessories</li>
                </ul>
                </div>            
                <CloseIcon className = 'close-menu' onClick = {() => setrenderstate(Object.assign({}, renderstate, {displayGear: false}))} / >
             </div>
        
    )
};

export default Gear;