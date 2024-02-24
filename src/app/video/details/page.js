import React from 'react'
import Image from 'next/image'
import Sitelogo from './../../../assets/images/site-logo.png';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import MenuSidebar from './../../components/sidebar/page';
import Footer from './../../components/footer/page';
import Header from './../../components/header/page';

import ContentImg from './../../../assets/images/phone-hand-image.png';
import UserImg from './../../../assets/images/user-img-1.jpeg';
import ViewIcon from './../../../assets/images/icons/eye-icon.svg';
import LikeIcon from './../../../assets/images/icons/like-icon.svg';
import MessageIcon from './../../../assets/images/icons/message-icon.svg';
import ReportIcon from './../../../assets/images/icons/report-icon.svg';

import MailIcon from './../../../assets/images/icons/mail-icon.svg';
import PhoneIcon from './../../../assets/images/icons/phone-icon.svg';

const page = () => {
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
        <div className='w-full ms-[195px] pt-20'>

          {/* Start Breadcrumb Component */}
          <div className="px-8 py-4 flex items-center flex-wrap bg-white">
            <ul className="flex items-center">

              <li className="inline-flex items-center">
                <a href="#" className="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Home
                </a>

                <svg className="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li className="inline-flex items-center">
                <a href="#" className="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Videos
                </a>

                <svg className="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li className="inline-flex items-center">
                <a href="#" className="text-black hover:text-[#ED2227] text-sm">
                Emma Rose Hosts Trans
                </a>
              </li> 
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-8 pt-8 pb-20 flex flex-wrap gap-7'>

            <div className='w-full lg:w-8/12 xl:w-9/12'>
                <div className='w-full h-[540px] bg-black rounded-[20px] overflow-hidden'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FkehPEl1Bug?si=_MAR3TGo93ZsoHsZ&amp;start=7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='flex flex-wrap gap-6 justify-between items-start py-8'>
                    <div className='flex-1 w-full xl:w-10/12'>
                        <h2 className='text-[24px] text-black mb-1 leading-normal'>Abella Danger Fucks Her Boyfriends Buddy</h2>
                        <ul className='text-black text-sm font-normal flex gap-2 opacity-[0.7] mb-5'>
                            <li>#Asian</li>
                            <li>#Teens (18+)</li>
                            <li>#18 & 19 Yrs Old</li>
                            <li>#Lotion/Oil Fetish</li>
                            <li>#Toilet Fetish</li>
                        </ul>
                        <ul className='flex gap-4 items-center'>
                            <li className='flex gap-1 items-center'>
                                <Image src={ViewIcon} alt='' />
                                <span className='text-[#333] text-sm font-normal'>7.2k</span>
                            </li>
                            <li className='flex gap-1 items-center'>
                                <Image src={LikeIcon} alt='' />
                                <span className='text-[#333] text-sm font-normal'>60</span>
                            </li>
                            <li className='flex gap-1 items-center'>
                                <Image src={MessageIcon} alt='' />
                                <span className='text-[#333] text-sm font-normal'>05</span>
                            </li>
                            <li className='flex gap-1 items-center border border-[#ED2227] bg-white rounded-full py-1 px-3'>
                                <Image src={ReportIcon} alt='' />
                                <span className='text-[#333] text-sm font-normal uppercase'>Report</span>
                            </li>
                            <li className='flex gap-1 items-center'>
                                <span className='text-[#333] text-sm font-normal'>Dec 19, 2023</span>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full xl:w-2/12 flex gap-4 xl:gap-0 xl:flex-col'>
                        <h3 className='text-pink text-[22px] font-semibold xl:text-right mb-3'>$19.99</h3>
                        <Button variant="default" className='w-auto'>Add to Cart</Button>
                    </div>
                </div>
                <div className='bg-white px-3 py-2 mb-5 flex flex-wrap justify-between items-center gap-2'>
                    <div className=' flex flex-wrap gap-2 items-center pt-1 px-0'>
                        <figure className='rounded-full overflow-hidden w-9 h-9'>
                            <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                        </figure>
                        <span className='text-[13.65px]'>lara_carteer</span>
                    </div>
                    <div className="text-[13px] text-black opacity-[0.7] flex divide-x divide-black divide-opacity-[0.7]">
                      <div className='px-3'>Stream and Download</div>
                      <div className='px-3'>3.29 GB</div>
                      <div className='px-3'>38m15s</div>
                      <div className='px-3'>FHD</div>
                    </div>
                </div>
                <div className='mb-8'>
                    <p>When Abella Danger's boyfriend broke up with her, she got revenge by letting his pal Brad creampie her tight pink pussy! She sucks it until it gets so hard that he's practically cumming then and there! But Abella wants it in her slit and he gives it to her good! He even holds onto her throat for an extra thrill.</p>
                </div>

                {/* Start Comments Listing Component */}
                <div className='bg-white px-8 py-6 rounded-10'>
                  <h3 className='text-[15px] text-black font-semibold mb-5'>Comments (05)</h3>
                  <div className=' flex flex-wrap gap-2 items-center pt-1 px-0 mb-3'>
                      <figure className='rounded-full overflow-hidden w-9 h-9'>
                          <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                      </figure>
                      <div className='flex-1 bg-[#F6F6F6] border border-[#E6E5E5] rounded-sm'>
                        <Input type="email" placeholder="Write your comment..." className="bg-transparent border-0" />
                      </div>
                  </div>
                  <div className='w-full'>
                    {/* Start Each Comments Component */}
                    <div className='flex justify-between items-start py-2'>
                      <div className=' flex flex-wrap gap-2 items-center pt-1 px-0 flex-1'>
                          <figure className='rounded-full overflow-hidden w-9 h-9'>
                              <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                          </figure>
                          <div className='flex flex-col'>
                            <span className='text-[11px] text-black'>@catherineowusu8082</span>
                            <span className='text-[13px] text-black font-medium'>Super Sexy Video... So Erotic... Loved It</span>
                          </div>
                      </div>
                      <div className='text-[11px] text-black pt-1'>02 Weeks Ago</div>
                    </div>{/* End Each Comments Component */}

                    {/* Start Each Comments Component */}
                    <div className='flex justify-between items-start py-2'>
                      <div className=' flex flex-wrap gap-2 items-center pt-1 px-0 flex-1'>
                          <figure className='rounded-full overflow-hidden w-9 h-9'>
                              <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                          </figure>
                          <div className='flex flex-col'>
                            <span className='text-[11px] text-black'>@catherineowusu8082</span>
                            <span className='text-[13px] text-black font-medium'>Super Sexy Video... So Erotic... Loved It</span>
                          </div>
                      </div>
                      <div className='text-[11px] text-black pt-1'>02 Weeks Ago</div>
                    </div>{/* End Each Comments Component */}

                    {/* Start Each Comments Component */}
                    <div className='flex justify-between items-start py-2'>
                      <div className=' flex flex-wrap gap-2 items-center pt-1 px-0 flex-1'>
                          <figure className='rounded-full overflow-hidden w-9 h-9'>
                              <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                          </figure>
                          <div className='flex flex-col'>
                            <span className='text-[11px] text-black'>@catherineowusu8082</span>
                            <span className='text-[13px] text-black font-medium'>Super Sexy Video... So Erotic... Loved It</span>
                          </div>
                      </div>
                      <div className='text-[11px] text-black pt-1'>02 Weeks Ago</div>
                    </div>{/* End Each Comments Component */}

                    {/* Start Each Comments Component */}
                    <div className='flex justify-between items-start py-2'>
                      <div className=' flex flex-wrap gap-2 items-center pt-1 px-0 flex-1'>
                          <figure className='rounded-full overflow-hidden w-9 h-9'>
                              <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                          </figure>
                          <div className='flex flex-col'>
                            <span className='text-[11px] text-black'>@catherineowusu8082</span>
                            <span className='text-[13px] text-black font-medium'>Super Sexy Video... So Erotic... Loved It</span>
                          </div>
                      </div>
                      <div className='text-[11px] text-black pt-1'>02 Weeks Ago</div>
                    </div>{/* End Each Comments Component */}

                    {/* Start Each Comments Component */}
                    <div className='flex justify-between items-start py-2'>
                      <div className=' flex flex-wrap gap-2 items-center pt-1 px-0 flex-1'>
                          <figure className='rounded-full overflow-hidden w-9 h-9'>
                              <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                          </figure>
                          <div className='flex flex-col'>
                            <span className='text-[11px] text-black'>@catherineowusu8082</span>
                            <span className='text-[13px] text-black font-medium'>Super Sexy Video... So Erotic... Loved It</span>
                          </div>
                      </div>
                      <div className='text-[11px] text-black pt-1'>02 Weeks Ago</div>
                    </div>{/* End Each Comments Component */}
                  </div>
                </div>{/* End Comments Listing Component */}
            </div>

            {/* Start Video Section Listing Component */}
            <div className='flex-1 w-full lg:w-4/12 xl:w-3/12'>

                {/* Start Video Section Header Component */}
                <div className='flex flex-wrap items-center justify-between mb-6'>
                    <h2 className=' uppercase text-black font-semibold text-[16px]'>RECOMMENDED VIDS</h2>
                </div>
                {/* End Video Section Header Component */}

                {/* Start Video Section Grid Component */}
                <div className='grid grid-cols-1 gap-9'>

                    {/* Start Each Video Grid Component */}
                    <div className='overflow-hidden'>
                        <div className='w-full h-[190px] overflow-hidden rounded-[10px]'>
                            <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full relative pt-4'>
                            <h3 className='text-[14px] text-black font-semibold'>Veronica Radke Tries To Fit A Huge Dick Inside</h3>
                            <div className='flex flex-wrap justify-between items-center'>
                                <div className=' flex flex-wrap gap-2 items-center pt-1 px-0'>
                                    <figure className='rounded-full overflow-hidden w-9 h-9'>
                                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                                    </figure>
                                    <span className='text-[13.65px]'>The Rhythm House</span>
                                </div>
                                <small className='text-[#F80E0E] text-[15px]'>$ 5.00</small>
                            </div>
                        </div>
                    </div>
                    {/* End Each Video Grid Component */}

                    {/* Start Each Video Grid Component */}
                    <div className='overflow-hidden'>
                        <div className='w-full h-[190px] overflow-hidden rounded-[10px]'>
                            <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full relative pt-4'>
                            <h3 className='text-[14px] text-black font-semibold'>Veronica Radke Tries To Fit A Huge Dick Inside</h3>
                            <div className='flex flex-wrap justify-between items-center'>
                                <div className=' flex flex-wrap gap-2 items-center pt-1 px-0'>
                                    <figure className='rounded-full overflow-hidden w-9 h-9'>
                                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                                    </figure>
                                    <span className='text-[13.65px]'>The Rhythm House</span>
                                </div>
                                <small className='text-[#F80E0E] text-[15px]'>$ 5.00</small>
                            </div>
                        </div>
                    </div>
                    {/* End Each Video Grid Component */}

                    {/* Start Each Video Grid Component */}
                    <div className='overflow-hidden'>
                        <div className='w-full h-[190px] overflow-hidden rounded-[10px]'>
                            <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full relative pt-4'>
                            <h3 className='text-[14px] text-black font-semibold'>Veronica Radke Tries To Fit A Huge Dick Inside</h3>
                            <div className='flex flex-wrap justify-between items-center'>
                                <div className=' flex flex-wrap gap-2 items-center pt-1 px-0'>
                                    <figure className='rounded-full overflow-hidden w-9 h-9'>
                                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                                    </figure>
                                    <span className='text-[13.65px]'>The Rhythm House</span>
                                </div>
                                <small className='text-[#F80E0E] text-[15px]'>$ 5.00</small>
                            </div>
                        </div>
                    </div>
                    {/* End Each Video Grid Component */}

                    {/* Start Each Video Grid Component */}
                    <div className='overflow-hidden'>
                        <div className='w-full h-[190px] overflow-hidden rounded-[10px]'>
                            <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full relative pt-4'>
                            <h3 className='text-[14px] text-black font-semibold'>Veronica Radke Tries To Fit A Huge Dick Inside</h3>
                            <div className='flex flex-wrap justify-between items-center'>
                                <div className=' flex flex-wrap gap-2 items-center pt-1 px-0'>
                                    <figure className='rounded-full overflow-hidden w-9 h-9'>
                                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                                    </figure>
                                    <span className='text-[13.65px]'>The Rhythm House</span>
                                </div>
                                <small className='text-[#F80E0E] text-[15px]'>$ 5.00</small>
                            </div>
                        </div>
                    </div>
                    {/* End Each Video Grid Component */}

                    {/* Start Each Video Grid Component */}
                    <div className='overflow-hidden'>
                        <div className='w-full h-[190px] overflow-hidden rounded-[10px]'>
                            <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full relative pt-4'>
                            <h3 className='text-[14px] text-black font-semibold'>Veronica Radke Tries To Fit A Huge Dick Inside</h3>
                            <div className='flex flex-wrap justify-between items-center'>
                                <div className=' flex flex-wrap gap-2 items-center pt-1 px-0'>
                                    <figure className='rounded-full overflow-hidden w-9 h-9'>
                                        <Image src={UserImg} alt="" className='w-full h-full object-cover' />
                                    </figure>
                                    <span className='text-[13.65px]'>The Rhythm House</span>
                                </div>
                                <small className='text-[#F80E0E] text-[15px]'>$ 5.00</small>
                            </div>
                        </div>
                    </div>
                    {/* End Each Video Grid Component */}
                    
                </div>{/* End Video Section Grid Component */}

            </div>{/* End Video Section Listing Component */}

          </div>{/* End Right content layout */}

          {/* Start Footer Component */}
          <Footer />
          {/* End Footer Component */}

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}

export default page