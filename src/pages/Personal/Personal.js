import React from 'react';

import { motion } from "framer-motion";

import './Personal.css';

const Personal = () => {
    return (
        
        <div className='contact'>
            {/* <div className='wip'>
                    <h1 className='wiph'>UNDER CONSTRUCTION</h1>
                </div> */}
            <motion.div
                className="contact-content-wrapper"
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
            >
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
            </motion.div>
        </div>
    )
}

export default Personal;