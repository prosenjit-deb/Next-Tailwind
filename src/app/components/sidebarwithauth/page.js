import * as React from "react";
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";

import HomeIcon from './../../../assets/images/icons/sidebar/home-icon.svg';
import VideoIcon from './../../../assets/images/icons/sidebar/video-icon.svg';
import ClubsIcon from './../../../assets/images/icons/sidebar/clubs-icon.svg';
import liveIcon from './../../../assets/images/icons/sidebar/live-icon.svg';
import CreatorsIcon from './../../../assets/images/icons/sidebar/creators-icon.svg';
import ContestIcon from './../../../assets/images/icons/sidebar/contest-icon.svg';
import FetishIcon from './../../../assets/images/icons/sidebar/fetish-icon.svg';
import DashboardIcon from './../../../assets/images/icons/sidebar/dashboard-icon.svg';
import NewsIcon from './../../../assets/images/icons/sidebar/news-icon.svg';
import HelpIcon from './../../../assets/images/icons/sidebar/help-icon.svg';
import BenefitsIcon from './../../../assets/images/icons/sidebar/benefits-icon.svg';
import SubscriptionIcon from './../../../assets/images/icons/sidebar/subscription-icon.svg';
import ProfileOverview from './../../../assets/images/icons/sidebar/profile-overview.svg';
import GoLive from './../../../assets/images/icons/sidebar/go-live-icon.svg';
import ClubIcon from './../../../assets/images/icons/sidebar/club-icon.svg';
import PerformanceInsight from './../../../assets/images/icons/sidebar/performance-insight-icon.svg';
import SubVideoIcon from './../../../assets/images/icons/sidebar/sub-video-icon.svg';
import StoreItem from './../../../assets/images/icons/sidebar/store-item-icon.svg';
import Revenue from './../../../assets/images/icons/sidebar/revenue-icon.svg';
import EarningHistory from './../../../assets/images/icons/sidebar/earning-history.svg';
import Communication from './../../../assets/images/icons/sidebar/communication-icon.svg';
import FundMe from './../../../assets/images/icons/sidebar/Fund-me-icon.svg';
import Contest from './../../../assets/images/icons/sidebar/contest-sub-icon.svg';
import CustomVideos from './../../../assets/images/icons/sidebar/custom-videos-icon.svg';
import Membership from './../../../assets/images/icons/sidebar/membership-icon.svg';
import Settings from './../../../assets/images/icons/sidebar/settings-icon.svg';



export default function sortComponent() {

    return (
      <div className=' bg-white py-2 h-screen c-sideBar fixed left-0 top-20 flex-col justify-between pb-28 hidden lg:flex w-[240px] max-h-screen overflow-auto gap-20'>
        <ul className='flex flex-wrap flex-col'>
          <li
            className='transition ease-in-out delay-150 leading-none'>
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
            className='transition ease-in-out delay-150 leading-none active'>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-0 bg-[#F9F9F9]">
                <AccordionTrigger className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                  <figure><Image src={DashboardIcon} alt="" /></figure>
                  Dashboard
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <ul className='flex flex-wrap flex-col bg-white border border-[#F2F2F2] rounded-10'>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-2 text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={ProfileOverview} alt="" /></figure> Profile Overview
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-2 text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={GoLive} alt="" /></figure> Go Live
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-2 text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={ClubIcon} alt="" /></figure> Club
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-2 text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={PerformanceInsight} alt="" /></figure> Performance Insight
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none active'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-2 text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={SubVideoIcon} alt="" /></figure> Videos
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-2 text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={StoreItem} alt="" /></figure> Store Item
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-2 text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={Revenue} alt="" /></figure> Revenue management
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-2 text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={EarningHistory} alt="" /></figure> Earning History
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-2 text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={Communication} alt="" /></figure> Communication
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-2 text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={FundMe} alt="" /></figure> Fund Me
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-2 text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={Contest} alt="" /></figure> Contest
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-2 text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={CustomVideos} alt="" /></figure> Custom Videos
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={Membership} alt="" /></figure> Membership
                      </Button>
                    </li>
                    <li
                      className='transition ease-in-out delay-150 leading-none'>
                      <Button className="w-full justify-start border-0 inline-flex flex-wrap gap-3 items-center px-4 md:px-4 py-[10px] text-text333 font-medium text-sm capitalize h-auto md:h-auto">
                        <figure><Image src={Settings} alt="" /></figure> Settings
                      </Button>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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