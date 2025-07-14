import React from 'react';
import {motion } from 'framer-motion';

import graduationImage from '../../assets/graduation.png'
import './Home.css'

const companies = {
    "Arista Networks": [
        {
            'title': 'Software Engineer - Professional Services',
            'desc': 'Designed and developed resilient solutions to complex requirements in a quick delivery focused client facing team. As part of a customer migration effort, involved in the development of an end to end automated network migration tool enabling smooth transition to Arista network switches and devices.',
            'duration': 'May 2025 - Present',
            'skills': ['REST APIs', 'FastAPI', 'Relational Databases', 'Docker']
        },
        {
            'title': 'Software Engineer - CloudVision',
            'desc': 'Part of a team that developed MSS, which is an advanced east-west firewall designed to enhance data center security and traffic management. As part of this team, I leveraged stream processing frameworks, to develop features that were utilized by numerous downstream applications, ensuring real-time data flow and seamless integration. Also worked closely with network switches to debug and test features, including setting up configurations and topologies to simulate traffix flows between applications. This was critical for developing a feature that recommends firewall policies to users based on traffic observed on the switch.',
            'duration': 'July 2024 - April 2025',
            'skills': ['GoLang', 'gRPC', 'GNMI', 'REST APIs', 'Docker']
        },
        {
            'title': 'Software Engineer Intern',
            'desc': 'Part of a team that developed MSS, which is an advanced east-west firewall designed to enhance data center security and traffic management. As part of this team, I developed an end-to-end feature that polled third-party data sources like ServiceNow and Infoblox in order to fetch, process and publish data to the database.',
            'duration': 'January 2024 - June 2024',
            'skills': ['GoLang', 'gRPC', 'GNMI', 'REST APIs', 'Docker']
        }
    ],
    "CCBD": [
        {
            'title': 'Summer Research Intern',
            'desc': 'Worked under Dr. Praffulatha Auradkar as a Research Intern. Extensively researched methods to make the Robot Operating System(ROS), scalable, fault tolerant and reliable by leveraging these features offered by Apache Kafka',
            'duration': 'June 2023 - November 2023',
            'skills': ['Python', 'Apache Kafka', 'ROS', 'Docker']
        }
    ]
}

const education = {
    'PES University': [
        {
            'degree': 'Bachelor of Technology',
            'image': graduationImage,
            'desc': 'Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks.',
            'duration': 'Jan 2024 - Jun 2024',
            'skills': ['REST APIs', 'GNMI', 'gRPC']
        }
    ]
}

const Home = () => {

    return (
        <div className='page-section home-section'>
            <div className='page-part'>
                <motion.div
                    className="content-wrapper"
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.7 }}
                >
                    <div className='scrollable-content home-content'>
                        <div className="home-sidebar">
                            <div className='name__header-info'>
                                <motion.div className='badge-cmp'
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.5 },
                                }}>
                                    <h1 className='h-text'>Thejaswi Amarendra</h1>
                                </motion.div>
                            </div>
                        </div>
                        <div className="home-main-content">
                            <p>
                            I can write, understand and fix code.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='page-part'>
                <h1 className='h1-heading'>Experience</h1>
                <motion.div
                    className="content-wrapper"
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.7 }}
                >
                    <div className='scrollable-content experience-column'>
                        {Object.entries(companies).map(([companyName, works]) => (
                            <div className='company-block' key={companyName}>
                                <h2>{companyName}</h2>
                                <ul>
                                    {works.map((work, index) => (
                                        <li className="work-item" key={`${companyName}-${work.title}-${index}`}>
                                            <div className="work-header">
                                                <h3 className="work-title">{work.title}</h3>
                                                <p className="work-duration">{work.duration}</p>
                                            </div>
                                            <p className="work-description">{work.desc}</p>
                                            <p className="work-skills"><strong>Skills:</strong> {work.skills.join(', ')}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <div className='page-part'>
                <h1 className='h1-heading'>Education</h1>
                <motion.div
                    className="content-wrapper"
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.7 }}
                >
                    <div className='scrollable-content education-column'>
                        {Object.entries(education).map(([institution, degrees]) => (
                            <div className='institution-block' key={institution}>
                                <h2>{institution}</h2>
                                <ul>
                                    {degrees.map((edu, index) => (
                                        <li className="education-item" key={`${institution}-${edu.degree}-${index}`}>
                                            
                                            <div className="education-header">
                                                <h3 className="education-degree">{edu.degree}</h3>
                                                <p className="education-duration">{edu.duration}</p>
                                            </div>
                                            <p className="education-description">{edu.desc}</p>
                                            <p className="education-skills"><strong>Skills:</strong> {edu.skills.join(', ')}</p>
                                            <div className='education-image-container'>
                                                <motion.img
                                                    src={edu.image}
                                                    alt="Graduation Image"
                                                    className="graduation-image"
                                                />
                                            </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    ))}
                </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Home;