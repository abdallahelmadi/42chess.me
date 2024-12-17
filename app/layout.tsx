import './globals.css'
import { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: '42Chess',
  description: 'Do you want to sharpen your chess skills and compete with your friends? Join us and challenge them to test your strategy! The game might be tricky at first, but mastering it is rewarding!',
  keywords: [
    'play',
    'learn',
    'challenge',
    'test',
    'skills',
    'fun'
  ]
}

const roboto_Mono = Roboto_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <html lang='en'>
      <body className={`${roboto_Mono.className} select-none min-w-full flex justify-center cursor-default p-[2rem] bg-[--bg-color] text-[--text-color]`}>
        <main className='2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-full'>
          {children}
        </main>
      </body>
    </html>
  )
}