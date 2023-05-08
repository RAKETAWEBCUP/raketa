import React from 'react'
import { CircularText } from '../icons/Icons'

const SpinText = () => {
  return (
    <div className='w-50 h-auto flex items-center justify-center relative'>
        <CircularText className={'fill-dark animate-spin-slow'} />
    </div>
  )
}

export default SpinText