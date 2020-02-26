import React from 'react';
import './styles.scss';
const ContactPage =() =>(
    <div className="contact-page page-container">
        <div className="col-5 address-info">
            <h1>Kigali, Rwanda</h1>
            <h2 className="caption">KG 11 Av, Kimironko</h2>
            <div className="contact-info"><p><span>Email</span>jean.abayo@gmail.com</p></div>
            <div className="contact-info"><p><span>Phone</span>+250789277275</p></div>
        </div>
        <div className="col-5">
            <form className="contact-form">
                    <div className="multiple-input">
                        <div className="simple-input-container">
                            <input name="name" class="simple-input" placeholder="Name" type="text"/>
                        </div>
                        <div className="simple-input-container">
                            <input name="name" class="simple-input" placeholder="Email" type="email"/>
                        </div>
                    </div>
                    <div className="simple-input-container">
                        <input name="name" class="simple-input" placeholder="Subject" type="text"/>
                    </div>
                    <div className="simple-input-container">
                    <textarea cols="40" rows="6" className="simple-input" placeholder="Message"/>
                    </div>
                    <div className="simple-input-container">
                        <input name="name" class="simple-input btn" placeholder="Name" type="button" value="Submit"/>
                    </div>
            </form>
        </div>
    </div>
)

export default ContactPage;