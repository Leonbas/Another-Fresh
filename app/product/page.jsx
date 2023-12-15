'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import bg from '../assets/bgrd.jpg'
import bg2 from '../assets/bg2.jpg'
import bowl from '../assets/bowl logo.png'
import logo from '../assets/logo white.png'
import buah1 from '../assets/anggur merah.jpeg'
import buah2 from '../assets/anggur hijau.jpeg'
import buah3 from '../assets/anggur hitam.jpeg'
import Image from 'next/image'
import CardListBuah from '../components/CardListBuah'
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation'
import Loading from '../components/Loading'

const Page = () => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="absolute h-screen overflow-hidden top-0 left-0 -z-10">
          <div className="h-3/4 overflow-hidden">
            <div className="black h-3/4 w-screen bg-black opacity-60 absolute top-0 left-0"></div>
            <Image src={bg} alt='background' width={0} height={0} className='hidden lg:block w-full lg:w-screen h-screen' />
            <Image src={bg2} alt='background' width={0} height={0} className='block lg:hidden w-screen h-screen' />
          </div>
        </div>
        <div className="rspn1 relative w-max h-max mx-auto">
            <Image src={bowl} alt='logo' width={0} height={0} className='w-[200px] md:[300px] xl:w-[320px] mx-auto' />
            <Image src={logo} alt='logo' width={0} height={0} className='w-[200px] md:w-[300px] xl:w-[400px] mx-auto xl:-mt-10' />
        </div>
        <div className="rspn2 h-full w-screen container mx-auto px-8 xl:mt-[150px] text-white">
          <p id='sans' className='text-center mb-10 text-[26px] md:text-[40px] lg:text-[48px] font-semibold border-b border-t border-black text-black'>Produk kami</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-5 gap-10">
            <CardListBuah gambar={buah1} nama='Anggur Merah' harga1='14.000' harga2='23.000' onclick={()=>router.push('/checkout/1')} />
            <CardListBuah gambar={buah2} nama='Anggur Hijau' harga1='19.000' harga2='39.000' onclick={()=>router.push('/checkout/2')} />
            <CardListBuah gambar={buah3} nama='Anggur Hitam' harga1='16.000' harga2='26.000' onclick={()=>router.push('/checkout/3')} />
            <CardListBuah gambar={buah2} nama='Anggur Hijau' harga1='19.000' harga2='39.000' onclick={()=>router.push('/checkout/2')} />
            <CardListBuah gambar={buah3} nama='Anggur Hitam' harga1='16.000' harga2='26.000' onclick={()=>router.push('/checkout/3')} />
          </div>
        </div>
        <Footer />
        <Navbar />
      </div>
    </div>
  )
}

export default Page