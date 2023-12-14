import { Inter } from 'next/font/google'
import './globals.css'
import Whatsapp from './components/Whatsapp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Another Fresh',
  description: 'Buah segar murah dan sehat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Whatsapp />  
      </body>
    </html>
  )
}
