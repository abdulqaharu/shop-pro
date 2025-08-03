import Footer from '@/components/ui/footer'
import Header from '@/components/ui/shared/header'
import React, { ReactNode } from 'react'

type Props = Readonly<{
    children: ReactNode
}>

export default function Dancing({children}: Props) {
  return (
    <div className='flex h-screen flex-col'>
        <Header />
        <main className='flex-1 wrapper'>{children}</main>
        <Footer/>
    </div>
  )
}