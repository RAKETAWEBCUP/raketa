import React, { useState } from 'react'
import './fermeture.css'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'
import { FaBrain } from 'react-icons/fa';
import { BsFillChatSquareDotsFill } from 'react-icons/bs';
import { ImStatsBars } from 'react-icons/im'
import { Link } from 'react-router-dom'


const Fermeture = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`fixed top-[40%] bg-dark flex items-center gap-3 py-4 pr-4 rounded-r-xl ${isOpen ? 'ml-[0]' : '-ml-[165px]'} `}>
        <div className=''>
            <ul>
                <li className='px-4 py-2 mx-4 my-1 rounded-md bg-light'><Link to="#" className='flex items-center gap-2'><FaBrain /> Simulation</Link></li>
                <li className='px-4 py-2 mx-4 my-1 rounded-md bg-light'><Link to="#" className='flex items-center gap-2'><BsFillChatSquareDotsFill /> Forum</Link></li>
                <li className='px-4 py-2 mx-4 my-1 rounded-md bg-light'><Link to="#" className='flex items-center gap-2'><ImStatsBars /> Rating</Link></li>
            </ul>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer text-[40px] text-light flex justify-center'>
            {isOpen ? <HiChevronLeft /> : <HiChevronRight />}
        </div>
    </div>
  )
}

export default Fermeture