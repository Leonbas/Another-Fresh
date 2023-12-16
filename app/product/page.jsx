'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import bg from '../assets/bgrd.jpg'
import bg2 from '../assets/bg2.jpg'
import bowl from '../assets/bowl logo.png'
import logo from '../assets/logo white.png'
import anggurmerah from '../assets/anggurmerah.jpg'
import anggurhijau from '../assets/anggurhijau.jpg'
import anggurhitam from '../assets/anggurhitam.jpg'
import applefuji from '../assets/applefuji.jpg'
import appleusa from '../assets/appleusa.jpg'
import banana from '../assets/banana.jpg'
import mango from '../assets/mango.jpg'
import melon from '../assets/melon.jpg'
import sunkistorange from '../assets/sunkist orange.jpg'
import watermelon from '../assets/watermelon.jpg'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-5 mb-20 gap-10">
            <CardListBuah gambar={anggurmerah} nama='Anggur Merah' harga1='14.000' harga2='23.000' satuan1='¼' satuan2='½' onclick={()=>router.push('/checkout/1')} />
            <CardListBuah gambar={anggurhijau} nama='Anggur Hijau' harga1='19.000' harga2='39.000' satuan1='¼' satuan2='½' onclick={()=>router.push('/checkout/2')} />
            <CardListBuah gambar={anggurhitam} nama='Anggur Hitam' harga1='16.000' harga2='26.000' satuan1='¼' satuan2='½' onclick={()=>router.push('/checkout/3')} />
            <CardListBuah gambar={applefuji} nama='Apel Fuji' harga1='25.000' harga2='47.000' satuan1='½' satuan2='1' onclick={()=>router.push('/checkout/4')} />
            <CardListBuah gambar={appleusa} nama='Apel USA' harga1='23.000' harga2='43.000' satuan1='½' satuan2='1' onclick={()=>router.push('/checkout/5')} />
            <CardListBuah gambar={banana} nama='Pisang' harga1='7.000' harga2='12.000' satuan1='½' satuan2='1' onclick={()=>router.push('/checkout/6')} />
            <CardListBuah gambar={mango} nama='Mangga harumanis' harga1='7.000' harga2='12.000' satuan1='½' satuan2='1' onclick={()=>router.push('/checkout/7')} />
            <CardListBuah gambar={melon} nama='Melon' harga1='7.000' harga2='12.000' satuan1='½' satuan2='1' onclick={()=>router.push('/checkout/8')} />
            <CardListBuah gambar={sunkistorange} nama='Jeruk Sunkist' harga1='19.000' harga2='33.000' satuan1='½' satuan2='1' onclick={()=>router.push('/checkout/9')} />
            <CardListBuah gambar={watermelon} nama='Semangka' harga1='7.000' harga2='12.000' satuan1='½' satuan2='1' onclick={()=>router.push('/checkout/10')} />
          </div>
        </div>
        <Footer />
        <Navbar />
      </div>
    </div>
  )
}

export default Page