"use client"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import MenuSidebar from '../../../components/sidebarwithauth/page';
import Footer from '../../../components/footer/page';
import HeaderWithAuth from '../../../components/headerwithauth/page';

import ContentImg from './../../../../assets/images/phone-hand-image.png';

import "react-circular-progressbar/dist/styles.css";
import { Button } from "@/components/ui/button";

export default function Storeitem() {

  return (
    <main className="min-h-screen bg-bodyBg">
      {/* Start Header Component */}
      <HeaderWithAuth />
      {/* End Header Component */}

      {/* Start Page layout */}
      <div className='flex flex-wrap w-full pt-12 md:pt-0'>

        {/* Start SideMenuBar Component */}
        <MenuSidebar />
        {/* End SideMenuBar Component */}

        {/* Start Right panel Page layout */}
        <div className='w-full lg:ms-[240px] pt-20 flex flex-col h-screen'>

          {/* Start Breadcrumb Component */}
          <div class="px-8 py-4 flex items-center flex-wrap bg-white">
            <ul class="flex items-center">

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Home
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Dashboard
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-black hover:text-[#ED2227] text-sm">
                Store item
                </a>
              </li>
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-8 pb-20'>

            {/* Start Club Section Listing Component */}
            <div className='w-100 mb-9'>

              {/* Start Club Section Header Component */}
              <div className='flex flex-wrap items-center justify-between mb-6 gap-5'>
                <h2 className='text-black font-semibold text-[24px]'>Store Items</h2>
                <div className="flex flex-wrap items-center gap-3">
                  <Label className="h-10 border border-[#ED2028] px-4 flex items-center justify-center text-sm text-[#ED2028] uppercase font-semibold rounded-[28px] hover:bg-[#ED2028] hover:text-white cursor-pointer" htmlFor="picture">Upload store item</Label>
                  <Input id="picture" type="file" className="hidden" />
                </div>
              </div>
              {/* End Club Section Header Component */}

              <div className="mb-2">
                <h3 className="text-[15px] text-black font-semibold">
                Items <span className="text-[#ED2227]">(12)</span>
                </h3>
              </div>

              {/* Start Club Section Grid Component */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>

                {/* Start Each Video Grid Component */}
                <div className=' relative'>
                  <div className='w-full h-[180px] overflow-hidden relative rounded-10'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='w-full relative pt-3'>
                    <div className="flex flex-wrap justify-between gap-3 items-start">
                      <div className="flex flex-col">
                        <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">QTY 46</span>
                        <h3 className='text-[15px] text-black font-medium mb-3'>Dick Rating Video</h3>
                        <div className="flex">
                          <Button variant="outline" className="border-[#C7C7C7] text-[13px] text-black xl:px-4 h-[34px] md:h-[34px]">Edit item</Button>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[18px] text-clED2227 font-semibold text-right mb-0 leading-none">$8.99</span>
                        <small className="text-[#545357] text-sm font-normal text-right line-through">$9.99</small>
                        <small className="text-sm text-[#ED2227] font-semibold text-right">Save 10%</small>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className=' relative'>
                  <div className='w-full h-[180px] overflow-hidden relative rounded-10'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='w-full relative pt-3'>
                    <div className="flex flex-wrap justify-between gap-3 items-start">
                      <div className="flex flex-col">
                        <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">QTY 46</span>
                        <h3 className='text-[15px] text-black font-medium mb-3'>Dick Rating Video</h3>
                        <div className="flex">
                          <Button variant="outline" className="border-[#C7C7C7] text-[13px] text-black xl:px-4 h-[34px] md:h-[34px]">Edit item</Button>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[18px] text-clED2227 font-semibold text-right mb-0 leading-none">$8.99</span>
                        <small className="text-[#545357] text-sm font-normal text-right line-through">$9.99</small>
                        <small className="text-sm text-[#ED2227] font-semibold text-right">Save 10%</small>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className=' relative'>
                  <div className='w-full h-[180px] overflow-hidden relative rounded-10'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='w-full relative pt-3'>
                    <div className="flex flex-wrap justify-between gap-3 items-start">
                      <div className="flex flex-col">
                        <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">QTY 46</span>
                        <h3 className='text-[15px] text-black font-medium mb-3'>Dick Rating Video</h3>
                        <div className="flex">
                          <Button variant="outline" className="border-[#C7C7C7] text-[13px] text-black xl:px-4 h-[34px] md:h-[34px]">Edit item</Button>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[18px] text-clED2227 font-semibold text-right mb-0 leading-none">$8.99</span>
                        <small className="text-[#545357] text-sm font-normal text-right line-through">$9.99</small>
                        <small className="text-sm text-[#ED2227] font-semibold text-right">Save 10%</small>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className=' relative'>
                  <div className='w-full h-[180px] overflow-hidden relative rounded-10'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='w-full relative pt-3'>
                    <div className="flex flex-wrap justify-between gap-3 items-start">
                      <div className="flex flex-col">
                        <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">QTY 46</span>
                        <h3 className='text-[15px] text-black font-medium mb-3'>Dick Rating Video</h3>
                        <div className="flex">
                          <Button variant="outline" className="border-[#C7C7C7] text-[13px] text-black xl:px-4 h-[34px] md:h-[34px]">Edit item</Button>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[18px] text-clED2227 font-semibold text-right mb-0 leading-none">$8.99</span>
                        <small className="text-[#545357] text-sm font-normal text-right line-through">$9.99</small>
                        <small className="text-sm text-[#ED2227] font-semibold text-right">Save 10%</small>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className=' relative'>
                  <div className='w-full h-[180px] overflow-hidden relative rounded-10'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='w-full relative pt-3'>
                    <div className="flex flex-wrap justify-between gap-3 items-start">
                      <div className="flex flex-col">
                        <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">QTY 46</span>
                        <h3 className='text-[15px] text-black font-medium mb-3'>Dick Rating Video</h3>
                        <div className="flex">
                          <Button variant="outline" className="border-[#C7C7C7] text-[13px] text-black xl:px-4 h-[34px] md:h-[34px]">Edit item</Button>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[18px] text-clED2227 font-semibold text-right mb-0 leading-none">$8.99</span>
                        <small className="text-[#545357] text-sm font-normal text-right line-through">$9.99</small>
                        <small className="text-sm text-[#ED2227] font-semibold text-right">Save 10%</small>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className=' relative'>
                  <div className='w-full h-[180px] overflow-hidden relative rounded-10'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='w-full relative pt-3'>
                    <div className="flex flex-wrap justify-between gap-3 items-start">
                      <div className="flex flex-col">
                        <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">QTY 46</span>
                        <h3 className='text-[15px] text-black font-medium mb-3'>Dick Rating Video</h3>
                        <div className="flex">
                          <Button variant="outline" className="border-[#C7C7C7] text-[13px] text-black xl:px-4 h-[34px] md:h-[34px]">Edit item</Button>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[18px] text-clED2227 font-semibold text-right mb-0 leading-none">$8.99</span>
                        <small className="text-[#545357] text-sm font-normal text-right line-through">$9.99</small>
                        <small className="text-sm text-[#ED2227] font-semibold text-right">Save 10%</small>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className=' relative'>
                  <div className='w-full h-[180px] overflow-hidden relative rounded-10'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='w-full relative pt-3'>
                    <div className="flex flex-wrap justify-between gap-3 items-start">
                      <div className="flex flex-col">
                        <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">QTY 46</span>
                        <h3 className='text-[15px] text-black font-medium mb-3'>Dick Rating Video</h3>
                        <div className="flex">
                          <Button variant="outline" className="border-[#C7C7C7] text-[13px] text-black xl:px-4 h-[34px] md:h-[34px]">Edit item</Button>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[18px] text-clED2227 font-semibold text-right mb-0 leading-none">$8.99</span>
                        <small className="text-[#545357] text-sm font-normal text-right line-through">$9.99</small>
                        <small className="text-sm text-[#ED2227] font-semibold text-right">Save 10%</small>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className=' relative'>
                  <div className='w-full h-[180px] overflow-hidden relative rounded-10'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='w-full relative pt-3'>
                    <div className="flex flex-wrap justify-between gap-3 items-start">
                      <div className="flex flex-col">
                        <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">QTY 46</span>
                        <h3 className='text-[15px] text-black font-medium mb-3'>Dick Rating Video</h3>
                        <div className="flex">
                          <Button variant="outline" className="border-[#C7C7C7] text-[13px] text-black xl:px-4 h-[34px] md:h-[34px]">Edit item</Button>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[18px] text-clED2227 font-semibold text-right mb-0 leading-none">$8.99</span>
                        <small className="text-[#545357] text-sm font-normal text-right line-through">$9.99</small>
                        <small className="text-sm text-[#ED2227] font-semibold text-right">Save 10%</small>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

              </div>{/* End Club Section Grid Component */}

            </div>{/* End Club Section Listing Component */}

          </div>{/* End Right content layout */}

          {/* Start Footer Component */}
          <Footer />{/* End Footer Component */}

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}
