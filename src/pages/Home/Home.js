import React from 'react';
import {motion } from 'framer-motion';

import { MotionWrap } from '../../wrapper';

import images from '../../constants/images'
import './Home.css'


const Home = () => {

    return (
        <div id='Home' className='home'>
            
            <motion.div
            whileInView={{x:[-100, 40], opacity:[0,1]}}
            transition={{type: "spring", duration:2}}
            className='name__header-info'
            >
                <div className='home-badge'>

                    <br></br>
                    <br></br>


                    <div className='badge-cmp'>
                        <h1 className='h-text'>Thejaswi Amarendra</h1>
                    </div>
                    <br></br>
                    <div className='badge-cmp'>
                        <h3 className="h3-text">Software Engineer</h3>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default MotionWrap(Home)