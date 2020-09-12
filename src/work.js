import React from 'react';
import ReactPlayer from 'react-player'

class Work extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            hooplah: false,
        }

        this.friendRef = React.createRef();
        this.minga = React.createRef();
        this.paperweight = React.createRef();
        this.mothermoon = React.createRef();
        this.jacque = React.createRef();
        this.vinh = React.createRef();
        }

    componentDidUpdate(){
    
        this.friendRef.current.showPreview();
        this.minga.current.showPreview();
        this.paperweight.current.showPreview();
        this.mothermoon.current.showPreview();
        this.jacque.current.showPreview();
        this.vinh.current.showPreview();        
    }
    
    render(){

        var x = ((window.screen.width < 1200)? "384px" : "640px");
        var y = ((window.screen.width < 1200)? "216px": "360px");

        return(
            <div className="work-container" id="workid">
                
            <div className = "work">
                <div className="work-slots"height = {y} width = {x} data-aos = "fade-up" data-aos-duration="500">
                    <ReactPlayer url = "https://vimeo.com/339679804" ref = {this.friendRef} id={0} onReady = {this.props.friends} light height = {y} width = {x} className="work-thumbnail" />
                    <p className = "hover-text">My Friends</p>
                </div>
                
                
                <div className="work-slots" height = {y} width = {x} data-aos = "fade-up" data-aos-delay="100">
                    <p className = "hover-text">Minga // Sustainable Equality for All</p>
                    <ReactPlayer url="https://vimeo.com/283152904" ref={this.minga} id = {1} onReady = {this.props.minga} light height = {y} width = {x} className="work-thumbnail" />  
                </div>

                <div className="work-slots"height = {y} width = {x} data-aos = "fade-up" >
                    <ReactPlayer url="https://vimeo.com/262309280" ref = {this.paperweight} id = {2} onReady = {this.props.paperweight} light height = {y} width = {x} className="work-thumbnail" />
                    <p className = "hover-text">Paperweight // Fate</p>
                </div>

                <div className="work-slots" height = {y} width = {x} data-aos = "fade-up" data-aos-delay="100">
                    <ReactPlayer url="https://vimeo.com/263257237" ref = {this.mothermoon} id = {3} onReady = {this.props.mothermoon} light height = {y} width = {x} className="work-thumbnail" />
                    <p className = "hover-text">Mothermoon // Cabg</p>
                </div>

                <div className="work-slots" height = {y} width = {x} data-aos = "fade-up">
                    <ReactPlayer url="https://vimeo.com/263256889" ref = {this.jacque} id = {4} onReady = {this.props.jacque} light height = {y} width = {x} className="work-thumbnail" />
                    <p className = "hover-text">Tyson // Jacque</p>
                </div>

                <div className="work-slots"height = {y} width = {x} data-aos = "fade-up" data-aos-delay="100">
                    <ReactPlayer url="https://vimeo.com/263257106" ref = {this.vinh} id = {5} onReady = {this.props.vinh} light height = {y} width = {x} className="work-thumbnail" />
                    <p className = "hover-text">Tyson // Vinh</p>
                </div>
                
                </div>
                
            </div>
        )
    }
};

export default Work;