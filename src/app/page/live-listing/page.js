import Image from 'next/image'
import { Button } from "@/components/ui/button"


import MenuSidebar from '../../components/sidebar/page';
import Footer from '../../components/footer/page';
import Header from '../../components/header/page';

import Addpeople from './../../../assets/images/icons/add-people.svg';
import ContentImg from './../../../assets/images/phone-hand-image.png';
import UserImg from './../../../assets/images/user-img-1.jpeg';
import ViewIcon from './../../../assets/images/icons/eye-icon.svg';
import LikeIcon from './../../../assets/images/icons/like-icon.svg';

export default function Custom() {
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
          <div class="px-8 py-4 flex items-center flex-wrap">
            <ul class="flex items-center">

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Home
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-black hover:text-[#ED2227] text-sm">
                Live
                </a>
              </li>
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-8 pb-20'>

            {/* Start Club Section Listing Component */}
            <div className='w-100 mb-9'>

              {/* Start Club Section Header Component */}
              <div className='flex flex-wrap items-center justify-between mb-6 gap-5'>
                <h2 className=' uppercase text-black font-semibold text-[16px]'>NOW LIVE</h2>
                <Button variant="default">View more</Button>
              </div>
              {/* End Club Section Header Component */}

              {/* Start Club Section Grid Component */}
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                  <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

              </div>{/* End Club Section Grid Component */}

            </div>{/* End Club Section Listing Component */}

            {/* Start Club Section Listing Component */}
            <div className='w-100 mb-9'>

              {/* Start Club Section Header Component */}
              <div className='flex flex-wrap items-center justify-between mb-6 gap-5'>
                <h2 className=' uppercase text-black font-semibold text-[16px]'>TOP LIVE EARNERS</h2>
                <Button variant="default">View more</Button>
              </div>
              {/* End Club Section Header Component */}

              {/* Start Club Section Grid Component */}
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[310px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className=' absolute right-3 top-3 bg-white w-8 h-8 rounded-full flex justify-center items-center'>
                      <span className='text-[#F80E0E] text-[13px]'>#1</span>
                    </div>
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-4 pb-3'>
                    <div className=' flex flex-wrap gap-2 pt-4 items-center'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <div className='flex flex-col'>
                        <span className='text-[13px] font-semibold'>The Rhythm House</span>
                        <span className='text-[13px] text-[#F80E0E] font-semibold'>$5000.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}
                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[310px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className=' absolute right-3 top-3 bg-white w-8 h-8 rounded-full flex justify-center items-center'>
                      <span className='text-[#F80E0E] text-[13px]'>#2</span>
                    </div>
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-4 pb-3'>
                    <div className=' flex flex-wrap gap-2 pt-4 items-center'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <div className='flex flex-col'>
                        <span className='text-[13px] font-semibold'>The Rhythm House</span>
                        <span className='text-[13px] text-[#F80E0E] font-semibold'>$5000.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}
                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[310px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className=' absolute right-3 top-3 bg-white w-8 h-8 rounded-full flex justify-center items-center'>
                      <span className='text-[#F80E0E] text-[13px]'>#3</span>
                    </div>
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-4 pb-3'>
                    <div className=' flex flex-wrap gap-2 pt-4 items-center'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <div className='flex flex-col'>
                        <span className='text-[13px] font-semibold'>The Rhythm House</span>
                        <span className='text-[13px] text-[#F80E0E] font-semibold'>$5000.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}
                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[310px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className=' absolute right-3 top-3 bg-white w-8 h-8 rounded-full flex justify-center items-center'>
                      <span className='text-[#F80E0E] text-[13px]'>#4</span>
                    </div>
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-4 pb-3'>
                    <div className=' flex flex-wrap gap-2 pt-4 items-center'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <div className='flex flex-col'>
                        <span className='text-[13px] font-semibold'>The Rhythm House</span>
                        <span className='text-[13px] text-[#F80E0E] font-semibold'>$5000.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}
                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[310px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className=' absolute right-3 top-3 bg-white w-8 h-8 rounded-full flex justify-center items-center'>
                      <span className='text-[#F80E0E] text-[13px]'>#5</span>
                    </div>
                    <div className='bg-black/80 py-[2px] px-2 absolute bottom-3 rounded-sm flex items-center gap-1 justify-center right-3'>
                      <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                      <span className='text-sm text-white font-medium'>Live</span>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-4 pb-3'>
                    <div className=' flex flex-wrap gap-2 pt-4 items-center'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <div className='flex flex-col'>
                        <span className='text-[13px] font-semibold'>The Rhythm House</span>
                        <span className='text-[13px] text-[#F80E0E] font-semibold'>$5000.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

              </div>{/* End Club Section Grid Component */}

            </div>{/* End Club Section Listing Component */}

            {/* Start Club Section Listing Component */}
            <div className='w-100'>

              {/* Start Club Section Header Component */}
              <div className='flex flex-wrap items-center justify-between mb-6 gap-5'>
                <h2 className=' uppercase text-black font-semibold text-[16px]'>NEWEST LIVE</h2>
                <Button variant="default">View more</Button>
              </div>
              {/* End Club Section Header Component */}

              {/* Start Club Section Grid Component */}
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='absolute bottom-3 right-3 flex items-center justify-end gap-1'>
                      <div className='bg-red-600/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center text-white text-sm'>New</div>
                      <div className='bg-black/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center'>
                        <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                        <span className='text-sm text-white font-medium'>Live</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='absolute bottom-3 right-3 flex items-center justify-end gap-1'>
                      <div className='bg-red-600/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center text-white text-sm'>New</div>
                      <div className='bg-black/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center'>
                        <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                        <span className='text-sm text-white font-medium'>Live</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='absolute bottom-3 right-3 flex items-center justify-end gap-1'>
                      <div className='bg-red-600/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center text-white text-sm'>New</div>
                      <div className='bg-black/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center'>
                        <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                        <span className='text-sm text-white font-medium'>Live</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='absolute bottom-3 right-3 flex items-center justify-end gap-1'>
                      <div className='bg-red-600/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center text-white text-sm'>New</div>
                      <div className='bg-black/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center'>
                        <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                        <span className='text-sm text-white font-medium'>Live</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='absolute bottom-3 right-3 flex items-center justify-end gap-1'>
                      <div className='bg-red-600/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center text-white text-sm'>New</div>
                      <div className='bg-black/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center'>
                        <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                        <span className='text-sm text-white font-medium'>Live</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='absolute bottom-3 right-3 flex items-center justify-end gap-1'>
                      <div className='bg-red-600/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center text-white text-sm'>New</div>
                      <div className='bg-black/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center'>
                        <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                        <span className='text-sm text-white font-medium'>Live</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='absolute bottom-3 right-3 flex items-center justify-end gap-1'>
                      <div className='bg-red-600/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center text-white text-sm'>New</div>
                      <div className='bg-black/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center'>
                        <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                        <span className='text-sm text-white font-medium'>Live</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='absolute bottom-3 right-3 flex items-center justify-end gap-1'>
                      <div className='bg-red-600/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center text-white text-sm'>New</div>
                      <div className='bg-black/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center'>
                        <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                        <span className='text-sm text-white font-medium'>Live</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='absolute bottom-3 right-3 flex items-center justify-end gap-1'>
                      <div className='bg-red-600/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center text-white text-sm'>New</div>
                      <div className='bg-black/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center'>
                        <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                        <span className='text-sm text-white font-medium'>Live</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

                {/* Start Each Video Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[205px] overflow-hidden relative'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                    <div className='absolute bottom-3 right-3 flex items-center justify-end gap-1'>
                      <div className='bg-red-600/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center text-white text-sm'>New</div>
                      <div className='bg-black/80 py-[2px] px-2 rounded-sm flex items-center gap-1 justify-center'>
                        <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                        <span className='text-sm text-white font-medium'>Live</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white w-full relative px-5 pt-3'>
                    <h3 className='text-[13px] text-black font-semibold mb-3'>Lizbeth St. Jade</h3>
                  </div>
                </div>
                {/* Start Each Video Grid Component */}

              </div>{/* End Club Section Grid Component */}

            </div>{/* End Club Section Listing Component */}

          </div>{/* End Right content layout */}

          <Footer />

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}
