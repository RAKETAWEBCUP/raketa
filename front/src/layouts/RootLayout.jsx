import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'
import TestSection from '../sections/TestSection'
import Chat from './ChatBot'

const RootLayout = () => {
  return (
    <div className='root-layoutbg-white dark:bg-dark w-full min-h-screen'>
        {/* <Navbar /> */}
        <main>
          <Outlet />
          <Chat />
        </main>
    </div>
  )
}

export default RootLayout