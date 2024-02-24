import * as React from "react";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import HomeIcon from './../../../assets/images/icons/sidebar/home-icon.svg';
import VideoIcon from './../../../assets/images/icons/sidebar/video-icon.svg';
import ClubsIcon from './../../../assets/images/icons/sidebar/clubs-icon.svg';
import liveIcon from './../../../assets/images/icons/sidebar/live-icon.svg';
import CreatorsIcon from './../../../assets/images/icons/sidebar/creators-icon.svg';
import ContestIcon from './../../../assets/images/icons/sidebar/contest-icon.svg';
import FetishIcon from './../../../assets/images/icons/sidebar/fetish-icon.svg';
import SigninIcon from './../../../assets/images/icons/sidebar/signin-icon.svg';
import CreateAccountIcon from './../../../assets/images/icons/sidebar/create-account-icon.svg';
import NewsIcon from './../../../assets/images/icons/sidebar/news-icon.svg';
import HelpIcon from './../../../assets/images/icons/sidebar/help-icon.svg';
import BenefitsIcon from './../../../assets/images/icons/sidebar/benefits-icon.svg';
import SubscriptionIcon from './../../../assets/images/icons/sidebar/subscription-icon.svg';


export default function sortComponent() {

    return (
      <div className=' bg-white py-2 h-screen c-sideBar fixed left-0 top-20 flex-col justify-between pb-28 hidden lg:flex w-[240px] max-h-screen overflow-auto gap-20'>
        <ul className='flex flex-wrap flex-col'>
          <li
            className='transition ease-in-out delay-150 active leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={HomeIcon} alt="" /></figure> Home
            </Button>
          </li>
          <li
            className='transition ease-in-out delay-150 leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={VideoIcon} alt="" /></figure> Videos
            </Button>
          </li>
          <li
            className='transition ease-in-out delay-150 leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={ClubsIcon} alt="" /></figure> Clubs
            </Button>
          </li>
          <li
            className='transition ease-in-out delay-150 leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={liveIcon} alt="" /></figure> Live
            </Button>
          </li>
          <li
            className='transition ease-in-out delay-150 leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={CreatorsIcon} alt="" /></figure> Creators
            </Button>
          </li>
          <li
            className='transition ease-in-out delay-150 leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={ContestIcon} alt="" /></figure> Contests
            </Button>
          </li>
          <li
            className='transition ease-in-out delay-150 leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={FetishIcon} alt="" /></figure> Fetish
            </Button>
          </li>
          <li
            className='transition ease-in-out delay-150 leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={SigninIcon} alt="" /></figure> Sign In
            </Button>
          </li>
          <li
            className='transition ease-in-out delay-150 leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={CreateAccountIcon} alt="" /></figure> Create an Account
            </Button>
          </li>
          <li
            className='transition ease-in-out delay-150 leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={NewsIcon} alt="" /></figure> News
            </Button>
          </li>
          <li
            className='transition ease-in-out delay-150 leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={HelpIcon} alt="" /></figure> Help
            </Button>
          </li>
          <li
            className='transition ease-in-out delay-150 leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={BenefitsIcon} alt="" /></figure> Benefits
            </Button>
          </li>
          <li
            className='transition ease-in-out delay-150 leading-none'>
            <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
              <figure><Image src={SubscriptionIcon} alt="" /></figure> Subscription
            </Button>
          </li>
        </ul>
        <p className=' text-[#666] text-sm font-normal max-w-[150px] mx-auto'>© 2023 Pornyo. All rights reserved.</p>
      </div>
    )
}