import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

import Pagination from './../../../components/pagination/page';
import Sorting from './../../../components/sorting/page';
import MenuSidebar from './../../../components/sidebar/page';
import Footer from './../../../components/footer/page';
import Header from './../../../components/header/page';

import ContentImg from './../../../../assets/images/phone-hand-image.png';
import UserImg from './../../../../assets/images/user-img-1.jpeg';
import ViewIcon from './../../../../assets/images/icons/eye-icon.svg';
import LikeIcon from './../../../../assets/images/icons/like-icon.svg';
import CartIcon from './../../../../assets/images/icons/cart-icon.svg';

import AwardCup from './../../../../assets/images/icons/award-cup-icon.svg';
import WinnerCup from './../../../../assets/images/icons/winner-icon.svg';

import ContImg10 from './../../../../assets/images/image-10.jpeg';

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
          <div className="px-8 py-4 flex items-center flex-wrap bg-white">
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
                  <li className=' relative py-4 text-black font-semibold after:bg-[#ED2227] after:h-[3px] after:w-full after:left-0 after:bottom-0 after:absolute cursor-pointer'>Videos</li>
                  <li className='cursor-pointer py-4'>Feed</li>
                  <li className='cursor-pointer py-4'>Items</li>
                  <li className='cursor-pointer py-4'>Custom</li>
                  <li className='cursor-pointer py-4'>Club</li>
                </ul>
              </div>

              {/* Start Video Section Header Component */}
              <div className='flex flex-wrap items-center justify-between mb-5'>
                <h2 className=' uppercase text-black font-semibold text-[16px]'>All Videos (321)</h2>
                <div>
                  <Sorting />
                </div>
              </div>
              {/* End Video Section Header Component */}

              {/* Start Video Section Grid Component */}
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-11 pb-5'>
                    <div className=' bg-white rounded-[10px] flex flex-wrap gap-2 items-center py-2 px-3 border border-[#E8E8E8] absolute left-1/2 -top-8 -translate-x-1/2 w-[90%]'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <span className='text-[13.65px]'>The Rhythm House</span>
                    </div>
                    <h3 className='text-[15.75px] text-[#16161D]'>Hot Afternoon Sex That End</h3>
                    <small className='text-[#F80E0E] text-[13.65px]'>FREE</small>
                    <ul className='flex gap-4 items-center mt-4'>
                      <li className='flex gap-1 items-center'>
                        <Image src={ViewIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>7.2k</span>
                      </li>
                      <li className='flex gap-1 items-center'>
                        <Image src={LikeIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>60</span>
                      </li>
                    </ul>
                    <div className='absolute right-4 bottom-4'>
                      <Image src={CartIcon} alt='' className='cursor-pointer transition ease-in-out delay-150 hover:scale-110' />
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-11 pb-5'>
                    <div className=' bg-white rounded-[10px] flex flex-wrap gap-2 items-center py-2 px-3 border border-[#E8E8E8] absolute left-1/2 -top-8 -translate-x-1/2 w-[90%]'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <span className='text-[13.65px]'>The Rhythm House</span>
                    </div>
                    <h3 className='text-[15.75px] text-[#16161D]'>Hot Afternoon Sex That End</h3>
                    <small className='text-[#F80E0E] text-[13.65px]'>FREE</small>
                    <ul className='flex gap-4 items-center mt-4'>
                      <li className='flex gap-1 items-center'>
                        <Image src={ViewIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>7.2k</span>
                      </li>
                      <li className='flex gap-1 items-center'>
                        <Image src={LikeIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>60</span>
                      </li>
                    </ul>
                    <div className='absolute right-4 bottom-4'>
                      <Image src={CartIcon} alt='' className='cursor-pointer transition ease-in-out delay-150 hover:scale-110' />
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-11 pb-5'>
                    <div className=' bg-white rounded-[10px] flex flex-wrap gap-2 items-center py-2 px-3 border border-[#E8E8E8] absolute left-1/2 -top-8 -translate-x-1/2 w-[90%]'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <span className='text-[13.65px]'>The Rhythm House</span>
                    </div>
                    <h3 className='text-[15.75px] text-[#16161D]'>Hot Afternoon Sex That End</h3>
                    <small className='text-[#F80E0E] text-[13.65px]'>FREE</small>
                    <ul className='flex gap-4 items-center mt-4'>
                      <li className='flex gap-1 items-center'>
                        <Image src={ViewIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>7.2k</span>
                      </li>
                      <li className='flex gap-1 items-center'>
                        <Image src={LikeIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>60</span>
                      </li>
                    </ul>
                    <div className='absolute right-4 bottom-4'>
                      <Image src={CartIcon} alt='' className='cursor-pointer transition ease-in-out delay-150 hover:scale-110' />
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-11 pb-5'>
                    <div className=' bg-white rounded-[10px] flex flex-wrap gap-2 items-center py-2 px-3 border border-[#E8E8E8] absolute left-1/2 -top-8 -translate-x-1/2 w-[90%]'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <span className='text-[13.65px]'>The Rhythm House</span>
                    </div>
                    <h3 className='text-[15.75px] text-[#16161D]'>Hot Afternoon Sex That End</h3>
                    <small className='text-[#F80E0E] text-[13.65px]'>FREE</small>
                    <ul className='flex gap-4 items-center mt-4'>
                      <li className='flex gap-1 items-center'>
                        <Image src={ViewIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>7.2k</span>
                      </li>
                      <li className='flex gap-1 items-center'>
                        <Image src={LikeIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>60</span>
                      </li>
                    </ul>
                    <div className='absolute right-4 bottom-4'>
                      <Image src={CartIcon} alt='' className='cursor-pointer transition ease-in-out delay-150 hover:scale-110' />
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-11 pb-5'>
                    <div className=' bg-white rounded-[10px] flex flex-wrap gap-2 items-center py-2 px-3 border border-[#E8E8E8] absolute left-1/2 -top-8 -translate-x-1/2 w-[90%]'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <span className='text-[13.65px]'>The Rhythm House</span>
                    </div>
                    <h3 className='text-[15.75px] text-[#16161D]'>Hot Afternoon Sex That End</h3>
                    <small className='text-[#F80E0E] text-[13.65px]'>FREE</small>
                    <ul className='flex gap-4 items-center mt-4'>
                      <li className='flex gap-1 items-center'>
                        <Image src={ViewIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>7.2k</span>
                      </li>
                      <li className='flex gap-1 items-center'>
                        <Image src={LikeIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>60</span>
                      </li>
                    </ul>
                    <div className='absolute right-4 bottom-4'>
                      <Image src={CartIcon} alt='' className='cursor-pointer transition ease-in-out delay-150 hover:scale-110' />
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}
                
                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-11 pb-5'>
                    <div className=' bg-white rounded-[10px] flex flex-wrap gap-2 items-center py-2 px-3 border border-[#E8E8E8] absolute left-1/2 -top-8 -translate-x-1/2 w-[90%]'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <span className='text-[13.65px]'>The Rhythm House</span>
                    </div>
                    <h3 className='text-[15.75px] text-[#16161D]'>Hot Afternoon Sex That End</h3>
                    <small className='text-[#F80E0E] text-[13.65px]'>FREE</small>
                    <ul className='flex gap-4 items-center mt-4'>
                      <li className='flex gap-1 items-center'>
                        <Image src={ViewIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>7.2k</span>
                      </li>
                      <li className='flex gap-1 items-center'>
                        <Image src={LikeIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>60</span>
                      </li>
                    </ul>
                    <div className='absolute right-4 bottom-4'>
                      <Image src={CartIcon} alt='' className='cursor-pointer transition ease-in-out delay-150 hover:scale-110' />
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-11 pb-5'>
                    <div className=' bg-white rounded-[10px] flex flex-wrap gap-2 items-center py-2 px-3 border border-[#E8E8E8] absolute left-1/2 -top-8 -translate-x-1/2 w-[90%]'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <span className='text-[13.65px]'>The Rhythm House</span>
                    </div>
                    <h3 className='text-[15.75px] text-[#16161D]'>Hot Afternoon Sex That End</h3>
                    <small className='text-[#F80E0E] text-[13.65px]'>FREE</small>
                    <ul className='flex gap-4 items-center mt-4'>
                      <li className='flex gap-1 items-center'>
                        <Image src={ViewIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>7.2k</span>
                      </li>
                      <li className='flex gap-1 items-center'>
                        <Image src={LikeIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>60</span>
                      </li>
                    </ul>
                    <div className='absolute right-4 bottom-4'>
                      <Image src={CartIcon} alt='' className='cursor-pointer transition ease-in-out delay-150 hover:scale-110' />
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-11 pb-5'>
                    <div className=' bg-white rounded-[10px] flex flex-wrap gap-2 items-center py-2 px-3 border border-[#E8E8E8] absolute left-1/2 -top-8 -translate-x-1/2 w-[90%]'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <span className='text-[13.65px]'>The Rhythm House</span>
                    </div>
                    <h3 className='text-[15.75px] text-[#16161D]'>Hot Afternoon Sex That End</h3>
                    <small className='text-[#F80E0E] text-[13.65px]'>FREE</small>
                    <ul className='flex gap-4 items-center mt-4'>
                      <li className='flex gap-1 items-center'>
                        <Image src={ViewIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>7.2k</span>
                      </li>
                      <li className='flex gap-1 items-center'>
                        <Image src={LikeIcon} alt='' />
                        <span className='text-[#333] text-[12.6px] font-normal'>60</span>
                      </li>
                    </ul>
                    <div className='absolute right-4 bottom-4'>
                      <Image src={CartIcon} alt='' className='cursor-pointer transition ease-in-out delay-150 hover:scale-110' />
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}
                
              </div>{/* End Video Section Grid Component */}

              <Pagination />

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