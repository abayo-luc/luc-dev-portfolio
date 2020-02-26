import React from 'react';
import './styles.scss'

const AboutPage = () => {
    return(
        <div className="about-page page-container">
           <div className="col-4">
            <h1 className="page-title">Meet Jean Luc Abayo</h1>
                <p className="dev-bio">
                    Hello, I am a ​Software Engineer at Andela Kigali, with more than 3 years of experience building mobile,
                    and web applications. I am passionate about Technology and very interested in new ideas and new ways of thinking.
                    I specialize in ​Node Js/JavaScript ​and have professional experience working with ​React/Vuejs,​ ​React Native, and Flutter​.
                    I also have experience working with Ruby On Rails, SQL database, NoSQL Database, and DevOps. My other interests include Sci-fiction
                    movies & TV shows, swimming, and video games. Below are a few noteworthy experiences in my career so far.
                </p>
           </div>
           <div className="col-6 specialization">
                <h1 className="page-title">My specialization</h1>
                <div className="item">
                    <h2>Web Development</h2>
                    <p>
                        Working with client and community, we deliver
                        masterplans that create vibrant new places and spaces,
                        attract people, and encourage investment through.
                    </p>
                </div>
                <div className="item">
                    <h2>Mobile Application</h2>
                    <p>
                        Working with client and community, we deliver
                        masterplans that create vibrant new places and spaces,
                        attract people, and encourage investment through.
                    </p>
                </div>
                <div className="item">
                    <h2>DevOps</h2>
                    <p>
                        Working with client and community, we deliver
                        masterplans that create vibrant new places and spaces,
                        attract people, and encourage investment through.
                    </p>
                </div>
           </div>
        </div>
    )
}

export default AboutPage;