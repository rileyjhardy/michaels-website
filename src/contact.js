import React from 'react';
import {Fade} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const Contact = (props) => {
    return (
        <Fade in = {props.displaystate} timeout = {500}>
            <div className = "contact-whole">
            <div className = "close-menu-black" onClick={props.toggle}>
                <CloseIcon />
                </div>
                <div className = "contact-container">
                    <h1 className = "secondary-michael" data-aos = "fade-right">MICHAEL KELLEY</h1>
                    <div className = "vert-divider" data-aos = "zoom-in"></div>
                    <div className = "contact">
                        <div className = "action-links">
                            <a href="mailto: michaelkelleyfilm@gmail.com" data-aos = "flip-up">
                                <div  className="contact-link">email</div>
                            </a>
                            <a href="tel:479-220-2683" data-aos = "flip-up" data-aos-delay="150">
                                <div className = "contact-link">call</div>
                            </a>
                            <a href = "#" data-aos = "flip-up" data-aos-delay="300">
                                <div className = "contact-link">gear</div>
                            </a>
                            <a href = "#" data-aos = "flip-up" data-aos-delay="450">
                                <div className = "contact-link">resume</div>
                            </a>
                        </div>
                        <div className = "icons" id="iconsid">
                            <a  data-aos = "flip-left" data-aos-anchor-placement="bottom-bottom" href="https://www.facebook.com/michael.kelley.9028194" target="_blank" rel="noopener noreferrer" ><i className="fab fa-facebook about-icons"></i></a>
                            <a  data-aos = "flip-left" data-aos-delay = "100" data-aos-anchor-placement="bottom-bottom"href="https://www.instagram.com/kelley_michael" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram about-icons"></i></a>
                            <a  data-aos = "flip-left" data-aos-delay = "200" data-aos-anchor-placement="bottom-bottom"href="https://www.linkedin.com/in/michael-kelley-b64b70b7/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin about-icons"></i></a>
                            <a  data-aos = "flip-left" data-aos-delay = "300" data-aos-anchor-placement="bottom-bottom"href="https://vimeo.com/michaelkelley" target="_blank" rel="noopener noreferrer"><i className="fab fa-vimeo-v about-icons"></i></a>
                            <a  data-aos = "flip-left" data-aos-delay = "400" data-aos-anchor-placement="bottom-bottom"href="https://www.imdb.com/name/nm8066625/?ref_=fn_nm_nm_14" target="_blank" rel="noopener noreferrer"><i class="fab fa-imdb about-icons"></i></a>
                        </div>
                </div>
            </div>
        </div>
     </Fade>
    )
}

export default Contact;