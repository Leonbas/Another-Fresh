import React from 'react'
import wa from '../assets/whatsapp.png'
import Image from 'next/image'
import Link from 'next/link'

const Whatsapp = () => {
  return (
    <div>
      <Link href={'https://wa.link/lfdxw8'}>
        <button className='fixed bottom-3 right-3 lg:bottom-5 lg:right-5'>
            <Image src={wa} width={0} height={0} alt='wa' className='w-14 animate-bounce' />
        </button>
      </Link>
    </div>
  )
}

export default Whatsapp