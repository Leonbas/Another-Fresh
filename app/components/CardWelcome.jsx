import React from 'react'
import Image from 'next/image'

const CardWelcome = ({ judul, gambar, deskripsi, classname }) => {
  return (
    <div className={classname}>
        <div className='shadow-2xl py-8 px-4 rounded-xl' id='sans'>
            <p className='text-xl md:text-[28px] lg:text-[33px] font-semibold text-center'>{judul}</p>
            <Image src={gambar} width={0} height={0} alt='gb' className='w-1/2 mx-auto my-2' />
            <p className='text-lg md:text-[24px] lg:text-[29px] font-light text-center'>{deskripsi}.</p>
        </div>
    </div>
  )
}

export default CardWelcome