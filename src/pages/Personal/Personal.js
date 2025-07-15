import React from 'react';

import { motion } from "framer-motion";

import './Personal.css';

const Personal = ({ bgImage }) => {
    // In case the bgImage prop is not yet available during an initial render
    if (!bgImage) {
        return  null;
    }
    return (        
        <div className='page-section home-section' style={{ backgroundImage: `url(${bgImage.src})` }}>
            <div className="background-attribution">
                <p>
                <em>{bgImage.title}</em><br />{bgImage.artist}, {bgImage.year}
                </p>
            </div>
            <div className='page-part'>
                <h1 className='h1-heading'>Art</h1>
                <motion.div
                    className="content-wrapper"
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.7 }}
                >
                    <div className='scrollable-content work-column'>
                        <h2 style={{textAlign: 'center'}}>WIP</h2>
                    </div>
                </motion.div>
            </div>
            <div className='page-part'>
                <h1 className='h1-heading'>Writings</h1>
                <motion.div
                    className="content-wrapper"
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.7 }}
                >
                    <div className='scrollable-content work-column'>
                        <h2 style={{textAlign: 'center'}}>WIP</h2>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Personal;