
import './globals.css'
import Header from "@/app/components/Header";
import { Mulish } from 'next/font/google';
import Footer from "@/app/components/Footer";
import ScrollToTopButton from '@/app/components/ScrollToTop';

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
title: 'Wikitech.io',
description: 'Generated by create next app',
}


export default function RootLayout({ children, }) {
return (
  <html lang="en" className={mulish.className}>
    <body>
    <Header />
    {children}
    {/* <Contact/> */}
<ScrollToTopButton/>
    <Footer />
    </body>
  </html>
)
}
