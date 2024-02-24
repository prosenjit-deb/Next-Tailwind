"use client"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import MenuSidebar from './../../../components/sidebarwithauth/page';
import Footer from './../../../components/footer/page';
import HeaderWithAuth from './../../../components/headerwithauth/page';

import ContentImg from './../../../../assets/images/phone-hand-image.png';

import "react-circular-progressbar/dist/styles.css";
import { Button } from "@/components/ui/button";

export default function Dashboard({ serviceTab, index }) {

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


          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-8 pb-20'>

            {/* Start Club Section Listing Component */}
            <div className='w-100 mb-9'>

              {/* Start Club Section Header Component */}
              <div className='flex flex-wrap items-center justify-between mb-6 gap-5'>
                <h2 className='text-black font-semibold text-[24px]'>Videos</h2>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex flex-wrap items-center gap-1">
                    <span className='text-sm text-black font-normal'>Uploading (3)</span>
                    <div className="w-10 h-10 flex-1">
                        <CircularProgressbar
                          value={42}
                          text={`42%`}
                          className="w-[37px]] h-[37px]"
                          strokeWidth={1}
                          styles={buildStyles({
                            textSize: '30px',
                            pathTransitionDuration: 0.5,
                            pathColor: `#FFA800`,
                            textColor: '#FFA800',
                            trailColor: '#9C7936',
                          })}
                        />
                    </div>
                  </div>
                  <Label className="h-10 border border-[#ED2028] w-[130px] flex items-center justify-center text-sm text-[#ED2028] font-semibold rounded-[28px] hover:bg-[#ED2028] hover:text-white cursor-pointer" htmlFor="picture">Upload video</Label>
                  <Input id="picture" type="file" className="hidden" />
                </div>
              </div>
              {/* End Club Section Header Component */}

              <div className="mb-2">
                <h3 className="text-[15px] text-black font-semibold">
                Your videos <span className="text-[#ED2227]">(12)</span>
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
                    <div className="flex flex-wrap justify-between gap-3 items-center">
                          <div className="flex flex-col">
                            <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">Category</span>
                            <h3 className='text-[15px] text-black font-medium'>Title</h3>
                          </div>
                          <span className="text-[24px] text-black font-semibold">$18</span>
                    </div>
                    <p className="text-[#545357] text-sm tracking-wider mb-5">Boss Lady, Naughty Girl, Fetish Model</p>
                    <div className="flex">
                      <Button variant="outline" className="border-[#C7C7C7] text-black xl:px-4 h-[34px] md:h-[34px]">Edit Vid</Button>
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
                    <div className="flex flex-wrap justify-between gap-3 items-center">
                          <div className="flex flex-col">
                            <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">Category</span>
                            <h3 className='text-[15px] text-black font-medium'>Title</h3>
                          </div>
                          <span className="text-[24px] text-black font-semibold">$18</span>
                    </div>
                    <p className="text-[#545357] text-sm tracking-wider mb-5">Boss Lady, Naughty Girl, Fetish Model</p>
                    <div className="flex">
                      <Button variant="outline" className="border-[#C7C7C7] text-black xl:px-4 h-[34px] md:h-[34px]">Edit Vid</Button>
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
                    <div className="flex flex-wrap justify-between gap-3 items-center">
                          <div className="flex flex-col">
                            <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">Category</span>
                            <h3 className='text-[15px] text-black font-medium'>Title</h3>
                          </div>
                          <span className="text-[24px] text-black font-semibold">$18</span>
                    </div>
                    <p className="text-[#545357] text-sm tracking-wider mb-5">Boss Lady, Naughty Girl, Fetish Model</p>
                    <div className="flex">
                      <Button variant="outline" className="border-[#C7C7C7] text-black xl:px-4 h-[34px] md:h-[34px]">Edit Vid</Button>
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
                    <div className="flex flex-wrap justify-between gap-3 items-center">
                          <div className="flex flex-col">
                            <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">Category</span>
                            <h3 className='text-[15px] text-black font-medium'>Title</h3>
                          </div>
                          <span className="text-[24px] text-black font-semibold">$18</span>
                    </div>
                    <p className="text-[#545357] text-sm tracking-wider mb-5">Boss Lady, Naughty Girl, Fetish Model</p>
                    <div className="flex">
                      <Button variant="outline" className="border-[#C7C7C7] text-black xl:px-4 h-[34px] md:h-[34px]">Edit Vid</Button>
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
                    <div className="flex flex-wrap justify-between gap-3 items-center">
                          <div className="flex flex-col">
                            <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">Category</span>
                            <h3 className='text-[15px] text-black font-medium'>Title</h3>
                          </div>
                          <span className="text-[24px] text-black font-semibold">$18</span>
                    </div>
                    <p className="text-[#545357] text-sm tracking-wider mb-5">Boss Lady, Naughty Girl, Fetish Model</p>
                    <div className="flex">
                      <Button variant="outline" className="border-[#C7C7C7] text-black xl:px-4 h-[34px] md:h-[34px]">Edit Vid</Button>
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
                    <div className="flex flex-wrap justify-between gap-3 items-center">
                          <div className="flex flex-col">
                            <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">Category</span>
                            <h3 className='text-[15px] text-black font-medium'>Title</h3>
                          </div>
                          <span className="text-[24px] text-black font-semibold">$18</span>
                    </div>
                    <p className="text-[#545357] text-sm tracking-wider mb-5">Boss Lady, Naughty Girl, Fetish Model</p>
                    <div className="flex">
                      <Button variant="outline" className="border-[#C7C7C7] text-black xl:px-4 h-[34px] md:h-[34px]">Edit Vid</Button>
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
                    <div className="flex flex-wrap justify-between gap-3 items-center">
                          <div className="flex flex-col">
                            <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">Category</span>
                            <h3 className='text-[15px] text-black font-medium'>Title</h3>
                          </div>
                          <span className="text-[24px] text-black font-semibold">$18</span>
                    </div>
                    <p className="text-[#545357] text-sm tracking-wider mb-5">Boss Lady, Naughty Girl, Fetish Model</p>
                    <div className="flex">
                      <Button variant="outline" className="border-[#C7C7C7] text-black xl:px-4 h-[34px] md:h-[34px]">Edit Vid</Button>
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
                    <div className="flex flex-wrap justify-between gap-3 items-center">
                          <div className="flex flex-col">
                            <span className="text-sm text-[#545357] font-normal uppercase tracking-wider block">Category</span>
                            <h3 className='text-[15px] text-black font-medium'>Title</h3>
                          </div>
                          <span className="text-[24px] text-black font-semibold">$18</span>
                    </div>
                    <p className="text-[#545357] text-sm tracking-wider mb-5">Boss Lady, Naughty Girl, Fetish Model</p>
                    <div className="flex">
                      <Button variant="outline" className="border-[#C7C7C7] text-black xl:px-4 h-[34px] md:h-[34px]">Edit Vid</Button>
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
