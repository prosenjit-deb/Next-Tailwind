import * as React from "react";
import Image from 'next/image'
import Sitelogo from './../../../assets/images/site-logo.png';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SearchIcon from './../../../assets/images/icons/search-icon.svg';
import HeaderCartIcon from './../../../assets/images/icons/header-cart-icon.svg';




export default function header() {

    return (
      <header className='bg-black p-4 w-full flex flex-wrap justify-between items-center fixed z-[4]'>
        <div className='w-full mb-4 md:w-auto md:mb-0'>
          <a href="#" className='flex justify-center'>
            <Image src={Sitelogo} alt="" />
          </a>
        </div>
        <div className="w-full md:w-auto flex-1 flex flex-wrap justify-end items-center gap-5 xl:gap-16">
          <div className='flex-1 max-w-[554px] relative h-[37px] '>
            <Input type="text" placeholder="Search here..." className="bg-[#414040] h-[37px] border-0 rounded-[28px] text-[#A1A1A1] text-[13px] px-6 py-2 focus:ring-0 focus:border-0 focus:shadow-none placeholder:text-[#A1A1A1]" />
            <span className="absolute bg-transparent p-0 right-4 top-1/2 -translate-y-1/2 cursor-pointer">
              <Image src={SearchIcon} alt="" className="hover:scale-110 transition ease-in-out delay-100" />
            </span>
          </div>
          <div className='flex flex-wrap items-center gap-6'>
            <div className="flex-1 hover:scale-110 transition ease-in-out delay-100 cursor-pointer">
              <Image src={HeaderCartIcon} alt="" />
            </div>
            <div className='flex flex-wrap gap-2'>
              <Button variant="outline" className="flex-1 text-white">Subscription</Button>
              <Button variant="link" className="flex-1">Sign In</Button>
              <Button variant="default" className="flex-1">Join Now</Button>
            </div>
          </div>
        </div>
      </header>
    )
}