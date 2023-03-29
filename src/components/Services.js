import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants';

import Dislike from './dislike';
import LikeButton from './Like';

const services = [ 
  {
    name:'Nacélio',
    description: 'Atualmente estudo na informática na EEEP Maria Célia. Pretendo seguir na área de tecnologia e me especializar em Javascript e Python',
    link: "https://onacelio.vercel.app/"
  },
  {
    name:'Davi',
    description: 'Olá Meu nome é Davi! Atualmente faço curso técnico de informática na escola Maria Célia Pinheiro Falcão, mas pretendo futuramente pretendo seguir carreira como Web Design.',
    link: "https://moginbr.vercel.app/"
  },
]


const Services = () => {
  return( 
    <div className='section' id="services">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount: 0.3}}
          className='flex-1 lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0'>
            <h1 className='h2 text-accent mb-6'>
              MEMBROS
            </h1>
            <h1 className='h3 max-w-[455px] mb-16'>
              Saiba quem são os nossos participantes 
              desse projeto!
            </h1>
          </motion.div>

          <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount: 0.3}} 
          className='flex-1'>
            <div >
              {services.map((service, index)=>{
                return (
                <div className='border-b border-white/20 h-[146px] mb-[38px]
                flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider 
                    font-primary font-semibold mb-6'>
                      {service.name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {service.description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <div className=''>
                        <Dislike/>
                    </div>
                      <LikeButton />
                    <div>
                    <a href={service.link} className='btn w-10 h-10 mb-[42px] flex 
                    justify-center items-center' target="_blank">
                      <BsArrowUpRight/>
                    </a>

                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
