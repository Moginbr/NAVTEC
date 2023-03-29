import React from 'react';
import Image from '../assets/NAVTEC-removebg-preview.png'

import {FaGithub, FaInstagram, FaTelegram} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78hv] flex items-center' id="home">
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[0.8] 
            lg:text-[95px]'>
               BEM-VINDO AO <span>NAVTEC</span>
            </motion.h1>
            
            <motion.p
            variants={fadeIn('up',0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}  
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
              
            </motion.p>
            <motion.div
            variants={fadeIn('up',0.6)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}  
            className='flex max-w-max gap-x-6 items-center mb-12 lg:mx-0'>
              <button className='btn btn-lg'>CONTACT</button>
            </motion.div>
            <motion.div
            variants={fadeIn('up',0.7)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}  
            className="flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0">
              <a href='#'>
                <FaInstagram/>
              </a>
              <a href='#'>
                <FaGithub/>
              </a>
              <a href='#'>
                <FaTelegram/>
              </a>
            </motion.div>
          </div>
          <motion.div
          variants={fadeIn('down',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          className='hidden lg:flex 
          flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  )
  
};

export default Banner;