import React from 'react';

import { MotionWrap, AppWrap } from '../../wrapper';

import './Work.css';

const Work = () => {

    return (
        <div id='Work' className='work-border'>
            <div className='work'>
                <div className='wip'>
                    <h1 className='wiph'>UNDER CONSTRUCTION</h1>
                </div>
            </div>
        </div>
        
    )
}

export default MotionWrap(Work)
