"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import MenuSidebar from '../../../components/sidebar/page';
import Footer from '../../../components/footer/page';
import Header from '../../../components/header/page';

import AwardCup from './../../../../assets/images/icons/award-cup-icon.svg';
import WinnerCup from './../../../../assets/images/icons/winner-icon.svg';

import ContImg10 from './../../../../assets/images/image-10.jpeg';

const Custom = () => {
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
          <div className='px-4 lg:px-8 pt-8 pb-20 flex flex-wrap gap-7'>

            {/* Start Content Left Section Layoput */}
            <div className='w-full lg:w-4/12 xl:w-3/12'>

              <div className='bg-black relative'>
                <Image src={ContImg10} alt='' className='w-full h-full object-cover' />
                <div className='absolute w-full h-full left-0 top-0 bg-gradient-to-b from-transparent to-slate-950/75'>
                  <div className='flex flex-col items-center absolute bottom-6 left-1/2 -translate-x-1/2 w-full'>
                    <h2 className='text-white text-[28px] font-semibold'>Nicolette Bloom</h2>
                    <span className='text-[16px] text-white font-medium mb-4'>United States</span>
                    <Button variant="default" className="w-full max-w-[200px]">Follow For Free</Button>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 mb-2'>
                <div className='grid grid-cols-2 gap-2 divide-x'>
                  <div className='text-center'>
                    <h4 className='text-[33px] font-semibold text-black leading-normal'>395</h4>
                    <span className='text-[13px] text-black font-normal'>Pornyo Girl</span>
                  </div>
                  <div className='text-center'>
                    <h4 className='text-[33px] font-semibold text-black leading-normal'>23.5K</h4>
                    <span className='text-[13px] text-black font-normal'>Followers</span>
                  </div>
                </div>
              </div>

              <div className='bg-white px-6 py-5'>
                <p>
                Nicolette Bloom is an American pornstar. She is one of the top pornstars in the world right now. She has appeared in over 100 movies during her career. She has won a couple AVN Awards... <a href='#'>Read More</a>
                </p>
              </div>

              <div className='flex flex-wrap gap-4 py-7'>
                <Button variant="outline" className="text-black flex-1">Get My Videos</Button>
                <Button variant="default" className="flex-1">Tip</Button>
              </div>

              <div className='bg-white p-8'>
                <h3 className='text-[15px] font-semibold mb-4'>Achievements:</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                  <div className='py-3 px-[6px] border border-[#E2D9D9] flex items-center flex-col gap-[6px] rounded-sm'>
                    <Image src={AwardCup} alt='' />
                    <span className='text-black text-[11px] font-medium leading-[14px] -tracking-1 text-center'>2022 Pornyo Profile of The Year</span>
                  </div>
                  <div className='py-3 px-[6px] border border-[#E2D9D9] flex items-center flex-col gap-[6px] rounded-sm'>
                    <Image src={AwardCup} alt='' />
                    <span className='text-black text-[11px] font-medium leading-[14px] -tracking-1 text-center'>2022 Pornyo Profile of The Year</span>
                  </div>
                  <div className='py-3 px-[6px] border border-[#E2D9D9] flex items-center flex-col gap-[6px] rounded-sm'>
                    <Image src={WinnerCup} alt='' />
                    <span className='text-black text-[11px] font-medium leading-[14px] -tracking-1 text-center'>Pornyo Contest Winner</span>
                  </div>
                </div>
              </div>

            </div>{/* End Content Left Section Layoput */}

            {/* Start Content Right Section Layoput */}
            <div className=' flex-1 w-full lg:w-8/12 xl:w-9/12'>

              <div className='bg-white px-7 rounded-[9px] mb-9'>
                <ul className='flex gap-8 text-[#333] text-sm'>
                  <li className='cursor-pointer py-4'>Videos</li>
                  <li className='cursor-pointer py-4'>Feed</li>
                  <li className='cursor-pointer py-4'>Items</li>
                  <li className='relative py-4 text-black font-semibold after:bg-[#ED2227] after:h-[3px] after:w-full after:left-0 after:bottom-0 after:absolute cursor-pointer'>Custom</li>
                  <li className='cursor-pointer py-4'>Club</li>
                </ul>
              </div>

              {/* Start Video Section Grid Component */}
              <div className='w-full'>
                <h2 className='text-[20px] font-semibold text-black mb-7'>Order A Custom Vid From Nicolette Bloom</h2>
                <div>
                  <p className='mb-5 text-black'>❤️ I LOVE making Custom Videos! ❤️  - Brand new 34DDD boobs!</p>
                  <p className='mb-5 text-black'>Send me a message in my inbox OR comment down below and I will message you to discuss your videos details as soon as possible, Thank you!!!</p>
                  <p className='mb-5 text-black'>I love dressing up in lingerie, cute outfits, cosplays, or just being naked! I love jerk off instructions, facials, creampie and impregnation fantasy, plus aaa lot of other things!</p>
                  <p className='mb-5 text-black'>I have a variety of toys - dildos ( all colours/ sizes ) , glass dildos, bad dragon dildos of sorts, gags, nipple clamps, butt plugs, tail plugs, spank paddles, a lot of cum, oil, strap on, vibrators, chastity cage, tentacle dildos, ovipositor + eggs</p>
                  <p className='mb-5 text-black'>I do not to anything against PORNYO Rules, please read them before inquiring!!!</p>
                </div>
                <div className='w-full mb-6'>
                  <h3 className='text-[15px] text-black font-semibold mb-3'>Your Story:</h3>
                  <div className='w-full border border-[#DAD3D3] rounded-[10px] p-4'>
                    <textarea className='w-full min-h-[140px] bg-transparent border-0 text-[13px] text-black/5' placeholder='Describe your fantasy scene in detail'></textarea>
                  </div>
                  <span className='text-[13px] text-black/50 flex justify-end mt-[6px]'>3000 Word Left</span>
                </div>

                <div className='w-full mb-6'>
                  <div className='w-full'>
                    <h3 className='text-[15px] text-black font-semibold mb-3'>Select Package:</h3>
                    <RadioGroup defaultValue="comfortable" className="flex flex-col">
                      <Table>
                        <TableBody>
                            <TableRow className="border-0">
                              <TableCell className="font-medium px-0 pb-0 w-full">
                                <span className="flex items-center space-x-2">
                                  <RadioGroupItem value="default" id="r1" className="w-[18px] h-[18px]" />
                                  <Label htmlFor="r1" className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">5 Minute ($50.00 Per Minute)</Label>
                                </span>
                              </TableCell>
                              <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-0">$49.99</TableCell>
                            </TableRow>
                            <TableRow className="border-0">
                              <TableCell className="font-medium px-0 pb-0 w-full">
                                <span className="flex items-center space-x-2">
                                  <RadioGroupItem value="comfortable" id="r2" className="w-[18px] h-[18px]" />
                                  <Label htmlFor="r2" className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">10 Minute ($45.00 Per Minute)</Label>
                                </span>
                              </TableCell>
                              <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-0">$99.99</TableCell>
                            </TableRow>
                            <TableRow className="border-0">
                              <TableCell className="font-medium px-0 pb-8 w-full">
                                  <span className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3" className="w-[18px] h-[18px]" />
                                    <Label htmlFor="r3" className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Make the panty dirty with pussy juice</Label>
                                  </span>
                              </TableCell>
                              <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-8">$19.99</TableCell>
                            </TableRow>
                        </TableBody>
                      </Table>
                    </RadioGroup>
                  </div>

                  <div className='w-full'>
                    <h3 className='text-[15px] text-black font-semibold mb-3'>Extras:</h3>
                    <Table>
                      <TableBody>
                        <TableRow className="border-0">
                          <TableCell className="font-medium px-0 pb-0">
                            <span className="flex items-center space-x-2">
                              <Checkbox id="terms" className="w-[18px] h-[18px]" />
                              <label
                                htmlFor="terms"
                                className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Extra Cum for More Cumshots or Creampies
                              </label>
                            </span>
                          </TableCell>
                          <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-0">$49.99</TableCell>
                        </TableRow>
                        <TableRow className="border-0">
                          <TableCell className="font-medium px-0 pb-0">
                            <span className="flex items-center space-x-2">
                              <Checkbox id="terms" className="w-[18px] h-[18px]" />
                              <label
                                htmlFor="terms"
                                className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Specific Hair Style or Makeup
                              </label>
                            </span>
                          </TableCell>
                          <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-0">$99.99</TableCell>
                        </TableRow>
                        <TableRow className="border-0">
                          <TableCell className="font-medium px-0 pb-8">
                            <span className="flex items-center space-x-2">
                              <Checkbox id="terms" className="w-[18px] h-[18px]" />
                              <label
                                htmlFor="terms"
                                className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Squirting Dildo for Creampies or Facials etc
                              </label>
                            </span>
                          </TableCell>
                          <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-8">$19.99</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className='w-full'>
                    <h3 className='text-[15px] text-black font-semibold mb-3'>Resolution</h3>
                    <RadioGroup defaultValue="resolution" className="flex flex-col">
                      <Table>
                        <TableBody>
                            <TableRow className="border-0">
                              <TableCell className="font-medium px-0 pb-0 w-full">
                                <span className="flex items-center space-x-2">
                                  <RadioGroupItem value="default" id="reso1" className="w-[18px] h-[18px]" />
                                  <Label htmlFor="r1" className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Standard</Label>
                                </span>
                              </TableCell>
                              <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-0">FREE</TableCell>
                            </TableRow>
                            <TableRow className="border-0">
                              <TableCell className="font-medium px-0 pb-0 w-full">
                                <span className="flex items-center space-x-2">
                                  <RadioGroupItem value="comfortable" id="reso2" className="w-[18px] h-[18px]" />
                                  <Label htmlFor="r2" className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">HD</Label>
                                </span>
                              </TableCell>
                              <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-0">FREE</TableCell>
                            </TableRow>
                            <TableRow className="border-0">
                              <TableCell className="font-medium px-0 pb-8 w-full">
                                  <span className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="reso3" className="w-[18px] h-[18px]" />
                                    <Label htmlFor="r3" className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">4K</Label>
                                  </span>
                              </TableCell>
                              <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-8">$29.99</TableCell>
                            </TableRow>
                        </TableBody>
                      </Table>
                    </RadioGroup>
                  </div>

                  <div className='w-full'>
                    <h3 className='text-[15px] text-black font-semibold mb-3'>Delivery Time</h3>
                    <RadioGroup defaultValue="resolution" className="flex flex-col">
                      <Table>
                        <TableBody>
                            <TableRow className="border-0">
                              <TableCell className="font-medium px-0 pb-0 w-full">
                                <span className="flex items-center space-x-2">
                                  <RadioGroupItem value="default" id="reso1" className="w-[18px] h-[18px]" />
                                  <Label htmlFor="r1" className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">01 Week</Label>
                                </span>
                              </TableCell>
                              <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-0">$29.99</TableCell>
                            </TableRow>
                            <TableRow className="border-0">
                              <TableCell className="font-medium px-0 pb-0 w-full">
                                <span className="flex items-center space-x-2">
                                  <RadioGroupItem value="comfortable" id="reso2" className="w-[18px] h-[18px]" />
                                  <Label htmlFor="r2" className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">02 Week</Label>
                                </span>
                              </TableCell>
                              <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-0">$09.99</TableCell>
                            </TableRow>
                            <TableRow className="border-0">
                              <TableCell className="font-medium px-0 pb-8 w-full">
                                  <span className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="reso3" className="w-[18px] h-[18px]" />
                                    <Label htmlFor="r3" className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">03-04 Week</Label>
                                  </span>
                              </TableCell>
                              <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-8">Free</TableCell>
                            </TableRow>
                        </TableBody>
                      </Table>
                    </RadioGroup>
                  </div>

                  <div className='w-full'>
                    <h3 className='text-[15px] text-black font-semibold mb-3'>Exclusive</h3>
                    <p className='text-sm'>Click the checkbox below to give Custom Vid buyers the option of making the Custom Vid private.The vid will not be available to any other buyers or available for sale on the site.</p>
                    <Table>
                      <TableBody>
                        <TableRow className="border-0">
                          <TableCell className="font-medium px-0 pb-0">
                            <span className="flex items-center space-x-2">
                              <Checkbox id="terms" className="w-[18px] h-[18px]" />
                              <label
                                htmlFor="terms"
                                className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Viewable only to the buyer of the Custom Vid
                              </label>
                            </span>
                          </TableCell>
                          <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-0">$999.99</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className='w-full'>
                    <h3 className='text-[15px] text-black font-semibold mb-3'>Tip</h3>
                    <p className='text-sm'>A special kind of vid needs a special kind of care. Send them something extra to show your appreciation!</p>
                    <Table>
                      <TableBody>
                        <TableRow className="border-0">
                          <TableCell className="font-medium px-0 pb-0">
                            <span className="flex items-center space-x-2">
                              <Checkbox id="terms" className="w-[18px] h-[18px]" />
                              <label
                                htmlFor="terms"
                                className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Add Tip
                              </label>
                            </span>
                          </TableCell>
                          <TableCell className="text-right text-[13px] text-[#000] font-medium px-0 pb-0">
                            <span className='flex gap-2 items-center justify-end'>
                              <span>$</span> 
                              <Input type="email" placeholder="Email" className="border-[#DAD3D3] bg-transparent text-[15px] text-black font-medium max-w-[100px]" />
                            </span>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className='w-full pt-14'>
                    <Table>
                      <TableFooter className="border-[#C5C5C5] border-b">
                        <TableRow className="">
                          <TableCell className="text-[18px] text-[#000] font-medium py-3 px-0">Total</TableCell>
                          <TableCell className="text-right text-[22px] text-[#F80E0E] font-semibold py-3 px-0">$249.99</TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </div>
                  <div className='text-right mt-7'>
                    <Button variant="default">Order Now</Button>
                  </div>
                </div>
              </div>{/* End Video Section Grid Component */}
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

export default Custom