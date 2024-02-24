import Image from 'next/image'
import { Button } from "@/components/ui/button"


import MenuSidebar from './components/sidebar/page';
import Footer from './components/footer/page';
import Header from './components/header/page';

import HomeHeroImg from './../assets/images/home-hero-img.png';
import ContentImg from './../assets/images/phone-hand-image.png';
import UserImg from './../assets/images/user-img-1.jpeg';
import ViewIcon from './../assets/images/icons/eye-icon.svg';
import LikeIcon from './../assets/images/icons/like-icon.svg';
import CartIcon from './../assets/images/icons/cart-icon.svg';

export default function Home() {
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
        <div className='w-full lg:ms-[240px] pt-20 flex flex-col h-screen flex flex-col h-screen'>

          {/* Start Breadcrumb Component */}
          <div class="px-8 py-4 flex items-center flex-wrap">
            <ul class="flex items-center">

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Home
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-black hover:text-[#ED2227] text-sm">
                Videos
                </a>
              </li>
            </ul>
          </div>{/* End Breadcrumb Component */}

          <div className='bg-white w-full px-8 py-4'>
            <ul className='flex flex-wrap gap-2'>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>All</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>Being Viewed</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>Now Live</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>Safe For Work</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>Newest Videos</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>Fetish</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>BBW</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>MILF</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>Pregnant</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>ASMR</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>Mukbang</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>Sexy Gamer</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>Cosplay</li>
              <li className='inline-flex bg-clF6F6F6 border border-clE5E0E0 rounded-sm px-2 py-[6px] text-cl545357 text-[11px] font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black'>Free Videos</li>
            </ul>
          </div>

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-8 pb-20'>

            {/* Start HomeBanner Component */}
            <div className='rounded-[20px] bg-gradient-to-r from-[#390404] to-[#1A1D38] w-full relative mb-8 lg:mb-11'>
              <Image src={HomeHeroImg} alt="" className=' ml-auto' />
              <div className='absolute top-1/2 left-4 md:left-10 -translate-y-1/2'>
                <h1 className='text-clED2227 text-[1.5rem] lg:text-[3.1rem]'>Explore PORNYO</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>{/* End HomeBanner Component */}

            {/* Start Video Section Listing Component */}
            <div className='w-100'>

              {/* Start Video Section Header Component */}
              <div className='flex flex-wrap items-center justify-between mb-6 gap-5'>
                <h2 className=' uppercase text-black font-semibold text-[16px]'>RECENTLY SOLD Videos</h2>
                <Button variant="default">View more</Button>
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

            </div>{/* End Video Section Listing Component */}

          </div>{/* End Right content layout */}

          <Footer />

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}
