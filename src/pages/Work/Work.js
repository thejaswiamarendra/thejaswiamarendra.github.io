import React from 'react';

import { motion } from 'framer-motion';
import './Work.css';
import linkImage from '../../assets/link.png';

const publications = {
    'ROS-Kafka Gateway for Scalable, Remote and Cross-Platform Robotic System Communication': {
        'abstract': 'This paper proposes a method aimed at integrating Robot Operating System (ROS) with Apache Kafka, a distributed event streaming platform, to harness the features of Kafka like scalability, fault tolerance, reliability.',
        'publication_date': '6th November, 2023',
        'conference': '2023 IEEE International Conference on Cloud Computing in Emerging Markets (CCEM)',
        'guide': 'Dr. Prafullatha Auradkar',
        'skills': ['ROS', 'Apache Kafka', 'Distributed Systems', 'Performance Analytics'],
        'link': 'https://ieeexplore.ieee.org/document/10706555'
    },
    'Mitigating the Trade-Off Between Robustness, Optimality and Sample Efficiency in Simulated Legged Locomotion': {
        'abstract': 'This paper aims to minimise the trade-off between two attributes in reinforcement learning in the context of training legged robots in simulation, namely, robustness and sample efficiency.',
        'publication_date': '6th July, 2024',
        'conference': '2024 8th International Conference on Robotics and Automation Sciences (ICRAS)',
        'guide': 'T S Chandar',
        'skills': ['ROS', 'Apache Kafka', 'Distributed Systems', 'Performance Analytics'],
        'link': 'https://ieeexplore.ieee.org/document/10654466'
    }
}

const Work = ({ bgImage }) => {
    // In case the bgImage prop is not yet available during an initial render
    if (!bgImage) {
        return  null;
    }
    return (
        <div className='page-section work-section' style={{ backgroundImage: `url(${bgImage.src})` }}>
            <div className='page-part'>
                <h1 className='h1-heading'>Publications</h1>
                <motion.div
                    className="content-wrapper"
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.7 }}
                >
                    <div className='scrollable-content publication-column'>
                        {Object.entries(publications).map(([publicationName, details]) => (
                            <div className='project-block' key={publicationName}>
                                <h2>
                                    <a href={details.link} target="_blank" rel="noopener noreferrer">
                                        {publicationName} <img src={linkImage} alt="Publication link" className="link-icon" />
                                    </a>
                                    <p className="work-duration">{details.publication_date}</p>
                                </h2>
                                <ul>
                                    <li className="work-item" key={`${publicationName}`}>
                                        <div className="work-header">
                                            <h3 className="work-title">Abstract</h3>
                                        </div>
                                        <p className="work-description">{details.abstract}</p>
                                        <br></br>
                                        <div className='work-header'>
                                            <h3 className="work-title">Skills</h3>
                                        </div>
                                        <p className="work-skills">{details.skills.join(', ')}</p>
                                        <br></br>
                                        
                                        <div className='work-header'>
                                            <h3 className="work-title">Guide</h3>
                                        </div>
                                        <p className="work-skills">{details.guide}</p>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <div className='page-part'>
                <h1 className='h1-heading'>Projects</h1>
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
            <div className="background-attribution">
                <p>
                <em>{bgImage.title}</em><br />{bgImage.artist}, {bgImage.year}
                </p>
            </div>
        </div>
    )
}

export default Work;
