import React from 'react'

import { AppWrap } from '../../wrapper';
import {motion } from 'framer-motion';
import {images } from '../../constants';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale:[0,1],
    opacity:[0,1],
    transition: {
      duration:1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id="home" className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100, 0], opacity:[0,1]}}
      transition={{duration:2}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👍</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Thejaswi</h1>
            </div>


            {/*list of what I do*/}
          
            
          </div>
          <div className="tag-cmp app__flex">
              <p className='p-text'>Computer Science Undergrad - PES University</p>

            </div>
        </div>
      </motion.div>

      <motion.div
      whileInView={{opacity:[0,1]}}
      transition={{duration:1, delayChildren: 1}}
      className='app__header-img'
      >
        <img src = {images.thejaswi} alt="thejaswi" width="300" height="300"/>
        <motion.img
         whileInView={{scale:[0,1]}}
         transition={{duration:2, ease: 'easeInOut'}}
         className='overlay_circle'
         src={images.circle}
         alt="profile_circle"
         >
          

        </motion.img>
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >

        {[images.flutter, images.redux, images.sass].map((circle,index)=>(
          <div className='circle-cmp app__flex' key={`circle-$(index)`}>
            <img src={circle} alt="circle"/>
          </div>
        ))}
        
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home');