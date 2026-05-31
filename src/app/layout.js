import { Inter } from 'next/font/google'
import Sidebar from '@/app/components/layout/Sidebar'
import Footer from '@/app/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Remote Team Workspace',
  description: 'Collaborate seamlessly with your remote team',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-x-hidden">
            <main className="flex-1">{children}</main>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  )
}