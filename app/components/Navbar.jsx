'use client'
import React, { useState } from 'react'
import logo from '../assets/logo white.png' 
import bowl from '../assets/bowl logo black.png'
import logoblack from '../assets/logo black.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const router = useRouter();

  return (
    <div className='absolute h-[100px] top-0 left-0 w-screen grid'>
        <div className="bg-black h-[100px] w-screen opacity-40 absolute top-0 left-0 -z-10"></div>
        <div className="container mx-auto flex my-auto px-8">
            <div className="w-full lg:w-1/2">
                <Image src={logo} alt='logo' width={0} height={0} className='mx-auto lg:mx-0 w-8/12 lg:w-7/12' />
            </div>
            <div className="w-1/2 text-white hidden lg:flex">
                <button onClick={()=>router.push('/')} className='text-xl h-max my-auto mr-auto transition-all duration-500 hover:scale-110'>Beranda</button>
                <button onClick={()=>router.push('/product')} className='text-xl h-max my-auto mr-auto transition-all duration-500 hover:scale-110'>Produk</button>
                <button onClick={()=>router.push('/contact')} className='text-xl h-max my-auto mr-auto transition-all duration-500 hover:scale-110'>Kontak</button>
                <button onClick={()=>router.push('/about')} className='text-xl h-max my-auto transition-all duration-500 hover:scale-110'>Tentang Kami</button>
            </div>
            <button onClick={()=>menu === false ? setMenu(true) : setMenu(false)} className="absolute text-white top-8 left-8 transition-all duration-700 hover:rotate-180 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                   <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>
        </div>
        <div className={`transition-all duration-700 fixed top-0 w-3/4 md:w-1/2 h-screen bg-white py-5 px-8 ${menu === false ? '-left-[2500px]' : 'left-0'}`}>
            <div className="grid">
                <button onClick={()=>menu === false ? setMenu(true) : setMenu(false)} className='ml-auto h-max transition-all duration-700 hover:rotate-180'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>
            <div className="wrapper my-5" id='sans'>
                <div className="flex border-b py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                    </svg>
                    <button onClick={()=>{router.push('/'); setMenu(false)}} className='ml-2 text-xl'>Beranda</button>
                </div>
                <div className="flex border-b py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg>
                    <button onClick={()=>{router.push('/product'); setMenu(false)}} className='ml-2 text-xl'>Produk</button>
                </div>
                <div className="flex border-b py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                    </svg>
                    <button onClick={()=>{router.push('/contact'); setMenu(false)}} className='ml-2 text-xl'>Kontak</button>
                </div>
                <div className="flex py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                    </svg>
                    <button onClick={()=>{router.push('/about'); setMenu(false)}} className='ml-2 text-xl'>Tentang Kami</button>
                </div>
            </div>
            <div className="absolute bottom-5 left-0">
                <Image src={bowl} width={0} height={0} alt='bowl' className='w-4/12 mx-auto' />
                <Image src={logoblack} width={0} height={0} alt='bowl' className='w-3/4 mx-auto' />
            </div>
        </div>
    </div>
  )
}

export default Navbar