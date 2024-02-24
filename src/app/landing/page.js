import React from 'react'
import Image from 'next/image'
import Sitelogo from './../../assets/images/site-logo.png';
import LandingBG from './../../assets/images/landing-bg.jpeg';
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import Header from './../components/header/page';

import Under18icon from './../../assets/images/icons/under-18.svg';
import Over18icon from './../../assets/images/icons/over-18.svg';
import SelectedTick from './../../assets/images/icons/right-tick-white.svg';

const page = () => {
  return (
    <main className="min-h-screen bg-bodyBg">
        {/* Start Header Component */}
        <Header />
        {/* End Header Component */}
        <div className=' relative pt-12 md:pt-0'>
            <Image src={LandingBG} alt="" className='w-full h-screen object-cover'/>
            <div className='bg-[#12111F] text-center border border-[#555475] rounded-large px-2 w-11/12 md:px-16 py-12 max-w-[550px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h2 className='text-white text-[1.5rem] md:text-[1.9rem] font-semibold mb-1'>Explore Your Passions</h2>
                <p className='text-white text-[13px] font-normal'>You must be 18+ to enter. Please select your content preference</p>
                <div className='px-1 md:px-11'>
                    <div className='py-8 flex flex-wrap gap-5'>
                        <div className='group bg-[#201E32] border border-[#201E32] w-full rounded-lg flex flex-1 flex-col items-center gap-3 p-5 hover:border-[#E48596]'>
                            <span className='bg-[#575569] border border-[#575569] rounded-full flex justify-center items-center w-14 h-14 group-hover:bg-[#E48596]'>
                                <Image src={Under18icon} alt='' />
                            </span>
                            <span className='text-[#F1F1F1] text-[15px] font-normal'>I am under 18</span>
                        </div>
                        <div className='group bg-[#201E32] border border-[#E48596] w-full rounded-lg flex flex-1 flex-col items-center gap-3 p-5 relative'>
                            <div className=' absolute -top-3 -right-3 bg-[#E48596] w-8 h-8 rounded-full flex justify-center items-center'>
                                <Image src={SelectedTick} alt='' />
                            </div>
                            <span className='bg-[#E48596] border border-[#E48596] rounded-full flex justify-center items-center w-14 h-14'>
                                <Image src={Over18icon} alt='' />
                            </span>
                            <span className='text-[#F1F1F1] text-[15px] font-normal'>I am over 18</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-7 pl-1">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-[15px]] text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I agree with your tearms & conditions
                        </label>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        <Button variant="default" className='w-full'>Confirm</Button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default page
