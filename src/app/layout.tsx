import type { Metadata } from 'next'
import './globals.css'
import { Providers } from "./providers";
import { customFont } from '@/utils/theme';
import Head from 'next/head';


const description = `Revolutionize healthcare with our Telemedicine App: secure, 
      convenient, expert medical consultations and
      seamless appointment booking at your fingertips`;

export const metadata: Metadata = {
  title: 'Create Next App',
  description
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <body className={customFont.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
