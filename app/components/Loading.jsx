import React from 'react'
import logo from '../assets/logo.gif'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className='fixed h-screen w-full top-0 left-0 grid'>
        <div className="bg-black absolute w-screen h-screen -z-10 opacity-40"></div>
        <div className="wrapper p-10 border rounded-lg m-auto bg-white flex drop-shadow-[35px_35px_35px_rgba(0.75,0.75,0.75,0.75)]">
            <Image src={logo} alt="circle" width={0} height={0} className='w-[75px]' />
            <p className='text-3xl font-semibold my-auto ml-5'>Loading. . . .</p>
        </div>
    </div>
  )
}

export default Loading