import { useState } from 'react';
import useThemeSwitcher from '../../hooks/useThemeSwitcher'
import { MoonIcon, SunIcon } from '../icons/Icons';
import { motion } from 'framer-motion';
import './navbar.css'

const links = [
  {
    title: 'Accueil',
    link: '#',
    style: 'mr-4'
  },
  {
    title: 'A porpos',
    link: '#stiky',
    style: 'mx-4'
  },
  {
    title: 'Projets',
    link: '#projet',
    style: 'mx-4'
  },
  {
    title: 'Mention',
    link: '#about',
    style: 'ml-4'
  },
];

const navAnimate = {
  initial: {
    scale : 0,
    y: -180 
  },

  animate: {
    scale: 1,
    y: 0
  },

  transition :{
    ease: "easeInOut",
    duration: 1,
    delay: 0.6,
  }
}

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const lineStyle = 'h-0.5 inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300'

  return (
    <motion.header
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='w-full px-32 py-3 lg-px-6 font-medium flex items-center justify-between fixed z-30 bg-white dark:bg-darkNav'
    >
      <h2 className='logoFont dark:text-light'>Dreamly Real</h2>

      <nav className='flex lg-hidden'>
        { links.map((item, index) => (
          <a key={index} href={item.link} className= {`${item.style} relative group dark:text-light text-[17px] font-[600]`}>
            {item.title}<span className={lineStyle}></span>
          </a>
        )) }
      </nav>

      <motion.nav 
        className={`${isOpen ? 'flex' : 'hidden'} flex-col absolute right-0 top-[72px] w-[100%] z-30 bg-white dark:bg-darkNav rounded-b-lg backdrop-blur-md p-6 space-y-6 shadow-lg dark:darkNavShadow`}
        variants={navAnimate}
        initial='initial'
        whileInView='animate'
      >
        { links.map((item, index) => (
          <a key={index} href={item.link} className= {`${item.style} relative group text-dark dark:text-softLight text-base font-[600] !mx-0`}>
            {item.title}
          </a>
        )) }
        <div className='mt-6 pt-6 border-solid border-t border-slate-200 dark:border-slate-200/10'>
          <div className='flex items-center justify-between'>
            <span className='text-dark font-normal dark:text-slate-400'>Changer le theme</span>
            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`${mode === 'light' ? 'text-dark' : 'text-light'}`}
            >
              { mode === 'dark' ? <SunIcon /> : <MoonIcon /> }
            </button>
          </div>
        </div>
      </motion.nav>

      <button
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className={`${mode === 'light' ? 'text-dark' : 'text-light'} lg-hidden`}
      >
        { mode === 'dark' ? <SunIcon /> : <MoonIcon /> }
      </button>

      <div 
        className={`navbar-toggler m-nav-toggle ${isOpen ? 'is-open' : null}`}
        onClick={handleClick}  
      >
        <span className="m-toggle-icon bg-dark dark:bg-light before:bg-dark after:bg-dark dark:before:bg-light dark:after:bg-light"></span>
      </div>
    </motion.header>
  )
}

export default Navbar