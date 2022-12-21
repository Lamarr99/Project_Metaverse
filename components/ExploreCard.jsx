'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index + 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} 
    flex justify-center items-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s]
    ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img src={imgUrl} alt={title}
      className="absolute w-full h-full object-cover rounded-[1rem]" 
    />

      {active !== id ? (<h1 
        className="font-semibold sm:text-[26px] text-[1rem] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}</h1>
      ) : 
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0, 0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism`}
        >
          <img src="/headset.svg" alt="headset"
            className="w-1/2 h=1/2 object-contain" />
        </div>
        <p className="font-normal text-[1rem] leading-[1rem] mt-3 text-white uppercase">Enter the metaverse</p>
        <h2 className="mt-[24px] font-semibold sm:text-[2rem] text-[1.5rem] text-white">{title}</h2>
      </div> }
  </motion.div>
);

export default ExploreCard;
