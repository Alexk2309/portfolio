import '../styles/about.css';
import '../styles/index.css';
import HeaderSection from '../effects/scrollEffect';
import TechStack from './teckStack';
import profilePhoto from '../effects/me_and_cat.jpg'

function About() {
    return (
        <div id='about_layout'>
            <HeaderSection>
                <span className='header-label'>/about-me</span>
                <div className='about_content'>
                    <div className='about_description'>
                        <p id='about-paragraph'>
                            I am a currently a student studying a
                            <b> Bachelor's of Computer Science</b>
                            <span> at </span>
                            <a href='https://www.unsw.edu.au/' style={{ color: 'aqua', textDecoration: 'none' }} >UNSW. </a>
                            I develop software and contrubuite to open source projects in free time, while studying full time.
                        </p>
                        <span id='tech-line'>I am familiar with the following technologies: </span>
                        <HeaderSection>
                            <TechStack></TechStack>
                        </HeaderSection>
                        <span id='about_final'>Outside of work I enjoy training, reading and playing with my cat :)</span>
                    </div>
                    <img id='portfolio_photo' src={profilePhoto} alt='Profile'></img>
                </div>
            </HeaderSection>
        </div>
    );
}

export default About;

