import { Roboto } from 'next/font/google'
import './globals.css' 
import Navbar from './components/layout/Header'


 
const roboto = Roboto({
  weight:[ '300','400','500', '100', '700'],
  subsets: ['latin'],
})
 

export const metadata = {
    title: 'Assignment Point-Home Page',
    description: 'Your assignment buddy.'
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"/>
        </head>
            <body className={roboto.className}> 
            <Navbar/>
          {children}
          </body>
        </html>
    )
}
