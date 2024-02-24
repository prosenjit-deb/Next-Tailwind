import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import MenuSidebar from './../../../components/sidebar/page';
import Footer from './../../../components/footer/page';
import Header from './../../../components/header/page';

import ContentImg from './../../../../assets/images/phone-hand-image.png';
import UserImg from './../../../../assets/images/user-img-1.jpeg';
import ViewIcon from './../../../../assets/images/icons/eye-icon.svg';
import LikeIcon from './../../../../assets/images/icons/like-icon.svg';
import VideoKey from './../../../../assets/images/icons/white-key-icon.svg';

import PlayIcon from './../../../../assets/images/icons/play.svg';

import AwardCup from './../../../../assets/images/icons/award-cup-icon.svg';
import WinnerCup from './../../../../assets/images/icons/winner-icon.svg';

import ContImg10 from './../../../../assets/images/image-10.jpeg';
import MessageIcon from './../../../../assets/images/icons/message-icon.svg';
import ShareIcon from './../../../../assets/images/icons/share-icon.svg';
import ElipsisIcon from './../../../../assets/images/icons/elipsis-icon.svg';

const page = () => {
  return (
    <main className="min-h-screen bg-bodyBg">
      {/* Start Header Component */}
      <Header />
      {/* End Header Component */}

      {/* Start Page layout */}
      <div className='flex flex-wrap w-full pt-12 md:pt-0'>

        {/* Start SideMenuBar Component */}
        <MenuSidebar />
        {/* End SideMenuBar Component */}

        {/* Start Right panel Page layout */}
        <div className='w-full lg:ms-[240px] pt-20 flex flex-col h-screen'>

          {/* Start Breadcrumb Component */}
          <div className="px-4 lg:px-8 py-4 flex items-center flex-wrap bg-white">
            <ul className="flex items-center">

              <li className="inline-flex items-center">
                <a href="#" className="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Home
                </a>

                <svg className="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li className="inline-flex items-center">
                <a href="#" className="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Creators
                </a>

                <svg className="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li className="inline-flex items-center">
                <a href="#" className="text-black hover:text-[#ED2227] text-sm">
                Nicolette Bloom
                </a>
              </li> 
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-8 pb-20 flex flex-wrap gap-7'>

            {/* Start Content Left Section Layoput */}
            <div className='w-full lg:w-4/12 xl:w-3/12'>

              <div className='bg-black relative'>
                <Image src={ContImg10} alt='' className='w-full h-full object-cover' />
                <div className='absolute w-full h-full left-0 top-0 bg-gradient-to-b from-transparent to-slate-950/75'>
                  <div className='flex flex-col items-center absolute bottom-6 left-1/2 -translate-x-1/2 w-full'>
                    <h2 className='text-white text-[28px] font-semibold'>Nicolette Bloom</h2>
                    <span className='text-[16px] text-white font-medium mb-4'>United States</span>
                    <Button variant="default" className="w-full max-w-[200px]">Follow For Free</Button>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 mb-2'>
                <div className='grid grid-cols-2 gap-2 divide-x'>
                  <div className='text-center'>
                    <h4 className='text-[33px] font-semibold text-black leading-normal'>395</h4>
                    <span className='text-[13px] text-black font-normal'>Pornyo Girl</span>
                  </div>
                  <div className='text-center'>
                    <h4 className='text-[33px] font-semibold text-black leading-normal'>23.5K</h4>
                    <span className='text-[13px] text-black font-normal'>Followers</span>
                  </div>
                </div>
              </div>

              <div className='bg-white px-6 py-5'>
                <p>
                Nicolette Bloom is an American pornstar. She is one of the top pornstars in the world right now. She has appeared in over 100 movies during her career. She has won a couple AVN Awards... <a href='#'>Read More</a>
                </p>
              </div>

              <div className='flex flex-wrap gap-4 py-7'>
                <Button variant="outline" className="text-black flex-1">Get My Videos</Button>
                <Button variant="default" className="flex-1">Tip</Button>
              </div>

              <div className='bg-white p-8'>
                <h3 className='text-[15px] font-semibold mb-4'>Achievements:</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                  <div className='py-3 px-[6px] border border-[#E2D9D9] flex items-center flex-col gap-[6px] rounded-sm'>
                    <Image src={AwardCup} alt='' />
                    <span className='text-black text-[11px] font-medium leading-[14px] -tracking-1 text-center'>2022 Pornyo Profile of The Year</span>
                  </div>
                  <div className='py-3 px-[6px] border border-[#E2D9D9] flex items-center flex-col gap-[6px] rounded-sm'>
                    <Image src={AwardCup} alt='' />
                    <span className='text-black text-[11px] font-medium leading-[14px] -tracking-1 text-center'>2022 Pornyo Profile of The Year</span>
                  </div>
                  <div className='py-3 px-[6px] border border-[#E2D9D9] flex items-center flex-col gap-[6px] rounded-sm'>
                    <Image src={WinnerCup} alt='' />
                    <span className='text-black text-[11px] font-medium leading-[14px] -tracking-1 text-center'>Pornyo Contest Winner</span>
                  </div>
                </div>
              </div>

            </div>{/* End Content Left Section Layoput */}

            {/* Start Content Right Section Layoput */}
            <div className=' flex-1 w-full lg:w-8/12 xl:w-9/12'>

              <div className='bg-white px-7 rounded-[9px] mb-9'>
                <ul className='flex gap-8 text-[#333] text-sm'>
                  <li className='cursor-pointer py-4'>Videos</li>
                  <li className='relative py-4 text-black font-semibold after:bg-[#ED2227] after:h-[3px] after:w-full after:left-0 after:bottom-0 after:absolute cursor-pointer'>Feed</li>
                  <li className='cursor-pointer py-4'>Items</li>
                  <li className='cursor-pointer py-4'>Custom</li>
                  <li className='cursor-pointer py-4'>Club</li>
                </ul>
              </div>

              {/* Start Video Section Grid Component */}
              <div className='w-full'>

                <div className=' max-w-[570px] flex flex-col gap-5'>

                  {/* Start Each Video Grid Component */}
                  <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>

                    <div className='py-6 px-7'>
                      <div className='relative'>
                        <div className='flex flex-wrap gap-2 items-center mb-6'>
                          <figure className='rounded-full overflow-hidden w-12 h-12'>
                            <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                          </figure>
                          <div className='flex flex-col'>
                            <span className='text-[15px] font-semibold text-black'>Nicolette Bloom</span>
                            <span className='text-[13px] text-black opacity-[0.7]  font-normal'>21 Dec, 2023</span>
                          </div>
                        </div>
                        <div className='absolute top-0 right-0'>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="link" className="p-0 md:p-0 w-8 h-10 rounded-full focus:outline-none hover:bg-gray-100">
                                <Image src={ElipsisIcon} alt='' />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-36">
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <span>Edit</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <span>Delete</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      <div>
                        <p className='text-[13px] -tracking-[0.13px]'>NEW VID - Cum Cucked Look, I know it's desperate but I just need to know if I have the job or not. My husband is a jobless loser and I really need this position. I promise you that I can do anything that this role requires. I promise... I will exceed your expectations.</p>
                      </div>
                    </div>
                    
                    <div className='w-full overflow-hidden relative'>
                      <AspectRatio ratio={16 / 9}>
                        <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                      </AspectRatio>
                      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] cursor-pointer hover:opacity-[.8]'>
                        <Image src={PlayIcon} alt='' />
                      </div>
                    </div>
                    <div className='bg-white w-full relative px-7 pb-5'>
                      <ul className='flex gap-4 items-center mt-4'>
                        <li className='flex gap-1 items-center cursor-pointer'>
                          <Image src={ViewIcon} alt='' />
                          <span className='text-[#333] text-[12.6px] font-normal'>7.2k</span>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer'>
                          <Image src={LikeIcon} alt='' />
                          <span className='text-[#333] text-[12.6px] font-normal'>60</span>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer'>
                          <Image src={MessageIcon} alt='' />
                          <span className='text-[#333] text-[12.6px] font-normal'>05</span>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer'>
                          <Image src={ShareIcon} alt='' />
                          <span className='text-[#333] text-[12.6px] font-normal'>02</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Start Each Video Grid Component */}

                  {/* Start Each Video Grid Component */}
                  <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>

                    <div className='py-6 px-7'>
                      <div className='relative'>
                        <div className='flex flex-wrap gap-2 items-center mb-6'>
                          <figure className='rounded-full overflow-hidden w-12 h-12'>
                            <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                          </figure>
                          <div className='flex flex-col'>
                            <span className='text-[15px] font-semibold text-black'>Nicolette Bloom</span>
                            <span className='text-[13px] text-black opacity-[0.7]  font-normal'>21 Dec, 2023</span>
                          </div>
                        </div>
                        <div className='absolute top-0 right-0'>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="link" className="p-0 md:p-0 w-8 h-10 rounded-full focus:outline-none hover:bg-gray-100">
                                <Image src={ElipsisIcon} alt='' />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-36">
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <span>Edit</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <span>Delete</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      <div>
                        <p className='text-[13px] -tracking-[0.13px]'>NEW VID - Cum Cucked Look, I know it's desperate but I just need to know if I have the job or not. My husband is a jobless loser and I really need this position. I promise you that I can do anything that this role requires. I promise... I will exceed your expectations.</p>
                      </div>
                    </div>
                    
                    <div className='w-full overflow-hidden'>
                      <AspectRatio ratio={16 / 9}>
                        <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                      </AspectRatio>
                    </div>
                    <div className='bg-white w-full relative px-7 pb-5'>
                      <ul className='flex gap-4 items-center mt-4'>
                        <li className='flex gap-1 items-center cursor-pointer'>
                          <Image src={ViewIcon} alt='' />
                          <span className='text-[#333] text-[12.6px] font-normal'>7.2k</span>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer'>
                          <Image src={LikeIcon} alt='' />
                          <span className='text-[#333] text-[12.6px] font-normal'>60</span>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer'>
                          <Image src={MessageIcon} alt='' />
                          <span className='text-[#333] text-[12.6px] font-normal'>05</span>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer'>
                          <Image src={ShareIcon} alt='' />
                          <span className='text-[#333] text-[12.6px] font-normal'>02</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Start Each Video Grid Component */}

                  {/* Start Each Video Grid Component */}
                  <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>

                    <div className='py-6 px-7'>
                      <div className='relative'>
                        <div className='flex flex-wrap gap-2 items-center mb-6'>
                          <figure className='rounded-full overflow-hidden w-12 h-12'>
                            <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                          </figure>
                          <div className='flex flex-col'>
                            <span className='text-[15px] font-semibold text-black'>Nicolette Bloom</span>
                            <span className='text-[13px] text-black opacity-[0.7]  font-normal'>21 Dec, 2023</span>
                          </div>
                        </div>
                        <div className='absolute top-0 right-0'>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="link" className="p-0 md:p-0 w-8 h-10 rounded-full focus:outline-none hover:bg-gray-100">
                                <Image src={ElipsisIcon} alt='' />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-36">
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <span>Edit</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <span>Delete</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      <div>
                        <p className='text-[13px] -tracking-[0.13px]'>NEW VID - Cum Cucked Look, I know it's desperate but I just need to know if I have the job or not. My husband is a jobless loser and I really need this position. I promise you that I can do anything that this role requires. I promise... I will exceed your expectations.</p>
                      </div>
                    </div>
                    
                    <div className='w-full overflow-hidden relative'>
                      <div className='after:bg-black after:opacity-[0.3] after:w-full after:h-full after:absolute absolute w-full h-full left-0 top-0 z-[1]'>
                        <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-[2]'>
                          <Image src={VideoKey} alt='' />
                          <h3 className='text-white mb-2 text-[17px]'>Subscribe to See Post</h3>
                          <Button variant="default" className="w-[150px]">Subscribe</Button>
                        </div>
                      </div>
                      <AspectRatio ratio={16 / 9}>
                        <Image src={ContentImg} alt="" className='w-full h-full object-cover blur-3xl' />
                      </AspectRatio>
                    </div>
                    <div className='bg-white w-full relative px-7 pb-5'>
                      <ul className='flex gap-4 items-center mt-4'>
                        <li className='flex gap-1 items-center cursor-pointer'>
                          <Image src={ViewIcon} alt='' />
                          <span className='text-[#333] text-[12.6px] font-normal'>7.2k</span>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer'>
                          <Image src={LikeIcon} alt='' />
                          <span className='text-[#333] text-[12.6px] font-normal'>60</span>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer'>
                          <Image src={MessageIcon} alt='' />
                          <span className='text-[#333] text-[12.6px] font-normal'>05</span>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer'>
                          <Image src={ShareIcon} alt='' />
                          <span className='text-[#333] text-[12.6px] font-normal'>02</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Start Each Video Grid Component */}
                </div>
                
              </div>{/* End Video Section Grid Component */}
            </div>{/* End Content Right Section Layoput */}

          </div>{/* End Right content layout */}

          {/* Start Footer Component */}
          <Footer />
          {/* End Footer Component */}

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}

export default page