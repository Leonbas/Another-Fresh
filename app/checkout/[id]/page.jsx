import Image from 'next/image'
import React from 'react'
import bg from '../../assets/bgrd.jpg'
import bg2 from '../../assets/bg2.jpg'
import bowl from '../../assets/bowl logo.png'
import logo from '../../assets/logo white.png'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const Page = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="absolute h-screen overflow-hidden top-0 left-0 -z-10">
          <div className="h-1/2 xl:h-3/4 overflow-hidden">
            <div className="black h-1/2 xl:h-3/4 w-screen bg-black opacity-60 absolute top-0 left-0"></div>
            <Image src={bg} alt='background' width={0} height={0} className='hidden lg:block w-full lg:w-screen h-screen' />
            <Image src={bg2} alt='background' width={0} height={0} className='block lg:hidden w-screen h-screen' />
          </div>
        </div>
        <div className="wrapper relative w-max h-max mx-auto pt-32 2xl:pt-48">
            <Image src={bowl} alt='logo' width={0} height={0} className='w-[200px] md:[300px] xl:w-[320px] mx-auto' />
            <Image src={logo} alt='logo' width={0} height={0} className='w-[200px] md:w-[300px] xl:w-[400px] mx-auto xl:-mt-10' />
        </div>
        <div className="h-full w-screen container mx-auto px-8 my-20 xl:mt-40" id='sans'>
          <p className='text-center text-[26px] md:text-[40px] lg:text-[48px] font-semibold'>Silahkan isi form di bawah untuk melakukan pembelian:</p>
          <div className="form p-5 my-5 border-2 rounded-xl md:w-3/4 lg:w-1/2 md:mx-auto">
            <div className="wrapper space-y-3 md:space-y-6 text-xl sm:text-[24px]">
              <div className="wrapperinp">
                <p className='xl:mb-2'>Nama</p>
                <input type="text" className='py-1 px-3 border rounded w-full outline-none' />
              </div>
              <div className="wrapperinp">
                <p className='xl:mb-2'>Telepon</p>
                <input type="text" className='py-1 px-3 border rounded w-full outline-none' />
              </div>
              <div className="wrapperinp">
                <p className='xl:mb-2'>Alamat</p>
                <input type="text" className='py-1 px-3 border rounded w-full outline-none' />
              </div>
              <div className="wrapperinp">
                <p className='xl:mb-2'>Buah</p>
                <div type="text" className='py-1 px-3 border rounded w-full outline-none'>
                  <p className='font-semibold'>Anggur Hijau</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="wrapperinp w-1/4">
                  <p className='xl:mb-2'>Jumlah</p>
                  <select type="text" className='px-3 py-1 border rounded w-full outline-none cursor-pointer'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="wrapperinp w-3/4">
                  <p className='xl:mb-2'>Harga</p>
                  <div type="text" className='py-1 px-3 border rounded w-full'>
                    <p className='font-semibold'>Rp. 210.000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-7 flex cursor-pointer bg-[#17f030bf] w-1/2 mx-auto text-xl xl:text-2xl rounded-full py-1 transition-all duration-700 hover:scale-110 hover:text-black text-white'>
              <button className="flex w-max mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4 mr-1" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
                Beli
              </button>
            </div>
          </div>
        </div>
        <Footer />
        <Navbar />
      </div>
    </div>
  )
}

export default Page