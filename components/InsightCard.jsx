'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div 
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4">
    <img src={imgUrl} alt="" 
      className="md:w-[270px] w-full h-[250px] rounded-[1rem] object-cover"/>
      <div className="w-full flex justify-around items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal text-[1.5rem] text-white">{title}</h4>
          <p className="mt-[16px] font-normal text-[1rem] text-secondary-white">{subtitle}</p>
        </div>

        <div className="lg:flex hidden items-center justify-center w-[50px] h-[50px] rounded-full bg-transparent border-[1px] border-white">
          <img src="arrow.svg" alt="arrow" className="w-[30%] object-contain" />
        </div> 
      </div>
  </motion.div>
);

export default InsightCard;
