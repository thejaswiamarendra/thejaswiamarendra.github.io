import React from 'react';

import { MotionWrap } from '../../wrapper';

import './Contact.css';

const Contact = () => {
    return (
        
        <div id='Contact' className='contact'>
            {/* <div className='wip'>
                    <h1 className='wiph'>UNDER CONSTRUCTION</h1>
                </div> */}
            <div id="container">
            
            <form action="#" method="post" id="contact_form">
                <div class="name">
                <label for="name"></label>
                <input type="text" placeholder="Name" name="name" id="name_input" required></input>
                </div>
                <div class="email">
                <label for="email"></label>
                <input type="email" placeholder="e-mail" name="email" id="email_input" required></input>
                </div>
                <div class="subject">
                    <label for="subject"></label>
                <input type="text" placeholder="Subject" name="name" id="name_input" required></input>
                </div>
                <div class="message">
                <label for="message"></label>
                <textarea name="message" placeholder="Message" id="message_input" cols="30" rows="5" required></textarea>
                </div>
                <div class="submit">
                <input type="submit" value="Send Message" id="form_button" />
                </div>
            </form>
            </div>
        </div>
    )
}

export default MotionWrap(Contact)