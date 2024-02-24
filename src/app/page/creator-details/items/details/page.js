import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table"
import MenuSidebar from './../../../../components/sidebar/page';
import Footer from './../../../../components/footer/page';
import Header from './../../../../components/header/page';

import MenuItems from './../../../../../assets/images/item-details-img.jpeg';

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
                <a href="#" className="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Nicolette Bloom
                </a>

                <svg className="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li className="inline-flex items-center">
                <a href="#" className="text-black hover:text-[#ED2227] text-sm">
                Satin Lingerie Set
                </a>
              </li> 
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-8 pb-20 flex flex-wrap gap-7'>

            {/* Start Content Left Section Layoput */}
            <div className='w-full lg:w-6/12'>
              <div className='w-full h-[595px]'>
                <Image src={MenuItems} alt='' className='w-full h-full object-cover' />
              </div>
            </div>{/* End Content Left Section Layoput */}

            {/* Start Content Right Section Layoput */}
            <div className=' flex-1 w-full lg:w-6/12'>
              <h1 className='text-[#16161D] text-[28px] font-medium mb-1'>Audrey Two Piece Lingerie Set</h1>
              <span className='text-[#F80E0E] text-[22px] font-semibold mb-3 flex'>$19.99</span>
              <p className='text-[#000] text-[13px] font-normal mb-4 tracking-widest'>This set was worn in both "Nurse Nixx Drains Your Dick" and "Sucking & Fucking Daddy For Tuition." Panties will arrive creamy. Please message for additional add ons.</p>
              <div className='mb-6'>
                <div className='text-[13px] mb-1'>
                  <span className='text-[#848282]'>Size:</span>
                  <strong className='text-[#000] ps-1 font-medium'>M</strong>
                </div>
                <div className='text-[13px] mb-1'>
                  <span className='text-[#848282]'>Bra Size:</span>
                  <strong className='text-[#000] ps-1 font-medium'>34D</strong>
                </div>
                <div className='text-[13px] mb-1'>
                  <span className='text-[#848282]'>Condition:</span>
                  <strong className='text-[#000] ps-1 font-medium'>Dirty</strong>
                </div>
                <div className='text-[13px] mb-1'>
                  <span className='text-[#848282]'>Wore in:</span>
                  <strong className='text-[#000] ps-1 font-medium'>Nurse Drains Your Dick   Big Fuck</strong>
                </div>
              </div>
              <h2 className='text-[#000] text-[18px] mb-2'>Add-on:</h2>
              <Table>
                <TableBody>
                  <TableRow className="border-0">
                    <TableCell className="font-medium px-0 pb-0">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" className="w-[18px] h-[18px]" />
                        <label
                          htmlFor="terms"
                          className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          A sexy note signed by me
                        </label>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-0">$49.99</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium px-0 pb-0">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" className="w-[18px] h-[18px]" />
                        <label
                          htmlFor="terms"
                          className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Add my perfume to the item
                        </label>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-0">$99.99</TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell className="font-medium px-0 pb-8">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" className="w-[18px] h-[18px]" />
                        <label
                          htmlFor="terms"
                          className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Make the panty dirty with pussy juice
                        </label>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-8">$19.99</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter className="border-[#C5C5C5] border-b">
                  <TableRow className="">
                    <TableCell className="text-[18px] text-[#000] font-medium py-3">Total</TableCell>
                    <TableCell className="text-right text-[22px] text-[#F80E0E] font-semibold py-3">$19.99</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
              <div className='text-right mt-7'>
                <Button variant="default">Buy Now</Button>
              </div>
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

export default page