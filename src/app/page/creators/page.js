import Image from 'next/image'

import Filter from '../../components/filter/page';
import Sorting from './../../components/sorting/page';
import MenuSidebar from './../../components/sidebar/page';
import Footer from './../../components/footer/page';
import Header from './../../components/header/page';
import Pagination from './../../components/pagination/page';

import ContentImg from './../../../assets/images/phone-hand-image.png';

export default function Creators() {
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
          <div class="px-4 lg:px-8 py-4 flex items-center flex-wrap">
            <ul class="flex items-center">

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Home
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-black hover:text-[#ED2227] text-sm">
                Creators
                </a>
              </li>
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-8 pb-20 flex flex-wrap gap-7'>

            <div className='w-full lg:w-4/12 xl:w-3/12'>
              <Filter />
            </div>

            {/* Start Creators Section Listing Component */}
            <div className='flex-1 w-full lg:w-8/12 xl:w-9/12'>

              {/* Start Creators Section Header Component */}
              <div className='flex flex-wrap items-center justify-between mb-5'>
                <h2 className=' uppercase text-black font-semibold text-[16px]'>Creators (9,599)</h2>
                <div>
                  <Sorting />
                </div>
              </div>
              {/* End Creators Section Header Component */}

              {/* Start Creators Section Grid Component */}
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}
                
                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}
                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}

                {/* Start Each Creators Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[150px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='bg-white w-full relative px-4 pt-4 pb-4 text-center'>
                    <h3 className='text-[15px] text-black font-semibold'>Sydney Harwin</h3>
                  </div>
                </div>
                {/* Start Each Creators Grid Component */}
                
              </div>{/* End Creators Section Grid Component */}

              <Pagination />

            </div>{/* End Creators Section Listing Component */}

          </div>{/* End Right content layout */}

          {/* Start Footer Component */}
          <Footer />{/* End Footer Component */}

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}
