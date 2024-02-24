"use client"
import Image from 'next/image'

import MenuSidebar from '../../../components/sidebar/page';
import Footer from '../../../components/footer/page';
import Header from '../../../components/header/page';

import ListingArrow from './../../../../assets/images/icons/listing-red-arrow.svg';

export default function ContestViewDetails() {
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
                Contests
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Creator of The Year
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-black hover:text-[#ED2227] text-sm">
                Creator of The Year Details
                </a>
              </li>
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-5 pb-20'>

            {/* Start Contest Section Listing Component */}
            <div className='w-100 mb-9 flex flex-col gap-8'>
              <div className='flex flex-col gap-1'>
                <h1 className='text-[24px] leading-10 text-black font-semibold'>Creator of The Year</h1>
                <p className='text-[13px] leading-6 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-[18px] leading-10 text-black font-semibold'>Pre Nomination Period</h2>
                <p className='text-[13px] leading-6 mb-0'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-[18px] leading-10 text-black font-semibold'>How Will the 2024 Creator of The Year Awards Work?</h2>
                <p className='text-[13px] leading-6 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul className='text-[13px] font-medium flex flex-col leading-6 gap-2 mt-4'>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</span>
                  </li>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</span>
                  </li>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur lorem ipsum sid dolor net</span>
                  </li>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est</span>
                  </li>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Et harum quidem rerum facilis est et expedita distinctio</span>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-[18px] leading-10 text-black font-semibold'>Each Winner Will Receive</h2>
                <ul className='text-[13px] font-medium flex flex-col leading-6 gap-2 mt-4'>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</span>
                  </li>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</span>
                  </li>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur lorem ipsum sid dolor net</span>
                  </li>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est</span>
                  </li>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Et harum quidem rerum facilis est et expedita distinctio</span>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-[18px] leading-10 text-black font-semibold'>A Few Things to Keep in Mind </h2>
                <ul className='text-[13px] font-medium flex flex-col leading-6 gap-2 mt-4'>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</span>
                  </li>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</span>
                  </li>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur lorem ipsum sid dolor net</span>
                  </li>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est</span>
                  </li>
                  <li className='flex flex-wrap items-center gap-2'>
                    <Image src={ListingArrow} alt='' />
                    <span>Et harum quidem rerum facilis est et expedita distinctio</span>
                  </li>
                </ul>
                <p className='mt-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
              </div>
            </div>{/* End Contest Section Listing Component */}

          </div>{/* End Right content layout */}

          <Footer />

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}
