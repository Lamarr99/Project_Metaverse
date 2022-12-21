'use client';

import { motion } from "framer-motion";

import styles from '../styles'
import {navVariants}  from '../utils/motion'

const Navbar = () => (
  <motion.nav 
  className={`${styles.xPaddings} py-8 relative`}
  variants={navVariants}
  initial='hidden'
  whileInView= 'show'
   >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="search metaversus"
      className="w-[1.5rem] h-[1.5rem] object-contain" />
      <h2 className="font-extrabold text-[1.5rem] leading-[1.8rem] text-white">Metaversus</h2>
      <img 
      src="/menu.svg" 
      alt="metaversus menu"
      className="w-[1.5rem] h-[1.5rem] object-contain" />
    </div>
    
  </motion.nav>
);

export default Navbar;
