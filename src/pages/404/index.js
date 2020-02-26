import React from 'react';
import NotFoundSVG from '../../assets/404.svg'
import './styles.scss'
const NotFoundPage = () => {
    return (
        <div className="not-fount-page">
            <img src={NotFoundSVG} alt="NotFound" className="center-img"/>
            <h1 className="err-message">Not Found</h1>
        </div>
    )
}

export default NotFoundPage;