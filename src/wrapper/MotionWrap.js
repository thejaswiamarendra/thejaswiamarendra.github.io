import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Component) => function HOC() {
  return (
    <motion.div
      whileInView={{ y: [0, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.7 }}
      className='app__flex'
    >
      <Component />
    </motion.div>
  );
};

export default MotionWrap;