'use client';

import { TypingText } from "../components";
import { motion } from "framer-motion";

import styles from '../styles'
import {fadeIn, staggerContainer, textVariant}  from '../utils/motion'

const About = ( ) => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
    <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport = {{ once: false, amount: 0.25 }} 
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}  >
        <TypingText title='| About Metaversus' textStyles= 'text-center' />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className='mt-[1rem] font-normal sm:text-[1.3rem] leading-10 text-[1rem] text-center text-secondary-white' >
            <span className="font-bold text-white">Metaverse </span>
             is a new thing in the future, where you can enjoy the 
            virtual world by feeling like it's really real, you can feel what you feel in 
            this metaverse world , because this is really the  
            <span className="font-bold text-white"> madness of the metaverse </span>
             of today, using only 
             <span className="font-bold text-white"> VR </span> devices you can easily 
             <span className="font-bold text-white"> explore </span> the metaverse world you want, turn your 
            dreams into reality. Let's explore the madness of the metaverse by scrolling down.

          </motion.p>

          <motion.img
            variants={fadeIn('up','tween', 0.3, 1)}
            src='/arrow-down.svg'
            alt='metaversus-down'
            className="w-[18px] h-[28px] object-contain mt-[2rem] "></motion.img>
    </motion.div>
    
  </section>
);

export default About;
