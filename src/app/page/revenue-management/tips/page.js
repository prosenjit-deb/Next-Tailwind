"use client"

import React from 'react'
import MenuSidebar from '../../../components/sidebarwithauth/page';
import Footer from '../../../components/footer/page';
import Header from '../../../components/headerwithauth/page';

const Tips = () => {
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
          <div className="px-4 lg:px-8 py-4 flex items-center flex-wrap bg-white">
            <ul className="flex items-center">

              <li className="inline-flex items-center">
                <a href="#" className="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Home
                </a>

                <svg className="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li className="inline-flex items-center">
                <a href="#" className="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Creators
                </a>

                <svg className="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li className="inline-flex items-center">
                <a href="#" className="text-black hover:text-[#ED2227] text-sm">
                Nicolette Bloom
                </a>
              </li> 
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-8 pb-20'>

            {/* Start Club Section Header Component */}
            <div className='flex flex-wrap items-center justify-between mb-6 gap-5'>
                <h2 className='text-black font-semibold text-[24px]'>Revenue management</h2>
              </div>
              {/* End Club Section Header Component */}

            {/* Start Content Right Section Layoput */}
            <div className='w-full'>

              <div className='bg-white px-7 rounded-[9px] mb-8'>
                <ul className='flex gap-8 text-[#333] text-sm'>
                  <li className='relative py-4 text-black font-semibold after:bg-[#ED2227] after:h-[3px] after:w-full after:left-0 after:bottom-0 after:absolute cursor-pointer'>Tips</li>
                  <li className='cursor-pointer py-4'>Membership</li>
                  <li className='cursor-pointer py-4'>Club</li>
                  <li className='cursor-pointer py-4'> Custom Vid</li>
                </ul>
              </div>

              {/* Start Content Section Component */}
              <div className='w-full'>
                <h2 className='text-[20px] font-semibold text-black mb-3'>Tips</h2>
                <div>
                  <p className='mb-5 text-[#333] text-[13px] font-normal'>Tips are a great way for Members to show you their appreciation!</p>
                </div>
              </div>{/* End Content Section Grid Component */}

            </div>{/* End Content Right Section Layoput */}

          </div>{/* End Right content layout */}

          {/* Start Footer Component */}
          <Footer />
          {/* End Footer Component */}

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}

export default Tips