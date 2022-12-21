'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
      <div className="footer-gradient" />

      <div className={`${styles.innerWidth}  mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[2.5rem] text-[2rem] text-white ">Enter the Metaverse</h4>
          <button type="button" className="flex items-center h-fit p-4 bg-[#25618b] rounded-[1rem] gap-[12px]">
            <img src="/headset.svg" alt="headset" className="w-[20px] h-[20px] object-contain" />
            <span className="font-normal text-[1rem] text-white">ENTER METAVERSE</span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] opacity-10 bg-white h-[2px]" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[1.5rem] text-white">Metaversus</h4>
            <p className="text-white font-normal text-[14px] opacity-50">
              <a href='https://github.com/Lamarr99' target='_blank'>
                Designed & Built by Tony Osijo.</a>
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <img src={social.url} alt={social.name} key={social.name} className="w-[1rem] h-[1rem] object-contain cursor-pointer" />
              ))}
            </div>
          </div>
        </div>
      </div>
  </motion.footer>
);

export default Footer;
