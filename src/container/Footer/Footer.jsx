import React from 'react'

import './Footer.scss';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:thejaswia03@gmail.com" className="p-text">thejaswia03@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+916362328540" className="p-text">+916362328540</a>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);