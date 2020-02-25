import React from 'react';
import {useSpring, animated} from 'react-spring'
import './footer.scss'
const FooterComponent = () => {
    const animation = useSpring({
        from:{width:0,opacity:0},
        to:{opacity: 1, width:window.innerWidth * 0.8},
        config: { mass: 5, tension: 800, friction: 200 },
        trail: 25
    })
    return (
        <animated.div className="footer-component" style={animation}>
            <ul className="link-list progress-bar">
                <li className="list-item progress checked"><a href="#home" >Home</a></li>
                <li className="list-item progress"><a href="#experience" >Experience</a></li>
                <li className="list-item progress"><a href="#skills" >Skills</a></li>
                <li className="list-item progress"><a href="#samples" >Samples</a></li>
                <li className="list-item progress"><a href="#contact" >Contact</a></li>
            </ul>
        </animated.div>
    )
}

export default FooterComponent