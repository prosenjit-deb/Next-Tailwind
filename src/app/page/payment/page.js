"use client"
import Image from 'next/image'

import MenuSidebar from '../../components/sidebar/page';
import Footer from '../../components/footer/page';
import Header from '../../components/header/page';

import WalletImg from './../../../assets/images/icons/pay-via-wallet.svg';
import RightArrow from './../../../assets/images/icons/right-arrow.svg';
import Maestrocard from './../../../assets/images/icons/maestro-card-icon.png';
import VisaCard from './../../../assets/images/icons/visa-card.png';

export default function Payment() {
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
                Video
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Cart
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Checkout
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-black hover:text-[#ED2227] text-sm">
                Payment
                </a>
              </li>
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-5 pb-20'>

            {/* Start Contest Section Listing Component */}
            <div className='w-100 mb-9'>

              <div className='flex flex-wrap items-center justify-between mb-6 gap-5'>
                <h1 className='text-black font-semibold text-[24px]'>Payment</h1>
              </div>
              
              <div className=" flex flex-wrap space-x-4 w-full xl:w-10/12">
                <div className="flex flex-col gap-4 flex-1 w-full lg:w-6/12">
                  <div className='bg-white border border-[#F2F2F2] rounded-10 p-7 flex flex-wrap items-center justify-start gap-4'>
                    <div className='flex items-center flex-wrap w-20'>
                      <Image src={Maestrocard} alt='' />
                      <Image src={VisaCard} alt='' />
                    </div>
                    <span className='text-[16px] font-semibold text-black'>Pay Via Debit Card, Credit Card</span>
                    <span className='ms-auto'>
                      <Image src={RightArrow} alt=''/>
                    </span>
                  </div>
                  <div className='bg-white border border-[#F2F2F2] rounded-10 p-7 flex flex-wrap items-center justify-start gap-4'>
                    <div className='flex items-center flex-wrap w-20'>
                      <Image src={WalletImg} alt='' />
                    </div>
                    <span className='text-[16px] font-semibold text-black'>Pay Via Wallet</span>
                    <span className='ms-auto'>
                      <Image src={RightArrow} alt=''/>
                    </span>
                  </div>
                </div>
                <div className="lg:max-w-[350px] w-full">
                  <div className="flex flex-col bg-white p-9 w-full rounded-10">
                    <h2 className="text-[20px] mb-5">Payment Details:</h2>
                    <div className="text-black text-[18px] font-medium flex space-x-5 items-center justify-end">
                      <span>Subtotal:</span>
                      <span>$59.99</span>
                    </div>
                    <div className="text-black text-[18px] font-medium flex space-x-5 items-center mb-4 justify-end">
                      <span>Taxes:</span>
                      <span>$09.99</span>
                    </div>
                    <div className="text-black text-[20px] font-medium flex space-x-5 items-center justify-between">
                      <span>Total Cost:</span>
                      <span className="text-[#F80E0E]">$69.98</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End Contest Section Listing Component */}

          </div>{/* End Right content layout */}

          <Footer />

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}
