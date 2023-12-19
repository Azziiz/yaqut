import { Inter } from 'next/font/google'
import { Chau_Philomene_One } from 'next/font/google' 
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const inter = Chau_Philomene_One({ subsets: ['latin'], weight:'400' })

export const metadata = {
  title: 'Yaqut',
  description: 'a shop that sells accessoires',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
