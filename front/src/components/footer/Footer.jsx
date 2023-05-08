import React from 'react'
import './footer.css'
import styles from '../../assets/styles';
import { socials } from './data';
import { HiChevronRight } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer
      className={` relative px-[128px] pt-[32px] bg-white dark:bg-darkNav`}
    >
      <div className='flex justify-between flex-wrap items-center'>
        <div className='stay mb-6 w-[35%]'>
          <h5 className='mb-[8px] text-[20px] text-dark dark:text-light'>RESTEZ EN CONTACT</h5>
          <p className='font-[14.4px] mb-[16px] text-dark dark:text-light'>
            Merci d'avoir vister notre site web, n'oubliez pas de nous suivre sur les reseaux sociaux pour plus de d'actus!
          </p>
          <div className='flex gap-2'>
            {socials.map((social) => (
              <div key={social.name} className='p-3 text-light dark:text-dark bg-dark dark:bg-light rounded-full text-[24px] cursor-pointer'>
                {social.icon}
              </div>
            ))}
          </div>
        </div>
        <div className='text-center mb-6'>
          <h2 className='logoFont dark:text-light mb-[16px]'>Dreamly Real</h2>
          <p className='mb-[16px] text-dark dark:text-light'>iirofficial@gmail.com</p>
          <p className='text-dark dark:text-light'>+261 4464 65456</p>
        </div>
        <div className='flex flex-col mb-6 gap-y-2'>
          <p>
              <a href="#" className='flex items-center text-dark dark:text-light'><HiChevronRight /> Accueil</a>
          </p>
          <p>
              <a href="#stiky" className='flex items-center text-dark dark:text-light' ><HiChevronRight /> A propos</a>
          </p>
          <p>
              <a href="#projet" className='flex items-center text-dark dark:text-light'><HiChevronRight />Projets</a>
          </p>
          <p>
              <a href="#about" className='flex items-center text-dark dark:text-light'><HiChevronRight />Mention</a>
          </p>
        </div>
      </div>
      <div className="copir flex items-center justify-center flex-wrap py-[20px]">
        <p className="font-normal text-[14px] opacity-50 text-dark dark:text-light">
          Copyright © 2023 - 2024 Raketa. All rights reserved.
        </p>
      </div>
  </footer>
  )
}

export default Footer