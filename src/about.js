import React from 'react';
import michael from './images/michael.jpeg';

const About = () => {
    return(
        <div className = "about" id="aboutid">

            <img data-aos = "fade-up" src={michael} alt="Michael Kelley"className = 'michael-img' ></img>

            <div className = "bio-content">
                <p data-aos = "fade-up">Michael Kelley is a Director/Cinematographer working in the commercial and narrative film industry. His works have been showcased for Walmart, Tyson, & others.</p>
                <p data-aos = "fade-up">Along with a myriad of creative commercials & music videos, Michael has worked in several roles on a film set from jobs in camera & lighting to directing, producing, & editing much of his own work. Michael’s unique resume has also lent him a unique perspective of the industry as he carries a desire for healthy relationships, a caring environment, & artistic integrity in pre-production, production, & post-production.</p>
                <p data-aos = "fade-up">Off set you can find Michael watching a movie or reading the latest spiritual author who inspires his inner life.</p>
            </div>
        </div>
    )
};

export default About;