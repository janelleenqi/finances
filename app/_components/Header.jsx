import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <Image 
        src = {'./logo.svg'}
        alt = 'logo'
        width = {80}
        height = {100}
        ></Image>
        <Button>Get Started</Button>
    </div>
  )
}

export default Header