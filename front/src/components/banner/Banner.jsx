import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './banner.css'
import SpinText from "../spinText/SpinText";
// import dreams from './../../../public/explore/dreams.png'

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div className='banner mt-[100px]' variants={banner}>
      <BannerRowTop title={`Osez,rêvez`} />
      <BannerRowBottom title={"Bienvenue, grand rêveur !"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter, index) => (
      <motion.span
        key={index}
        className='row-letter dark:text-light'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <div className='row-col dark:text-light my-[10vh]'>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1.4,
        }}
        className='row-col'
      >
        <img src='/explore/dreams.png' alt="dreams" className="w-[200px] animate-bounce" />
        {/* <span className='row-message dark:text-light'>
          Salut petit reveur ! Bienvenue sur Dreamer Issue, une plateforme pour te montrer la magie des reves!
        </span> */}
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8, delay: 1.8 }}
      >
            <button className="text-[50px] px-10 py-4 bg-[#354B72] dark:bg-light dark:text-dark text-light rounded-xl">{title}</button>
      </motion.div>
      {/* <button className="text-[50px] px-10 py-4 bg-dark dark:bg-light dark:text-dark text-light rounded-xl">{title}</button> */}
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner'>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

export default Banner;
