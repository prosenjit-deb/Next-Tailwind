import Image from 'next/image'
import { Button } from "@/components/ui/button"

import MenuSidebar from './../../components/sidebarwithauth/page';
import Footer from './../../components/footer/page';
import HeaderWithAuth from './../../components/headerwithauth/page';
import ProfileImg from './../../../assets/images/dashboard-profile-img.png';
import ProfileEditIcon from './../../../assets/images/icons/profile-edit-icon.svg';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-bodyBg">
      {/* Start Header Component */}
      <HeaderWithAuth />
      {/* End Header Component */}

      {/* Start Page layout */}
      <div className='flex flex-wrap w-full pt-12 md:pt-0'>

        {/* Start SideMenuBar Component */}
        <MenuSidebar />
        {/* End SideMenuBar Component */}

        {/* Start Right panel Page layout */}
        <div className='w-full lg:ms-[240px] pt-20 flex flex-col h-screen'>


          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-8 pb-20 flex flex-col gap-7'>
            {/* Start Dashboard Profile Component */}
            <div className='rounded-[20px] bg-gradient-to-r from-[#380607] to-[#242527] w-full relative px-9 py-6 grid grid-cols-1 xl:grid-cols-2 items-center justify-between gap-x-20 gap-y-10'>
              <div className='flex flex-wrap gap-9 items-center'>
                <div className='w-[200px] h-[200px] relative'>
                  <div className='w-full h-full overflow-hidden'>
                    <Image src={ProfileImg} alt='' className='w-full h-full object-cover' />
                  </div>
                  <span className='w-10 h-10 bg-white hover:bg-slate-100 cursor-pointer border border-[#ED2028] rounded-full flex justify-center items-center absolute bottom-3 right-2'>
                    <Image src={ProfileEditIcon} alt='' />
                  </span>
                </div>
                <div className='flex flex-col flex-1'>
                  <div className='mb-3'>
                    <h2 className='text-[33px] text-white font-semibold leading-6 mb-2'>Katherine</h2>
                    <span className='text-[14px] text-[#C9C9C9] leading-normal flex'>United States</span>
                  </div>
                  <p className='text-[14px] text-[#C9C9C9] mb-5'>Through the interplay of light and shadow, I create captivating, evocative portraits... </p>
                  <div>
                    <Button variant="outline" className="flex-1">Update my profile</Button>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap gap-y-11 gap-x-5'>
                <div className='flex flex-col flex-auto w-3/12'>
                  <h3 className='text-[33px] font-semibold text-white mb-2 leading-6'>$69.27</h3>
                  <span className='text-[14px] text-[#C9C9C9]'>Total unpaid</span>
                </div>
                <div className='flex flex-col flex-auto w-3/12'>
                  <h3 className='text-[33px] font-semibold text-white mb-2 leading-6'>10k</h3>
                  <span className='text-[14px] text-[#C9C9C9]'>Profile visits</span>
                </div>
                <div className='flex flex-col flex-auto w-3/12'>
                  <h3 className='text-[33px] font-semibold text-white mb-2 leading-6'>15</h3>
                  <span className='text-[14px] text-[#C9C9C9]'>New followers</span>
                </div>
                <div className='flex flex-col flex-auto w-3/12'>
                  <h3 className='text-[33px] font-semibold text-white mb-2 leading-6'>23.5K</h3>
                  <span className='text-[14px] text-[#C9C9C9]'>Creator Rank</span>
                </div>
                <div className='flex flex-col flex-auto w-3/12'>
                  <h3 className='text-[33px] font-semibold text-white mb-2 leading-6'>23.5K</h3>
                  <span className='text-[14px] text-[#C9C9C9]'>Live rank</span>
                </div>
                <div className='flex flex-col flex-auto w-3/12'>
                  <Button variant="outline" className="h-10">Top Live Earners</Button>
                </div>
              </div>
            </div>{/* End Dashboard Profile Component */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
              <div className='w-full h-[460px] p-7 bg-white rounded-[10px]'></div>
              <div className='w-full h-[460px] p-7 bg-white rounded-[10px]'></div>
            </div>
            <div className='flex flex-wrap gap-7'>
              <div className='w-full lg:w-4/12 p-7 flex-1 bg-white rounded-[10px]'>
                <div className='flex flex-wrap justify-between items-center gap-4 w-full'>
                  <div className='flex flex-col flex-1'>
                    <h4 className='text-[15px] font-semibold text-black leading-normal'>EARNINGS (USD)</h4>
                    <span className='text-sm text-[#333] font-medium'>Jan 2024</span>
                  </div>
                  <div className='flex'>
                    <Button variant="outline" className="border-[#C7C7C7] text-black xl:px-5">BREAKDOWN</Button>
                  </div>
                </div>
                <div className='mt-2'>
                  <ul className='text-[13px] font-medium text-black'>
                    <li className='[&:not(:last-child)]:border-b border-[#E5E5E5] flex justify-between items-center w-full py-5'>
                      <span>Club</span>
                      <span>0</span>
                    </li>
                    <li className='[&:not(:last-child)]:border-b border-[#E5E5E5] flex justify-between items-center w-full py-5'>
                      <span>Custom Vids</span>
                      <span>0</span>
                    </li>
                    <li className='[&:not(:last-child)]:border-b border-[#E5E5E5] flex justify-between items-center w-full py-5'>
                      <span>Items</span>
                      <span>0</span>
                    </li>
                    <li className='[&:not(:last-child)]:border-b border-[#E5E5E5] flex justify-between items-center w-full py-5'>
                      <span>Live</span>
                      <span>0</span>
                    </li>
                    <li className='[&:not(:last-child)]:border-b border-[#E5E5E5] flex justify-between items-center w-full py-5'>
                      <span>Membership</span>
                      <span>0</span>
                    </li>
                    <li className='[&:not(:last-child)]:border-b border-[#E5E5E5] flex justify-between items-center w-full py-5'>
                      <span>Tips</span>
                      <span>0</span>
                    </li>
                    <li className='[&:not(:last-child)]:border-b border-[#E5E5E5] flex justify-between items-center w-full py-5'>
                      <span>Vids</span>
                      <span>0</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='w-full lg:w-4/12 p-7 flex-1 bg-white rounded-[10px]'>
                <div className='flex flex-wrap justify-between items-center gap-4 w-full'>
                  <div className='flex flex-col flex-1'>
                    <h4 className='text-[15px] font-semibold text-black leading-normal'>RECENT VIDS</h4>
                  </div>
                  <div className='flex'>
                    <Button variant="outline" className="border-[#C7C7C7] text-black xl:px-5">Upload video</Button>
                  </div>
                </div>
                <div className='mt-2'>
                  <ul className='text-[15px] font-medium text-black'>
                    <li className='flex justify-between items-center w-full py-3'>
                      <span>Nadia.mp4</span>
                    </li>
                    <li className='flex justify-between items-center w-full py-3'>
                      <span>Morning view.mp4</span>
                    </li>
                    <li className='flex justify-between items-center w-full py-3'>
                      <span>Nadia.mp4</span>
                      <div className='flex'>
                        <Button variant="outline" className="border-[#C7C7C7] text-black xl:px-5">Edit Vid</Button>
                      </div>
                    </li>
                    <li className='flex justify-between items-center w-full py-3'>
                      <span>Morning view.mp4</span>
                      <div className='flex'>
                        <Button variant="outline" className="border-[#C7C7C7] text-black xl:px-5">Edit Vid</Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='w-full lg:w-2/12 py-7 ps-4 pe-1 bg-white rounded-[10px]'>
                <div className='flex flex-wrap justify-between items-center gap-4 w-full'>
                  <div className='flex flex-col flex-1'>
                    <h4 className='text-[15px] font-semibold text-black leading-normal'>TOP 10 MEMBERS</h4>
                  </div>
                </div>
                <div className='mt-3 overflow-auto max-h-[460px]'>
                  <div className='cursor-pointer flex flex-wrap items-center gap-[6px] py-2'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={ProfileImg} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div>
                      <span className='text-[13px] text-[#545357] font-medium leading-normal block w-full'>Henry Payne</span>
                      <span className='text-sm text-[#545357] font-medium leading-normal block w-full'>Rank 1</span>
                    </div>
                  </div>
                  <div className='cursor-pointer flex flex-wrap items-center gap-[6px] py-2'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={ProfileImg} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div>
                      <span className='text-[13px] text-[#545357] font-medium leading-normal block w-full'>Henry Payne</span>
                      <span className='text-sm text-[#545357] font-medium leading-normal block w-full'>Rank 1</span>
                    </div>
                  </div>
                  <div className='cursor-pointer flex flex-wrap items-center gap-[6px] py-2'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={ProfileImg} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div>
                      <span className='text-[13px] text-[#545357] font-medium leading-normal block w-full'>Henry Payne</span>
                      <span className='text-sm text-[#545357] font-medium leading-normal block w-full'>Rank 1</span>
                    </div>
                  </div>
                  <div className='cursor-pointer flex flex-wrap items-center gap-[6px] py-2'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={ProfileImg} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div>
                      <span className='text-[13px] text-[#545357] font-medium leading-normal block w-full'>Henry Payne</span>
                      <span className='text-sm text-[#545357] font-medium leading-normal block w-full'>Rank 1</span>
                    </div>
                  </div>
                  <div className='cursor-pointer flex flex-wrap items-center gap-[6px] py-2'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={ProfileImg} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div>
                      <span className='text-[13px] text-[#545357] font-medium leading-normal block w-full'>Henry Payne</span>
                      <span className='text-sm text-[#545357] font-medium leading-normal block w-full'>Rank 1</span>
                    </div>
                  </div>
                  <div className='cursor-pointer flex flex-wrap items-center gap-[6px] py-2'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={ProfileImg} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div>
                      <span className='text-[13px] text-[#545357] font-medium leading-normal block w-full'>Henry Payne</span>
                      <span className='text-sm text-[#545357] font-medium leading-normal block w-full'>Rank 1</span>
                    </div>
                  </div>
                  <div className='cursor-pointer flex flex-wrap items-center gap-[6px] py-2'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={ProfileImg} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div>
                      <span className='text-[13px] text-[#545357] font-medium leading-normal block w-full'>Henry Payne</span>
                      <span className='text-sm text-[#545357] font-medium leading-normal block w-full'>Rank 1</span>
                    </div>
                  </div>
                  <div className='cursor-pointer flex flex-wrap items-center gap-[6px] py-2'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={ProfileImg} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div>
                      <span className='text-[13px] text-[#545357] font-medium leading-normal block w-full'>Henry Payne</span>
                      <span className='text-sm text-[#545357] font-medium leading-normal block w-full'>Rank 1</span>
                    </div>
                  </div>
                  <div className='cursor-pointer flex flex-wrap items-center gap-[6px] py-2'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={ProfileImg} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div>
                      <span className='text-[13px] text-[#545357] font-medium leading-normal block w-full'>Henry Payne</span>
                      <span className='text-sm text-[#545357] font-medium leading-normal block w-full'>Rank 1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* End Right content layout */}

          {/* Start Footer Component */}
          <Footer />{/* End Footer Component */}

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}
