import Image from 'next/image'
import { Button } from "@/components/ui/button"


import MenuSidebar from './../../components/sidebar/page';
import Footer from './../../components/footer/page';
import Header from './../../components/header/page';

import RedGradient from './../../../assets/images/red-gr-contest-grid.png';
import ContestCalender from './../../../assets/images/icons/contest-calender.svg';
import ContestCash from './../../../assets/images/icons/contest-cash.svg';


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
                <a href="#" class="text-black hover:text-[#ED2227] text-sm">
                Contests
                </a>
              </li>
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-5 pb-20'>

            {/* Start Contest Section Listing Component */}
            <div className='w-100 mb-9'>

              <div className='border-b border-[#C5C5C5] px-7 ps-0 rounded-[9px] mb-9'>
                <ul className='flex gap-8 text-[#333] text-sm'>
                  <li className=' relative py-4 text-black font-semibold after:bg-[#ED2227] after:h-[3px] after:w-full after:left-0 after:bottom-0 after:absolute cursor-pointer'>Active Contests </li>
                  <li className='cursor-pointer py-4'> Past Contests</li>
                </ul>
              </div>

              {/* Start Contest Section Grid Component */}
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='relative max-h-[209px] overflow-hidden'>
                    <Image src={RedGradient} alt='' className='w-full h-full object-cover' />
                    <div className='w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-between pt-8 pb-10 px-8'>
                      <div className='relative'>
                        <h2 className='text-[1.8rem] xl:text-[2rem] text-white font-bold uppercase mb-4'>Creator of the Year</h2>
                        <h3 className='text-[18px] text-white'>$25,000 in Cash</h3>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-7 p-6 pt-4'>
                    <div className='flex flex-col'>
                      <h4 className='text-[20px] leading-10 font-semibold text-black uppercase'>Creator of The Year</h4>
                      <p className='mb-0'>Our most prestigious award of all, given to the Creator who best exemplifies the Pornyo spirit!</p>
                    </div>
                    <ul className='flex flex-col gap-4'>
                      <li className='flex flex-wrap items-center gap-3'>
                        <Image src={ContestCalender} alt='' />
                        <span className='text-[15px] text-black font-medium'>03 Jan, 24 - 13 Jan, 24</span>
                      </li>
                      <li className='flex flex-wrap items-center gap-3'>
                        <Image src={ContestCash} alt='' />
                        <span className='text-[15px] text-black font-medium'>$25,000 in Cash</span>
                      </li>
                    </ul>
                    <Button variant="default" className="max-w-[134px]">View Details</Button>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='relative max-h-[209px] overflow-hidden'>
                    <Image src={RedGradient} alt='' className='w-full h-full object-cover' />
                    <div className='w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-between pt-8 pb-10 px-8'>
                      <div className='relative'>
                        <h2 className='text-[1.8rem] xl:text-[2rem] text-white font-bold uppercase mb-4'>Creator of the Year</h2>
                        <h3 className='text-[18px] text-white'>$25,000 in Cash</h3>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-7 p-6 pt-4'>
                    <div className='flex flex-col'>
                      <h4 className='text-[20px] leading-10 font-semibold text-black uppercase'>Creator of The Year</h4>
                      <p className='mb-0'>Our most prestigious award of all, given to the Creator who best exemplifies the Pornyo spirit!</p>
                    </div>
                    <ul className='flex flex-col gap-4'>
                      <li className='flex flex-wrap items-center gap-3'>
                        <Image src={ContestCalender} alt='' />
                        <span className='text-[15px] text-black font-medium'>03 Jan, 24 - 13 Jan, 24</span>
                      </li>
                      <li className='flex flex-wrap items-center gap-3'>
                        <Image src={ContestCash} alt='' />
                        <span className='text-[15px] text-black font-medium'>$25,000 in Cash</span>
                      </li>
                    </ul>
                    <Button variant="default" className="max-w-[134px]">View Details</Button>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='relative max-h-[209px] overflow-hidden'>
                    <Image src={RedGradient} alt='' className='w-full h-full object-cover' />
                    <div className='w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-between pt-8 pb-10 px-8'>
                      <div className='relative'>
                        <h2 className='text-[1.8rem] xl:text-[2rem] text-white font-bold uppercase mb-4'>Creator of the Year</h2>
                        <h3 className='text-[18px] text-white'>$25,000 in Cash</h3>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-7 p-6 pt-4'>
                    <div className='flex flex-col'>
                      <h4 className='text-[20px] leading-10 font-semibold text-black uppercase'>Creator of The Year</h4>
                      <p className='mb-0'>Our most prestigious award of all, given to the Creator who best exemplifies the Pornyo spirit!</p>
                    </div>
                    <ul className='flex flex-col gap-4'>
                      <li className='flex flex-wrap items-center gap-3'>
                        <Image src={ContestCalender} alt='' />
                        <span className='text-[15px] text-black font-medium'>03 Jan, 24 - 13 Jan, 24</span>
                      </li>
                      <li className='flex flex-wrap items-center gap-3'>
                        <Image src={ContestCash} alt='' />
                        <span className='text-[15px] text-black font-medium'>$25,000 in Cash</span>
                      </li>
                    </ul>
                    <Button variant="default" className="max-w-[134px]">View Details</Button>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='relative max-h-[209px] overflow-hidden'>
                    <Image src={RedGradient} alt='' className='w-full h-full object-cover' />
                    <div className='w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-between pt-8 pb-10 px-8'>
                      <div className='relative'>
                        <h2 className='text-[1.8rem] xl:text-[2rem] text-white font-bold uppercase mb-4'>Creator of the Year</h2>
                        <h3 className='text-[18px] text-white'>$25,000 in Cash</h3>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-7 p-6 pt-4'>
                    <div className='flex flex-col'>
                      <h4 className='text-[20px] leading-10 font-semibold text-black uppercase'>Creator of The Year</h4>
                      <p className='mb-0'>Our most prestigious award of all, given to the Creator who best exemplifies the Pornyo spirit!</p>
                    </div>
                    <ul className='flex flex-col gap-4'>
                      <li className='flex flex-wrap items-center gap-3'>
                        <Image src={ContestCalender} alt='' />
                        <span className='text-[15px] text-black font-medium'>03 Jan, 24 - 13 Jan, 24</span>
                      </li>
                      <li className='flex flex-wrap items-center gap-3'>
                        <Image src={ContestCash} alt='' />
                        <span className='text-[15px] text-black font-medium'>$25,000 in Cash</span>
                      </li>
                    </ul>
                    <Button variant="default" className="max-w-[134px]">View Details</Button>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='relative max-h-[209px] overflow-hidden'>
                    <Image src={RedGradient} alt='' className='w-full h-full object-cover' />
                    <div className='w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-between pt-8 pb-10 px-8'>
                      <div className='relative'>
                        <h2 className='text-[1.8rem] xl:text-[2rem] text-white font-bold uppercase mb-4'>Creator of the Year</h2>
                        <h3 className='text-[18px] text-white'>$25,000 in Cash</h3>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-7 p-6 pt-4'>
                    <div className='flex flex-col'>
                      <h4 className='text-[20px] leading-10 font-semibold text-black uppercase'>Creator of The Year</h4>
                      <p className='mb-0'>Our most prestigious award of all, given to the Creator who best exemplifies the Pornyo spirit!</p>
                    </div>
                    <ul className='flex flex-col gap-4'>
                      <li className='flex flex-wrap items-center gap-3'>
                        <Image src={ContestCalender} alt='' />
                        <span className='text-[15px] text-black font-medium'>03 Jan, 24 - 13 Jan, 24</span>
                      </li>
                      <li className='flex flex-wrap items-center gap-3'>
                        <Image src={ContestCash} alt='' />
                        <span className='text-[15px] text-black font-medium'>$25,000 in Cash</span>
                      </li>
                    </ul>
                    <Button variant="default" className="max-w-[134px]">View Details</Button>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='relative max-h-[209px] overflow-hidden'>
                    <Image src={RedGradient} alt='' className='w-full h-full object-cover' />
                    <div className='w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-between pt-8 pb-10 px-8'>
                      <div className='relative'>
                        <h2 className='text-[1.8rem] xl:text-[2rem] text-white font-bold uppercase mb-4'>Creator of the Year</h2>
                        <h3 className='text-[18px] text-white'>$25,000 in Cash</h3>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-7 p-6 pt-4'>
                    <div className='flex flex-col'>
                      <h4 className='text-[20px] leading-10 font-semibold text-black uppercase'>Creator of The Year</h4>
                      <p className='mb-0'>Our most prestigious award of all, given to the Creator who best exemplifies the Pornyo spirit!</p>
                    </div>
                    <ul className='flex flex-col gap-4'>
                      <li className='flex flex-wrap items-center gap-3'>
                        <Image src={ContestCalender} alt='' />
                        <span className='text-[15px] text-black font-medium'>03 Jan, 24 - 13 Jan, 24</span>
                      </li>
                      <li className='flex flex-wrap items-center gap-3'>
                        <Image src={ContestCash} alt='' />
                        <span className='text-[15px] text-black font-medium'>$25,000 in Cash</span>
                      </li>
                    </ul>
                    <Button variant="default" className="max-w-[134px]">View Details</Button>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

              </div>{/* End Contest Section Grid Component */}

            </div>{/* End Contest Section Listing Component */}

          </div>{/* End Right content layout */}

          <Footer />

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}
