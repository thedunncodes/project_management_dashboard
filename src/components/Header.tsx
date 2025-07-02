import Image from 'next/image';
import { Inbox, Bell } from 'lucide-react'

export default function Header() {
  return (
    <header className=' px-2 py-6 border border-red-500'>
      <div aria-label='header-wrapper' className='flex justify-between' >
        <figure className='flex max-w-15' >
          <Image 
            src={'/leton-logo.png'}
            alt='Leton Logo'
            width={500}
            height={500}
          />
        </figure>
        <section className='min-w-[80%]'>
          <div></div>
          <div aria-label='profile-section' className='min-w-[30%] justify-self-end w-fit' >
            <div aria-label='profile-section-wrapper' className='w-full flex justify-end items-center gap-x-3' >
              <div aria-label='notifications' className='relative p-2.5 rounded-lg cursor-pointer hover:bg-prim-hover hover:shadow-sm border border-slate-300/50 shadow-prim-hover' >
                <div aria-label='inbox-container' className='relative' >
                  <div className='
                        absolute top-0 right-0 -translate-y-[25%] translate-x-[25%] bg-red-500 rounded-full w-3.5 h-3.5 text-[7px]
                        flex justify-center items-center text-white font-bold
                      ' >
                    1
                  </div>
                  <Bell className='w-5' />
                </div>
              </div>
              <div aria-label='inbox' className='relative p-2.5 rounded-lg cursor-pointer hover:bg-prim-hover hover:shadow-sm border border-slate-300/50 shadow-prim-hover' >
                <div aria-label='inbox-container' className='relative' >
                  <div className='
                        absolute top-0 right-0 -translate-y-[25%] translate-x-[25%] bg-red-500 rounded-full w-3.5 h-3.5 text-[7px]
                        flex justify-center items-center text-white font-bold
                      ' >
                    3
                  </div>
                  <Inbox className='w-5' />
                </div>
              </div>
              <figure className='flex ' >
                <Image 
                  src={'/default_photo.png'}
                  alt='Profile Picture'
                  width={100}
                  height={100}
                  className='rounded-full max-w-12'
                />
                <div>
                  <p>
                    John Smith
                  </p>
                  <p>
                    johnny@gmail.com
                  </p>
                </div>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}