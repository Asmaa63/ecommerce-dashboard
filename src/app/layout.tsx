import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import { SearchProvider } from "@/context/SearchContext";
import { AuthProvider } from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce Dashboard',
  description: 'Modern e-commerce admin dashboard built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <SearchProvider>
        <AuthProvider>{children}</AuthProvider>
        </SearchProvider>
      </body>
    </html>
  )
}