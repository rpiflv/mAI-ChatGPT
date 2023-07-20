"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession} from 'next-auth/react'
import { getProviders } from 'next-auth/react';

function Nav() {

  const {data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdowm] = useState(false);

  // alert(session?.user.image)

  useEffect( () => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response);
    };
    setUpProviders();
  })
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href={"/"} className='flex gap-2 flex-center'>
        <Image 
        src="/assets/images/logo.svg" 
        alt='logo'
        width={30}
        height={30}
        className='object-contain'
        />
        <p className='logo_text'>mAI-ChatGPT</p>
      </Link>
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="create-prompt"
            className='black_btn'>Create Post
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
            <Link href={"profile"}>
              <Image src={session?.user.image}
              width={37}
              height={37}
              className='rounded_full'
              alt='profile'>
              </Image>
            </Link>
          </div>
        ) : (
        <>
        {providers && 
        Object.values(providers).map((provider) => (
          <button
          type='button'
          key={provider.name}
          onClick={() => signIn(provider.id)}
          className='black_btn'
          >
            Sign-in
          </button>
        ) )}
        </>)}
      </div>
      <div className='sm:hidden flex relative'>
          {session?.user ? (
            <div className='flex'>
              <Image src={session?.user.image}
              width={37}
              height={37}
              className='rounded_full'
              alt='profile'
              // onClick={() => setToggleDropdowm(!toggleDropdown)}
              onClick={() => setToggleDropdowm((prev) => !prev)}
              />
              {toggleDropdown && (
                <div className='dropdown'>
                  <Link 
                  href="/profile"
                  className='dropdown_link'
                  onClick={() => setToggleDropdowm(false)}
                  >
                    My Profile
                  </Link>
                  <Link 
                  href="/create-promt"
                  className='dropdown_link'
                  onClick={() => setToggleDropdowm(false)}
                  >
                    Create Prompt
                  </Link>
                  <button
                  type='button'
                  onClick={() => {
                    setToggleDropdowm(false);
                    signOut()
                  }}
                  className='mt-5 w-full black_btn'
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (<>
          {providers && 
            Object.values(providers).map((provider) => (
            <button
            type='button'
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className='black_btn'
            >
              Sign-in
            </button>
        ) )}
        </>)}
      </div>
    </nav>
    )
}

export default Nav