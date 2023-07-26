import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import { Header } from './components/Header'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const vRobot = Roboto({
  variable: '--font-Roboto',
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900'],
})


export const metadata = {
  title: 'Portfólio',
  description: 'Novo App',
}



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${vRobot.variable}`}>
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
