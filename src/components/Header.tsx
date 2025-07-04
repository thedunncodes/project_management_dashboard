import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Inbox, Bell, User, Settings, Users, Gift, Plus, Gem, CircleQuestionMark, Trash2, LogOut } from 'lucide-react'
import Link from 'next/link';
import GetViewport from '@/hooks/viewportSize';

export default function Header() {
  const [ toggleMenu, setToggleMenu ] = useState<boolean>(false);
  const [ vpWidth ] = GetViewport();


  useEffect(() => {
        window.onclick = (event) => {
            if (event.target instanceof HTMLElement) {
                if (!event.target?.closest('#desktop-menu') && !event.target?.closest('#desktop-menu-btn')) {
                    if (toggleMenu) setToggleMenu(false)
                }
            }
        }
        
    })
  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  }
  return (
    <header className='relative h-[10dvh] '>
      <div aria-label='header-wrapper' className={`w-full h-full flex justify-between items-center relative px-2 md:px-5 py-2  z-20 bg-prim-bg ${ (toggleMenu && (vpWidth < 640))? 'bg-white' : 'bg-prim-bg' } transition-all duration-500 ease-in`} >
        <figure className='flex max-w-8 md:max-w-14 items-center h-full gap-x-2' >
          <Image 
            src={'/leton-logo.png'}
            alt='Leton Logo'
            width={500}
            height={500}
          />
          <div className='text-xl sm:text-3xl md:text-4xl font-inter text-[#0A1F45] tracking-wider font-bold' >
            Leton
          </div>
        </figure>
        <section className='min-w-[80%] flex justify-end'>
          <div aria-label='profile-section' className='min-w-[30%] ml-auto justify-self-end w-fit' >
            <div aria-label='profile-section-wrapper' className='w-full flex justify-end items-center gap-x-3' >
              <div aria-label='notifications' className='relative px-1 md:p-2.5 rounded-sm md:rounded-lg cursor-pointer hover:bg-prim-hover hover:shadow-sm border border-slate-300/75 shadow-prim-hover' >
                <div aria-label='notifications-container' className='relative' >
                  <div className='
                        absolute top-0 right-0 translate-y-[15%] md:-translate-y-[25%] translate-x-[15%] md:translate-x-[25%] bg-red-500 rounded-full
                        w-2 md:w-3.5 h-2 md:h-3.5 text-[5px] md:text-[7px]
                        flex justify-center items-center text-white font-bold
                      ' >
                    1
                  </div>
                  <Bell className='w-3 md:w-5' />
                </div>
              </div>
              <div aria-label='inbox' className='relative px-1 md:p-2.5 rounded-sm md:rounded-lg cursor-pointer hover:bg-prim-hover hover:shadow-sm border border-slate-300/75 shadow-prim-hover' >
                <div aria-label='inbox-container' className='relative' >
                  <div className='
                        absolute top-0 right-0 translate-y-[15%] md:-translate-y-[25%] translate-x-[15%] md:translate-x-[25%] bg-red-500 rounded-full
                        w-2 md:w-3.5 h-2 md:h-3.5 text-[5px] md:text-[7px]
                        flex justify-center items-center text-white font-bold
                      ' >
                    3
                  </div>
                  <Inbox className='w-3 md:w-5' />
                </div>
              </div>
              <button className='cursor-pointer' id='desktop-menu-btn' onClick={handleMenuToggle} >
                <figure className='flex items-center md:px-3 md:py-1 gap-x-2 rounded-lg md:border border-slate-300/75 hover:bg-prim-hover hover:shadow-sm' >
                  <Image 
                    src={'/default_photo.png'}
                    alt='Profile Picture'
                    width={100}
                    height={100}
                    className='rounded-full max-w-8 md:max-w-9'
                  />
                  <div className='hidden sm:block text-slate-600 text-left' >
                    <p className='text-sm font-semibold' >
                      John Smith
                    </p>
                    <p className='text-[11px] xs font-mono' >
                      johnny@gmail.com
                    </p>
                  </div>
                </figure>
              </button>
            </div>
          </div>
        </section>
      </div>
      <div aria-label='desktop-menu' className={`absolute z-19 left-0 sm:top-[4rem] w-full flex justify-end sm:px-5 ${ toggleMenu? 'translate-y-0 sopacity-100' : '-translate-y-[35rem] sopacity-0' } transition-all duration-500 ease-in`} >
        <div aria-label='desktop-menu-wrapper' id='desktop-menu' className={`w-full sm:w-[30%] bg-white border-slate-300/75 py-4 ${ (toggleMenu && (vpWidth < 640))? 'rounded-ee-lg rounded-es-lg border-b' : 'rounded-lg border' } shadow-2xl sm:shadow-md`} >
          <div className='font-semibold text-md font-inter px-3 md:px-5' >
            Account
          </div>
          <div aria-label='line-break' className='border-b border-zinc-300 w-full z-0 mt-2 mb-2 ' />
          <ul aria-label='desktop-menu-list' className='text-xs font-inter' >
              <li className='w-full mb-1 px-3 md:px-5 hover:bg-prim-hover/60 py-0.5' >
                <Link href={'#myprofile'} className='flex w-full gap-x-1.5 items-center' >
                  <User className='w-4' />
                  My Profile
                </Link>
              </li>
              <li className='w-full mb-1 px-3 md:px-5 hover:bg-prim-hover/60 py-0.5' >
                <Link href={'#settings'} className='flex w-full gap-x-1.5 items-center' >
                  <Settings className='w-4' />
                  Settings
                </Link>
              </li>
              <li className='w-full mb-1 px-3 md:px-5 hover:bg-prim-hover/60 py-0.5' >
                <Link href={'#teams'} className='flex w-full gap-x-1.5 items-center' >
                  <Users className='w-4' />
                  Teams
                </Link>
              </li>
              <li className='w-full' >
                <div aria-label='line-break' className='border-b border-zinc-300 w-full z-0 mt-2 mb-2 ' />
              </li>
              <li className='w-full mb-1 px-3 md:px-5 hover:bg-prim-hover/60 py-0.5' >
                <Link href={'#invite'} className='flex w-full gap-x-1.5 items-center' >
                  <Plus className='w-4' />
                  Invite members
                </Link>
              </li>
              <li className='w-full mb-1 px-3 md:px-5 hover:bg-prim-hover/60 py-0.5' >
                <Link href={'#refer'} className='flex w-full gap-x-1.5 items-center' >
                  <Gift className='w-4' />
                  Refer and Earn
                </Link>
              </li>
              <li className='w-full mb-1 px-3 md:px-5 hover:bg-prim-hover/60 py-0.5' >
                <Link href={'#upgrade'} className='flex w-full gap-x-1.5 items-center text-green-500 font-semibold tracking-wide' >
                  <Gem className='w-4' />
                  Upgrade Account
                </Link>
              </li>
              <li className='w-full mb-1 px-3 md:px-5 hover:bg-prim-hover/60 py-0.5' >
                <Link href={'#help'} className='flex w-full gap-x-1.5 items-center' >
                  <CircleQuestionMark className='w-4' />
                  Help
                </Link>
              </li>
              <li className='w-full' >
                <div aria-label='line-break' className='border-b border-zinc-300 w-full z-0 mt-2 mb-2 ' />
              </li>
              <li className='w-full mb-1 px-3 md:px-5 hover:bg-prim-hover/60 py-0.5' >
                <Link href={'#trash'} className='flex w-full gap-x-1.5 items-center' >
                  <Trash2 className='w-4' />
                  Trash
                </Link>
              </li>
              <li className='w-full mb-1 px-3 md:px-5 hover:bg-prim-hover/60 py-0.5' >
                <Link href={'#logout'} className='flex w-full gap-x-1.5 items-center text-red-500 font-semibold tracking-wide' >
                  <LogOut className='w-4' />
                  Log out
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </header>
  )
}