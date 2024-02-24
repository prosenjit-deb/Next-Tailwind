import * as React from "react";
import Image from 'next/image'
import Sitelogo from './../../../assets/images/site-logo.png';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import SearchIcon from './../../../assets/images/icons/search-icon.svg';
import HeaderCartIcon from './../../../assets/images/icons/header-cart-icon.svg';
import ProfileImg from './../../../assets/images/header-user-profile-img.png';
import MessageIcon from './../../../assets/images/icons/header-message-icon.svg';
import NotifyIcon from './../../../assets/images/icons/header-notification-icon.svg';
import VideoIcon from './../../../assets/images/icons/header-video-icon.svg';



export default function headerwithauth() {

    return (
      <header className='bg-black p-4 w-full flex flex-wrap justify-between items-center fixed z-[4] gap-20'>
        <div className=' mb-4 md:w-auto md:mb-0'>
          <a href="#" className='flex justify-center'>
            <Image src={Sitelogo} alt="" />
          </a>
        </div>
        <div className="w-full md:w-auto flex-1 flex flex-wrap justify-end items-center gap-5 xl:gap-16">
          <div className='flex-1 max-w-[554px] relative h-[37px]'>
            <Input type="text" placeholder="Search here..." className="bg-[#414040] h-[37px] border-0 rounded-[28px] text-[#A1A1A1] text-[13px] px-6 py-2 focus:ring-0 focus:border-0 focus:shadow-none placeholder:text-[#A1A1A1]" />
            <span className="absolute bg-transparent p-0 right-4 top-1/2 -translate-y-1/2 cursor-pointer">
              <Image src={SearchIcon} alt="" className="hover:scale-110 transition ease-in-out delay-100" />
            </span>
          </div>
          <div className='flex flex-wrap items-center gap-8'>
            <div className="bg-[#211216] border border-[#5D161C] bg-opacity-25 flex flex-wrap items-center gap-[10px] rounded-[6px] ps-[12px] pe-[9px] py-[4px] relative">
              <span className="bg-gradient-to-r from-[#E80B5A] to-[#ED2028] h-5 px-[9px] text-white text-sm leading-normal flex items-center justify-center uppercase rounded-[28px] absolute -top-[12px] left-2">Premium</span>
              <span className="text-white text-[22px] font-medium mt-[6px] leading-normal flex">$89</span>
              <span className="text-sm text-[#C9C9C9] max-w-[55px] ms-8 leading-normal flex">5 Months to Renew</span>
              <Button variant="outline" className="flex-1 py-2 md:h-8 md:px-4 text-white">Update</Button>
            </div>
            <div className="flex-1 cursor-pointer w-10 h-10 rounded-full flex items-center justify-center relative after:w-[1px] after:h-full after:bg-[#333] after:absolute after:-right-3">
              <Image src={HeaderCartIcon} alt="" className="hover:scale-110 transition ease-in-out delay-100" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-gradient-to-r from-[#E80B5A] to-[#ED2028] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-110 transition ease-in-out delay-100">
                <Image src={VideoIcon} alt="" />
              </div>
              <Popover>
                <PopoverTrigger>
                  <div className="bg-[#565656] rounded-full w-10 h-10 flex items-center justify-center relative cursor-pointer hover:bg-stone-500">
                    <Image src={NotifyIcon} alt="" />
                    <span className="bg-[#EA1544] rounded-full min-w-4 h-4 px-[3px] py-[2px] flex items-center justify-center text-sm text-white font-medium absolute -right-1 -top-1">4</span>
                  </div>
                </PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
              </Popover>
              <div className="bg-[#565656] rounded-full w-10 h-10 flex items-center justify-center relative cursor-pointer hover:bg-stone-500">
                <Image src={MessageIcon} alt="" />
                <span className="bg-[#EA1544] rounded-full min-w-4 h-4 px-[3px] py-[2px] flex items-center justify-center text-sm text-white font-medium absolute -right-1 -top-1">8</span>
              </div>
              <Popover>
                <PopoverTrigger className="border border-[#6C6C6C] rounded-full overflow-hidden w-11 h-11 flex items-center justify-center cursor-pointer">
                  <Image src={ProfileImg} alt="" className="border-black border-2 w-9 h-9" />
                </PopoverTrigger>
                <PopoverContent className="min-w-40 w-auto mr-2 mt-1">
                  <ul className="text-[15px]">
                    <li className="py-1 px-2 cursor-pointer hover:bg-[#f1f1f1]">Dashboard</li>
                    <li className="py-1 px-2 cursor-pointer hover:bg-[#f1f1f1]">Logout</li>
                  </ul>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </header>
    )
}