import Image from 'next/image'
import React from 'react'
import bg from '../assets/bgrd.jpg'
import bg2 from '../assets/bg2.jpg'
import bowl from '../assets/bowl logo.png'
import logo from '../assets/logo white.png'
import img1 from '../assets/bahan.jpg'
import img2 from '../assets/bahan2.jpg'
import img3 from '../assets/bahan3.jpg'
import img4 from '../assets/bahan4.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Page = () => {
  return (
    <div>
        <div className="relative overflow-hidden" id='sans'>
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
                <p className='text-center text-[26px] md:text-[40px] lg:text-[48px] font-semibold border-b border-t border-black'>Tentang Another Fresh</p>
                <Image src={img1} width={0} height={0} alt='img' className='my-10 rounded-xl lg:w-3/4 xl:w-7/12 mx-auto' />
                <div className="desc text-center text-xl lg:text-2xl xl:text-3xl">
                    <p>Selamat datang di <span className='font-semibold'>Another Fresh</span>, tempat di mana kelezatan dan keceriaan alami bertemu! Di sini, kami bangga menyajikan pilihan buah-buahan segar dan berkualitas tinggi yang dipetik dengan teliti untuk memastikan kelezatannya tetap terjaga.</p>
                    <Image src={img2} width={0} height={0} alt='img' className='my-10 rounded-xl lg:w-3/4 xl:w-7/12 mx-auto' />
                    <p>Nikmati pengalaman berbelanja buah yang tidak hanya menyehatkan, tetapi juga memanjakan lidah Anda dengan rasa yang autentik. Dari buah-buahan tropis eksotis hingga pilihan buah-buahan lokal yang berkualitas tinggi, kami memiliki beragam produk untuk memenuhi selera dan kebutuhan nutrisi Anda.</p>
                    <Image src={img3} width={0} height={0} alt='img' className='my-10 rounded-xl lg:w-3/4 xl:w-7/12 mx-auto' />
                    <p>Staf kami yang ramah dan berpengetahuan siap membantu Anda memilih buah yang paling segar dan sesuai dengan preferensi Anda. Kebersihan dan kualitas adalah prioritas kami, sehingga Anda dapat yakin bahwa setiap pembelian di toko kami adalah investasi untuk kesehatan dan kebahagiaan Anda.</p>
                    <Image src={img4} width={0} height={0} alt='img' className='my-10 rounded-xl lg:w-3/4 xl:w-7/12 mx-auto' />
                    <p><span className='font-semibold'>Another Fresh</span> bukan hanya tempat untuk berbelanja, tetapi juga tempat untuk mendapatkan inspirasi tentang cara memasukkan buah-buahan ke dalam gaya hidup sehat Anda. Tidak peduli apakah Anda mencari buah untuk camilan sehari-hari, persiapan hidangan spesial, atau sekadar menggugah selera buah-buahan yang baru, kami memiliki apa yang Anda cari.</p>
                    <p>Terima kasih atas kunjungan Anda di <span className='font-semibold'>Another Fresh</span>. Kami berkomitmen untuk memberikan pengalaman berbelanja yang memuaskan dan memberikan keceriaan melalui kelezatan buah-buahan segar pilihan kami.</p>
                </div>
            </div>
            <Footer />
            <Navbar />
        </div>
    </div>
  )
}

export default Page