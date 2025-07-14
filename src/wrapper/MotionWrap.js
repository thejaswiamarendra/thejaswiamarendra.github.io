import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Component) => function HOC() {
  return (
    <motion.div
      whileInView={{ opacity: [0, 0, 1] }}
      transition={{ duration: 1 }}
      className='app__flex'
    >
      <Component />
    </motion.div>
  );
};

export default MotionWrap;