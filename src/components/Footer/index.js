import React, {useState, useEffect} from 'react';
import {useSpring, animated} from 'react-spring'
import './footer.scss'
const pages = ['home', 'about',  'skills', 'samples', 'contact']
const FooterComponent = () => {
    const [visited, set] = useState(0)
    const animation = useSpring({
        from:{width:0,opacity:0},
        to:{opacity: 1, width:window.innerWidth * 0.9 },
        config: { mass: 5, tension: 800, friction: 200 },
        trail: 25
    })
    const updateVisitedPage = () => {
        const hash= window.location.hash.split('')
        hash.shift()
        const index = pages.indexOf(hash.join(''))
        set(index)
    }
    useEffect(() =>{
        updateVisitedPage()
        window.addEventListener('hashchange', updateVisitedPage)
        return() =>{
            window.addEventListener('hashchange', updateVisitedPage, )
        }
    }, [])
    return (
        <animated.div className="footer-component" style={animation}>
            <ul className="link-list progress-bar">
               {pages.map((item, index) => (
                    <li className={`list-item progress ${visited >= index ? 'checked': null}`} key={Number(index)}>
                        <a href={`#${item}`} >{item}</a>
                    </li>
               ))}
            </ul>
        </animated.div>
    )
}

export default FooterComponent