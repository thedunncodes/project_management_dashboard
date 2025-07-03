import { useEffect, useRef, useState } from 'react';
import { ArrowLeftRight, Blocks, ChartArea, ChevronRight, ClipboardList, Ellipsis, FolderKanban, Kanban, LayoutDashboard, Users } from 'lucide-react';
import GetViewport from '@/hooks/viewportSize';
import Link from 'next/link';

export default function MainBody({ children }: {children: React.ReactNode}) {
    const [ toggleSideNav, setToggleSideNav ] = useState<boolean>(true);
    const [ workSpace, setWorkSpace ] = useState<string | null | undefined>('Finance Forge');
    const [ toggleProjects, setToggleProjects ] = useState<boolean>(false);
    const [ vpWidth ] = GetViewport();

    const navSectionRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        window.onclick = (event) => {
            if (event.target instanceof HTMLElement) {
                if (!event.target?.closest('#projects-menu') && !event.target?.closest('#projects-menu-btn')) {
                    if (toggleProjects) setToggleProjects(false)
                }
            }
        }
        
    });

    useEffect(() => {
        if (projectListRef.current && navSectionRef.current) {
            if (vpWidth >= 1024) {
                projectListRef.current.style.translate = `${projectListRef.current.offsetWidth + 16}px -15rem`;
            } else {
                projectListRef.current.style.translate = '0px 0px';
            }
        } 
    }, [vpWidth, toggleProjects]);

    const handleNavSelect = (e: React.MouseEvent<HTMLLIElement>) => {
        const currentNav = e.currentTarget;
        document.querySelectorAll('.nav-tab').forEach((nav) => {
            if (nav.id !== currentNav.id) {
                nav.classList.remove('bg-blue-300');
                nav.classList.add('hover:bg-prim-hover/85');
            }
        });
        document.querySelectorAll('.nav-tab').forEach((nav) => {
            if (nav.id === currentNav.id) {
                nav.classList.add('bg-blue-300');
                nav.classList.remove('hover:bg-prim-hover/85');
            }
        })
    }

    const handleProjectSelect = (e: React.MouseEvent<HTMLLIElement>) => {
        const currentProject = e.currentTarget;
        if (currentProject) {
            setWorkSpace(currentProject.firstChild?.textContent);
            setToggleProjects(false);
            if (vpWidth < 1024) setToggleSideNav(false);
        }
    }
  return (
    <main className='h-[90dvh] w-full relative' >
        <div aria-label='main-wrapper' className='w-full h-full' >
            <div aria-label='main-container' className='w-full flex h-full bg-[#f2f2f2] border-t border-slate-300/75' >
                <section aria-label='nav-section' ref={navSectionRef} className={`
                    bg-[#f2f2f2] redd-400 ${ toggleSideNav? 'max-[370px]:w-[75%] w-[60%] md:w-[35%] lg:w-[20%]' : 'w-3 md:w-5' } max-w-[30rem] h-full transition-all duration-400 ease-in-out
                    absolute z-3 md:relative
                   `} >
                    <div aria-label='nav-section-wrapper' className='w-full h-full' >
                        <div aria-label='side-nav-btn' className='absolute top-2 -right-2.5 md:-right-3 w-fit' >
                            <button 
                                className='w-5 md:w-6 h-5 md:h-6 flex justify-center items-center rounded-full border border-slate-300/75 bg-white hover:bg-slate-200/80 shadow-md'
                                onClick={() => setToggleSideNav(!toggleSideNav)}
                            >
                                <ChevronRight className={`${ toggleSideNav? 'rotate-180' : 'rotate-0' } w-5 md:w-6`} />
                            </button>
                        </div>
                        <div aria-label='nav-list-wrapper' className={`w-full h-full pt-8 px-3 ${ toggleSideNav? 'opacity-100 block' : 'opacity-0 hidden' } overflow-auto lg:overflow-visible`} >
                            <ul className='text-sm font-inter relative' >
                                <li id='nav1' className='nav-tab w-full mb-2 px-2 md:px-4 hover:bg-prim-hover/85 bg-blue-300 py-1.5 rounded-sm' onClick={handleNavSelect} >
                                    <Link href={'#tab'} className='flex w-full gap-x-2.5 items-center' >
                                        <LayoutDashboard strokeWidth={1.5} className='w-5' />
                                        Dashboard
                                    </Link>
                                </li>
                                <li id='nav2' className='nav-tab w-full mb-2 px-2 md:px-4 hover:bg-prim-hover/85 py-1.5 rounded-sm' onClick={handleNavSelect} >
                                    <Link href={'#tab'} className='flex w-full gap-x-2.5 items-center' >
                                        <ArrowLeftRight strokeWidth={1.5} className='w-5' />
                                        Transactions
                                    </Link>
                                </li>
                                <li id='nav3' className='nav-tab w-full mb-2 px-2 md:px-4 hover:bg-prim-hover/85 py-1.5 rounded-sm' onClick={handleNavSelect} >
                                    <Link href={'#tab'} className='flex w-full gap-x-2.5 items-center' >
                                        <ClipboardList strokeWidth={1.5} className='w-5' />
                                        Tasks
                                    </Link>
                                </li>
                                <li id='nav4' className='nav-tab w-full mb-2 px-2 md:px-4 hover:bg-prim-hover/85 py-1.5 rounded-sm' onClick={handleNavSelect} >
                                    <Link href={'#tab'} className='flex w-full gap-x-2.5 items-center' >
                                        <ChartArea strokeWidth={1.5} className='w-5' />
                                        Analytics
                                    </Link>
                                </li>
                                <li className='w-full' >
                                    <div aria-label='line-break' className='border-b border-zinc-300 w-full z-0 mt-2 mb-2 ' />
                                </li>
                                <li id='nav5' className='nav-tab w-full mb-2 px-2 md:px-4 hover:bg-prim-hover/85 py-1.5 rounded-sm' onClick={handleNavSelect} >
                                    <Link href={'#tab'} className='flex w-full gap-x-2.5 items-center' >
                                        <Users strokeWidth={1.5} className='w-5' />
                                        Members
                                    </Link>
                                </li>
                                <li id='nav6' className='relative group  w-full  ' onClick={handleNavSelect} >
                                    <button className='flex flex-wrap w-full gap-x-2.5 mb-2 px-2 md:px-4 hover:bg-prim-hover/85 py-1.5 rounded-sm cursor-pointer items-center' >
                                        <FolderKanban strokeWidth={1.5} className='w-5' />
                                        Projects
                                        <Ellipsis id='projects-menu-btn' strokeWidth={0.75} fill='black' className='ml-auto lg:hidden group-hover:block' onClick={() => setToggleProjects(!toggleProjects)} />
                                    </button>
                                        <ul id='projects-menu' ref={projectListRef} className={`
                                            lg:absolute right-0  text-xs font-inter bg-white 
                                            px-4 py-3 w-full lg:w-[13rem] rounded-md border border-slate-300/75 shadow-lg lg:shadow-around
                                            ${ toggleProjects? 'block' : 'hidden' }
                                          `} >
                                           <li className='w-full mb-1.5 px-2 md:px-4 hover:bg-prim-hover/85 py-1.5 rounded-sm' onClick={handleProjectSelect} >
                                            <Link href={'#project1'} className='flex w-full gap-x-2.5 items-center' >
                                                <Kanban strokeWidth={1} className='w-4 text-black' />
                                                Build Bay
                                            </Link>
                                           </li>
                                           <li className='w-full mb-1.5 px-2 md:px-4 hover:bg-prim-hover/85 py-1.5 rounded-sm' onClick={handleProjectSelect} >
                                            <Link href={'#project2'} className='flex w-full gap-x-2.5 items-center' >
                                                <Kanban strokeWidth={1} className='w-4 text-black' />
                                                Cashline Studio
                                            </Link>
                                           </li>
                                           <li className='w-full mb-1.5 px-2 md:px-4 hover:bg-prim-hover/85 py-1.5 rounded-sm' onClick={handleProjectSelect} >
                                            <Link href={'#project3'} className='flex w-full gap-x-2.5 items-center' >
                                                <Kanban strokeWidth={1} className='w-4 text-black' />
                                                Logic Loom
                                            </Link>
                                           </li>
                                           <li className='w-full mb-1.5 px-2 md:px-4 hover:bg-prim-hover/85 py-1.5 rounded-sm' onClick={handleProjectSelect} >
                                            <Link href={'#project4'} className='flex w-full gap-x-2.5 items-center' >
                                                <Kanban strokeWidth={1} className='w-4 text-black' />
                                                Budget Bench
                                            </Link>
                                           </li>
                                           <li className='w-full mb-1.5 px-2 md:px-4 hover:bg-prim-hover/85 py-1.5 rounded-sm' onClick={handleProjectSelect} >
                                            <Link href={'#project5'} className='flex w-full gap-x-2.5 items-center' >
                                                <Kanban strokeWidth={1} className='w-4 text-black' />
                                                Finance Forge
                                            </Link>
                                           </li>
                                           <li className='w-full mb-1.5 px-2 md:px-4 hover:bg-prim-hover/85 py-1.5 rounded-sm' onClick={handleProjectSelect} >
                                            <Link href={'#project6'} className='flex w-full gap-x-2.5 items-center' >
                                                <Kanban strokeWidth={1} className='w-4 text-black' />
                                                Equity Edge
                                            </Link>
                                           </li> 
                                        </ul>
                                </li>
                                <li id='nav7' className='nav-tab w-full mb-2 px-2 md:px-4 hover:bg-prim-hover/85 py-1.5 rounded-sm' onClick={handleNavSelect} >
                                    <Link href={'#tab'} className='flex w-full gap-x-2.5 items-center' >
                                        <Blocks strokeWidth={1.5} className='w-5' />
                                        New Workspace
                                        {/* <span className='block text-xl font-inter justify-self-end px-1 flex items-center ' >
                                            ...
                                        </span> */}
                                        
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section aria-label='content-section' className='relative flex-grow bg-white bg-purpdle-400 h-full rounded-ss-xl shadow-around overflow-auto' >
                    <div aria-label='content-section-wrapper' >
                        <div aria-label='content-section-header' className='w-full min-h-20 border-b border-slate-200/75 shadow-lg shadow-slate-200/40 px-8' >
                            <p className='text-lg leading-5 sm:leading-7 sm:text-2xl font-sans font-medium py-2' >
                                {workSpace} workspace
                            </p>
                            <p className='text-[9px] sm:text-xs font-inter text-slate-600' >
                                Welcome back, <b className='text-black/95' >John!</b>. It is the best time to manage your finances
                            </p>
                        </div>
                        
                    {children}  
                    </div>
                </section>
            </div>
        </div>
    </main>
  )
}