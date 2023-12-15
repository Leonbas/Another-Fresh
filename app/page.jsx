'use client'
import Image from 'next/image'
import bg from './assets/bgrd.jpg'
import bg2 from './assets/bg2.jpg'
import bowl from './assets/bowl logo.png'
import gb1 from './assets/c1.jpg'
import gb2 from './assets/c2.jpg'
import gb3 from './assets/c3.jpg'
import logo from './assets/logo white.png'
import flow from './assets/flow order large.png'
import flow2 from './assets/flow order mobiles.png'
import Navbar from './components/Navbar'
import CardWelcome from './components/CardWelcome'
import Footer from './components/Footer'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  return (
    <main className="">
      <div className="relative h-full overflow-hidden">
        <div className="absolute overflow-hidden h-screen top-0 left-0 -z-10">
          <div className="black h-screen w-screen bg-black opacity-60 absolute top-0 left-0"></div>
          <Image src={bg} alt='background' width={0} height={0} className='hidden lg:block w-full lg:w-screen h-screen' />
          <Image src={bg2} alt='background' width={0} height={0} className='block lg:hidden w-screen h-screen' />
        </div>
        <div className="h-screen w-screen grid container mx-auto pt-28 2xl:pb-16 lg:pt-36 px-8 text-white">
          <div className="wrapper w-max h-max mx-auto py-1 md:py-3 border-b border-t">
            <p id='sans' className='text-[26px] md:text-[40px] lg:text-[48px]'>Another Fresh</p>
          </div>
          <div className="wrapper relative w-max h-max mx-auto my-5 lg:my-20">
            <Image src={bowl} alt='logo' width={0} height={0} className='w-[200px] md:[300px] lg:w-[320px] mx-auto' />
            <Image src={logo} alt='logo' width={0} height={0} className='w-[200px] md:w-[300px] lg:w-[400px] mx-auto lg:-mt-10' />
          </div>
          <div className="wrapper block 2xl:hidden" id='sans'>
            <p className='text-xl sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] text-center'>Another Fresh adalah destinasi terbaik untuk menemukan kelezatan alami yang segar dan berkualitas tinggi. Di sini, kami berkomitmen untuk menyajikan pilihan buah-buahan terbaik untuk di sampaikan ke tangan Anda.</p>
          </div>
          <div className="wrapper space-y-3 hidden 2xl:block" id='sans'>
            <p className='text-xl sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] text-center'>Another Fresh adalah destinasi terbaik untuk menemukan kelezatan alami yang segar dan</p>
            <p className='text-xl sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] text-center'>berkualitas tinggi. Di sini, kami berkomitmen untuk menyajikan pilihan buah-buahan terbaik</p>
            <p className='text-xl sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] text-center'>untuk di sampaikan ke tangan Anda.</p>
          </div>
        </div>
        <div className="container mx-auto h-full xl:h-screen w-screen px-8 py-10">
          <p className='text-3xl md:text-[40px] lg:text-[48px] font-semibold text-center' id='sans'>Selamat datang di <span className='text-[#17f030bf]'>Another Fresh.</span></p>
          <p className='text-xl sm:text-[24px] md:text-[28px] mt-1 lg:mt-4 font-light text-center'>Platform penyedia buah dan sayur fresh terbaik.</p>
          <div className="wrapper my-5 grid">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              <CardWelcome classname='mx-0 my-10' judul='Siapa kami?' gambar={gb1} deskripsi='Another Fresh adalah suatu platform digital yang menyediakan produk hasil bumi yang berjalan di bidang digital. Another Fresh hadir untuk mempermudah kamu berbelanja buah dan sayuran, sehingga kamu bisa lebih menghemat waktu dan biaya di saat kamu ingin berbelanja buah dan sayuran.' />
              <CardWelcome classname='mx-0 my-10' judul='Produk kami?' gambar={gb2} deskripsi='Buah-buahan kami dipilih dengan teliti untuk memastikan hanya yang terbaik yang sampai ke tangan Anda. Setiap buah menghadirkan kelezatan alami dan nutrisi maksimal. Kami bekerja sama dengan kebun dan petani terpercaya untuk memastikan rantai pasokan buah-buahan kami dapat dipercaya. Ini adalah komitmen kami untuk memberikan produk berkualitas tinggi kepada pelanggan.' />
              <CardWelcome classname='block lg:hidden xl:block mx-0 my-10' judul='Keunggulan kami?' gambar={gb3} deskripsi='Another Fresh mempermudah kamu untuk berbelanja dengan biaya dan waktu yang lebih efisien, karena Another Fresh menghadirkan metode belanja yang sangat simple, untuk kualitas produk dari Another Fresh ga usah di tanya deh! karena Another Fresh selalu menjaga kebersihan dan kesegeran produk yang di ambil dari petani dan disortir ulang.' />
            </div>
            <CardWelcome classname='hidden lg:block xl:hidden mx-0 my-10 lg:mx-auto' judul='Keunggulan kami?' gambar={gb3} deskripsi='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reiciendis nisi qui ipsa in illo, tempore, ex possimus, quia amet consectetur magni quidem cum aspernatur quibusdam! Quae fuga laboriosam cum!' />
          </div>
          <button onClick={()=>router.push('/about')} className='flex cursor-pointer transition-all shadow-2xl duration-700 hover:scale-110 hover:bg-[#17f030bf] hover:text-white mx-auto py-2 px-6 border rounded-full text-md lg:text-2xl font-semibold' id='sans'>Ketahui lebih banyak tentang kami . . .
          </button>
        </div>
        <div className="h-full w-screen px-8 pb-10 mt-20">
          <div className="container mx-auto">
            <p className='text-3xl md:text-[40px] lg:text-[48px] font-semibold text-center' id='sans'>Cara memesan di Another Fresh:</p>
            <div className="grid xl:mt-20 mt-10">
              <Image src={flow} width={0} height={0} alt='order' className='hidden lg:block w-7/12 mx-auto' />
              <Image src={flow2} width={0} height={0} alt='order' className='block lg:hidden' />
            </div>
          </div>
        </div>
        <Footer />
        <Navbar />
      </div>
    </main>
  )
}
