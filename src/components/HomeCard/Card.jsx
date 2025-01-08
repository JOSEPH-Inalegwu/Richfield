import React from 'react'
import { motion } from 'motion/react'
import PropTypes from 'prop-types';

function Card({name = 'Undefined', image= 'src/assets/no_image.png', text}) {
  return (
    <>
    <motion.div 
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0, transition: {delay: 0.4, duration: 0.4}}}
    viewport={{once: false, amount: .5}}
    
    className="w-[95%] shadow-md border-solid border-gray-300 duration-300
        text-center cursor-pointer py-6 px-4 rounded-2xl bg-white/40 hover:bg-white">
        <div className="space-y-3">
            <div className="flex justify-center items-center">
                <img src={image} alt="" className="w-40 h-36" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800"
            >{name}
            </h3>
            <p className="max-w-sm text-center text-slate-800
            md:text-left">{text}</p>
        </div>
      </motion.div>
    </>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string
};

export default Card