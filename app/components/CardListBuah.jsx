import Image from 'next/image'
import React from 'react'

const CardListBuah = ({ gambar, nama, harga1, harga2, onclick }) => {
  return (
    <div className='shadow-2xl rounded-xl bg-white overflow-hidden w-8/12 sm:w-1/2 md:w-10/12 lg:w-full mx-auto' id='sans'>
      <div className="bg-[#17f030bf] py-1">
        <p className='text-2xl font-semibold text-center'>{nama}</p>
      </div>
        <div className="wrapper h-[170px] xl:h-[200px]">
            <Image src={gambar} width={0} height={0} alt='buah' className='h-full w-7/12 md:w-5/12 xl:w-1/2 mx-auto' />
        </div>
        <p className='text-md md:text-lg font-medium mt-5 text-center text-black'>Rp.{harga1} / ¼kg.</p>
        <p className='text-md md:text-lg font-medium text-center text-black'>Rp.{harga2} / ½kg.</p>
        <div className='my-5 flex cursor-pointer bg-[#17f030bf] w-1/2 mx-auto text-xl xl:text-2xl rounded-full py-1 transition-all duration-700 hover:scale-110 hover:text-black'>
          <button onClick={onclick} className="flex w-max mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart4 mr-1" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg>
            Beli
          </button>
        </div>
    </div>
  )
}

export default CardListBuah