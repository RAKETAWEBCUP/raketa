import React from 'react'
import './simulation.css'
import { FiChevronRight } from 'react-icons/fi'

const Simulation = () => {
  return (
    <div className='flex justify-center items-center simul bg-light dark:bg-dark'>
        <a className='flex items-center py-8 px-12 text-light dark:text-dark bg-dark dark:bg-light text-3xl rounded-xl' href='/login'>Simulation Onirix <FiChevronRight className='ml-4 relative top-[2px]'/></a>
    </div>
  )
}

export default Simulation