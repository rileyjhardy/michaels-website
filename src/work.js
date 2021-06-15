import React, { useEffect } from 'react';
import ReactPlayer from 'react-player'

const Work = ({ setplayerdata }) => {

    const friendref = React.createRef();
    const mingaref = React.createRef();
    const paperweightref = React.createRef();
    const mothermoonref = React.createRef();
    const stoneref = React.createRef();
    const withref = React.createRef();

    useEffect(() => {
        friendref.current.showPreview();
        mingaref.current.showPreview();
        paperweightref.current.showPreview();
        mothermoonref.current.showPreview();
        stoneref.current.showPreview();
        withref.current.showPreview();
    })

        var x;
        var y;

        if (window.screen.width > 1200 ){
            x = '640px';
            y = '360px';
        } else if (window.screen.width > 350 ){
            x = '384px';
            y = '216px';
        } else {
            x = '256px';
            y = '144px';
        }

        
        const friends = () => {
            return (
                <>
                    <p>My Friends</p>
                    <p>I came back home to Arkansas on a job once and had some time to see my good friends, Noah & Lydiah. These two are meant to be together and there's so much about life that I've learned from them both. New conversations, new perspectives, and growth. Their new home is so beautifully "them" and so I felt inspired to film these two being themselves and record a bit of music to it.</p>
                    <p>"Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one." - C.S. Lewis</p>
                </>
            )
        }
    
        const minga = () => {
            return (
                <>
                    <p>MINGA // SUSTAINABLE EQUALITY FOR ALL</p>
                    <p>Client Concept Video - Cinematography by Michael Kelley</p>
                    <p>Direction by Molly Devine</p>
                    <p>Editor - Michael Kelley</p>
                </>
            )
        }
    
        const paperweight = () => {
            return (
                <>
                    <p>PAPERWEIGHT // FATE</p>
                    <p>Music Video - Direction & Cinematography by Michael Kelley</p>
                    <p>Editor - Michael Kelley</p>
                </>
            )
        }
    
        const mothermoon = () => {
            return (
                <>
                    <p>MOTHER MOON // CABG</p>
                    <p>Music Video - Direction & Cinematography by Michael Kelley</p>
                    <p>Editor - Michael Kelley</p>
                </>
            )
        }
    
        const stone = () => {
            return (
                <>
                    <p>STONE // A SHORT DOCUMENTARY</p> 

                    <p>Documentary about my friend Nathanael Stone, his business, and life.</p> 

                    <p>Direction & Editing - Michael Kelley</p>

                    <p>Cinematography - Justin Howe</p>

                    <p>Producer - Chelsea Burbank</p>
                    
                </>
            )
        }
    
        const withyou = () => {
            return (
                <>
                                      
                    <p>WITH YOU // SHORT FILM</p>

                    <p>Direction, Cinematography, & Editing - Michael Kelley</p>

                    <p>Starting my pastor Scott Johnson and his son.</p>
                </>
            )
        }

        return(
            <div className="work-container" id="workid">                
                <div className = "work">               

                    <div className="work-slots" height = {y} width = {x} data-aos = "fade-up">
                        <ReactPlayer ref = {withref} url="https://vimeo.com/453127563" id = {4} onReady = {() => setplayerdata({currentURL: "https://vimeo.com/453127563", currentData: stone() })} light = "https://i.vimeocdn.com/video/1045113741_640.jpg" height = {y} width = {x} className="work-thumbnail" />
                        <p className = "hover-text">Stone // A Short Documentary</p>
                    </div>

                    <div className="work-slots"height = {y} width = {x} data-aos = "fade-up" data-aos-delay="100">
                        <ReactPlayer ref = {stoneref} url="https://vimeo.com/482496512" id = {5} onReady = {() => setplayerdata({currentURL: "https://vimeo.com/482496512", currentData: withyou() })} light height = {y} width = {x} className="work-thumbnail" />
                        <p className = "hover-text">With You // Short Film</p>
                    </div>

                    <div className="work-slots"height = {y} width = {x} data-aos = "fade-up" data-aos-duration="500">
                        <ReactPlayer ref = {friendref} url = "https://vimeo.com/339679804" id={0} onReady = {() => setplayerdata({currentURL: "https://vimeo.com/339679804", currentData: friends() })} light = "https://i.vimeocdn.com/video/977092504_640.jpg" height = {y} width = {x} className="work-thumbnail" />
                        <p className = "hover-text">My Friends</p>
                    </div>                
                    
                    <div className="work-slots" height = {y} width = {x} data-aos = "fade-up" data-aos-delay="100">
                        <p className = "hover-text">Minga // Sustainable Equality for All</p>
                        <ReactPlayer ref = {mingaref} url="https://vimeo.com/283152904" id = {1} onReady = {() => setplayerdata({currentURL: "https://vimeo.com/283152904", currentData: minga() })} light height = {y} width = {x} className="work-thumbnail" />  
                    </div>

                    <div className="work-slots"height = {y} width = {x} data-aos = "fade-up" >
                        <ReactPlayer ref = {paperweightref} url="https://vimeo.com/262309280" id = {2} onReady = {() => setplayerdata({currentURL: "https://vimeo.com/262309280", currentData: paperweight()})} light height = {y} width = {x} className="work-thumbnail" />
                        <p className = "hover-text">Paperweight // Fate</p>
                    </div>

                    <div className="work-slots" height = {y} width = {x} data-aos = "fade-up" data-aos-delay="100">
                        <ReactPlayer ref = {mothermoonref} url="https://vimeo.com/263257237" id = {3} onReady = {() => setplayerdata({currentURL: "https://vimeo.com/263257237", currentData: mothermoon()})} light height = {y} width = {x} className="work-thumbnail" />
                        <p className = "hover-text">Mothermoon // Cabg</p>
                    </div>                   
                    
                </div>                    
            </div>
        )    
};

export default Work;