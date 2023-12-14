import React from 'react'
import wa from '../assets/whatsapp.png'
import Image from 'next/image'

const Whatsapp = () => {
  return (
    <div>
        <button className='fixed bottom-3 right-3 lg:bottom-5 lg:right-5'>
            <Image src={wa} width={0} height={0} alt='wa' className='w-14 animate-bounce' />
        </button>
    </div>
  )
}

export default Whatsapp