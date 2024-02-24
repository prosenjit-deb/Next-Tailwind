"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button"

import MenuSidebar from './../../components/sidebar/page';
import Footer from './../../components/footer/page';
import Header from './../../components/header/page';

import ContentImg from './../../../assets/images/phone-hand-image.png';
import UserImg from './../../../assets/images/user-img-1.jpeg';
import CartRemove from './../../../assets/images/icons/cart-remove-icon.svg';


export default function ContestListing() {
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
          <div class="px-8 py-4 bg-white flex items-center flex-wrap">
            <ul class="flex items-center">

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Home
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Video
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-black hover:text-[#ED2227] text-sm">
                Cart
                </a>
              </li>
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-5 pb-20'>

            {/* Start Contest Section Listing Component */}
            <div className='w-100 mb-9'>

              <div className='flex flex-wrap items-center justify-between mb-6 gap-5'>
                <h1 className='text-black font-semibold text-[24px]'>Your Cart</h1>
              </div>
              <div className=" flex flex-col space-y-3">
                <div className="flex flex-wrap items-start justify-between relative bg-white px-6 pt-6 pb-6 md:pb-10 rounded-10 hover:bg-gray-50">
                  <div className="flex flex-wrap gap-5 md:gap-14 justify-between items-start w-full md:w-9/12">
                    <div className="flex flex-wrap gap-5 flex-1">
                      <div className="h-[126px] overflow-hidden rounded-10 w-5/12 max-w-[190px]">
                        <Image src={ContentImg} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className=" flex flex-col space-y-3 flex-1 w-full md:w-5/12">
                        <h2 className="text-[16px] font-medium text-[#16161D] max-w-[305px]">Sara Retali Meets FreakyT Christmas Special Sex</h2>
                        <div className='flex flex-wrap gap-2 items-center w-[90%]'>
                          <figure className='rounded-full overflow-hidden w-9 h-9'>
                            <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                          </figure>
                          <span className='text-[13.65px] flex-1'>The Rhythm House</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center w-full md:w-4/12">
                      <span className="border border-r-0 text-[25px] w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-gray-100">-</span>
                      <span className="border border-r-0 text-[15px] w-[40px] h-[40px] flex items-center justify-center">01</span>
                      <span className="border text-[15px] w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-gray-100">+</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-10 items-center md:w-3/12 justify-end absolute md:relative right-4 bottom-[2rem] md:read-only: md:right-0 md:bottom-0">
                    <h3 className="text-[#F80E0E] text-[20px] font-semibold">$19.99</h3>
                    <Button variant="outline" className="border-0 px-0 md:px-0 hover:bg-slate-200">
                      <Image src={CartRemove} alt="" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-start justify-between relative bg-white px-6 pt-6 pb-6 md:pb-10 rounded-10 hover:bg-gray-50">
                  <div className="flex flex-wrap gap-5 md:gap-14 justify-between items-start w-full md:w-9/12">
                    <div className="flex flex-wrap gap-5 flex-1">
                      <div className="h-[126px] overflow-hidden rounded-10 w-5/12 max-w-[190px]">
                        <Image src={ContentImg} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className=" flex flex-col space-y-3 flex-1 w-full md:w-5/12">
                        <h2 className="text-[16px] font-medium text-[#16161D] max-w-[305px]">Sara Retali Meets FreakyT Christmas Special Sex</h2>
                        <div className='flex flex-wrap gap-2 items-center w-[90%]'>
                          <figure className='rounded-full overflow-hidden w-9 h-9'>
                            <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                          </figure>
                          <span className='text-[13.65px] flex-1'>The Rhythm House</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center w-full md:w-4/12">
                      <span className="border border-r-0 text-[25px] w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-gray-100">-</span>
                      <span className="border border-r-0 text-[15px] w-[40px] h-[40px] flex items-center justify-center">01</span>
                      <span className="border text-[15px] w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-gray-100">+</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-10 items-center md:w-3/12 justify-end absolute md:relative right-4 bottom-[2rem] md:read-only: md:right-0 md:bottom-0">
                    <h3 className="text-[#F80E0E] text-[20px] font-semibold">$19.99</h3>
                    <Button variant="outline" className="border-0 px-0 md:px-0 hover:bg-slate-200">
                      <Image src={CartRemove} alt="" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-start justify-between relative bg-white px-6 pt-6 pb-6 md:pb-10 rounded-10 hover:bg-gray-50">
                  <div className="flex flex-wrap gap-5 md:gap-14 justify-between items-start w-full md:w-9/12">
                    <div className="flex flex-wrap gap-5 flex-1">
                      <div className="h-[126px] overflow-hidden rounded-10 w-5/12 max-w-[190px]">
                        <Image src={ContentImg} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className=" flex flex-col space-y-3 flex-1 w-full md:w-5/12">
                        <h2 className="text-[16px] font-medium text-[#16161D] max-w-[305px]">Sara Retali Meets FreakyT Christmas Special Sex</h2>
                        <div className='flex flex-wrap gap-2 items-center w-[90%]'>
                          <figure className='rounded-full overflow-hidden w-9 h-9'>
                            <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                          </figure>
                          <span className='text-[13.65px] flex-1'>The Rhythm House</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center w-full md:w-4/12">
                      <span className="border border-r-0 text-[25px] w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-gray-100">-</span>
                      <span className="border border-r-0 text-[15px] w-[40px] h-[40px] flex items-center justify-center">01</span>
                      <span className="border text-[15px] w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-gray-100">+</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-10 items-center md:w-3/12 justify-end absolute md:relative right-4 bottom-[2rem] md:read-only: md:right-0 md:bottom-0">
                    <h3 className="text-[#F80E0E] text-[20px] font-semibold">$19.99</h3>
                    <Button variant="outline" className="border-0 px-0 md:px-0 hover:bg-slate-200">
                      <Image src={CartRemove} alt="" />
                    </Button>
                  </div>
                </div>

                

                <div className="flex flex-wrap space-x-2 justify-end">
                  <Button variant="outline" className="text-black">Cancel</Button>
                  <Button variant="default">Proceed</Button>
                </div>
              </div>
            </div>{/* End Contest Section Listing Component */}

          </div>{/* End Right content layout */}

          <Footer />

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}
