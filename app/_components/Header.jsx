"use client" //since we used useUser()
import { Button } from '@/components/ui/button' 
import { UserButton, useUser } from '@clerk/clerk-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {

  const {user, isSignedIn} = useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <Image 
        src = {'./logo.svg'}
        alt = 'logo'
        width = {80}
        height = {100}
        ></Image>
        {isSignedIn?
            <UserButton></UserButton>:
            <Link href = {'/sign-in'}>
                <Button>Get Started</Button>
            </Link>
        }
    </div>
    
  )
}

export default Header