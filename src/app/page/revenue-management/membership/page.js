"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import MenuSidebar from '../../../components/sidebarwithauth/page';
import Footer from '../../../components/footer/page';
import Header from '../../../components/headerwithauth/page';

import MembershipBG from './../../../../assets/images/customize-membership-bg.png';
import TooltipIcon from './../../../../assets/images/icons/tooltip-icon.svg';
import TrashIcon from './../../../../assets/images/icons/trashicon.svg';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const Membership = () => {

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
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
                Revenue management
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
                  <li className='cursor-pointer py-4'>Tips</li>
                  <li className='relative py-4 text-black font-semibold after:bg-[#ED2227] after:h-[3px] after:w-full after:left-0 after:bottom-0 after:absolute cursor-pointer'>Membership</li>
                  <li className='cursor-pointer py-4'>Club</li>
                  <li className='cursor-pointer py-4'> Custom Vid</li>
                </ul>
              </div>

              {/* Start Content Section Component */}
              <div className='w-full'>
                <h2 className='text-[20px] font-semibold text-black mb-3'>Membership</h2>
                <div>
                  <p className='mb-5 text-[#333] text-[13px] font-normal'>Set up a vid Membership for your most enthusiastic fans! A Membership will give an Pornyo Member access to all of your vids for a certain length of time. You can also choose to customize and decide which vids you want to make available for the Membership. Memberships are rebilled on the day they expire.</p>
                  <p className='mb-5 text-[#333] text-[13px] font-normal'>You can decide how long you want your Memberships to be. A Membership gives Members an easy option to get your vids, so it’s a great service to offer if you want to increase your sales!</p>
                </div>

                <div className='bg-white border border-[#F2F2F2] rounded-10 p-[30px]'>
                  <h2 className='text-[15px] font-semibold text-black mb-3'>Active Memberships</h2>
                  <div className='flex flex-wrap gap-9 items-center justify-between'>
                    <div className="flex-1">
                      <Table>
                        <TableBody>
                          <TableRow className="border-0">
                            <TableCell className="font-medium ps-0 pt-0 pb-[10px]">Sell my 1 Month Membership for</TableCell>
                            <TableCell className="pt-0 pb-[10px]">
                              <span className=' relative'>
                                <span className='relative flex gap-3 items-center'>
                                  <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4'>
                                    <span className="text-[16px] text-[#333333]">$</span>
                                    <Input type="number" placeholder="100.00" className=" bg-transparent border-0 ps-1" />
                                    <span className="text-[14px] text-[#333333]">USD</span>
                                  </span>
                                  <span className='text-[14px] text-[#333]'>$100/ month</span>
                                </span>
                              </span>
                            </TableCell>
                            <TableCell width="15%" className="pt-0 pb-[10px]">
                              <span className='flex flex-wrap items-center gap-2'>
                                <span className="flex items-center space-x-2">
                                  <Checkbox id="deal1" className="w-[18px] h-[18px] border-[#ED2028]" />
                                  <label
                                    htmlFor="deal1"
                                    className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Best Deal
                                  </label>
                                </span>
                                
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger><Image src={TooltipIcon} alt='' /></TooltipTrigger>
                                    <TooltipContent>
                                      <p>Add to Deal</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </span>
                            </TableCell>
                            <TableCell className="text-right ps-0 pt-0 pb-[10px]">
                              <span className='cursor-pointer'>
                                <Image src={TrashIcon} alt='' />
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow className="border-0">
                            <TableCell className="font-medium ps-0 pt-0 pb-[10px]">Sell my 3 Month Membership for</TableCell>
                            <TableCell className="pt-0 pb-[10px]">
                              <span className=' relative'>
                                <span className='relative flex gap-3 items-center'>
                                  <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4'>
                                    <span className="text-[16px] text-[#333333]">$</span>
                                    <Input type="number" placeholder="100.00" className=" bg-transparent border-0 ps-1" />
                                    <span className="text-[14px] text-[#333333]">USD</span>
                                  </span>
                                  <span className='text-[14px] text-[#333]'>$100/ month</span>
                                </span>
                              </span>
                            </TableCell>
                            <TableCell width="15%" className="pt-0 pb-[10px]">
                              <span className='flex flex-wrap items-center gap-2'>
                                <span className="flex items-center space-x-2">
                                  <Checkbox id="deal1" className="w-[18px] h-[18px] border-[#ED2028]" />
                                  <label
                                    htmlFor="deal1"
                                    className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Best Deal
                                  </label>
                                </span>
                                
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger><Image src={TooltipIcon} alt='' /></TooltipTrigger>
                                    <TooltipContent>
                                      <p>Add to Deal</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </span>
                            </TableCell>
                            <TableCell className="text-right ps-0 pt-0 pb-[10px]">
                              <span className='cursor-pointer'>
                                <Image src={TrashIcon} alt='' />
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow className="border-0">
                            <TableCell className="font-medium ps-0 pt-0 pb-[10px]">Sell my 6 Month Membership for</TableCell>
                            <TableCell className="pt-0 pb-[10px]">
                              <span className=' relative'>
                                <span className='relative flex gap-3 items-center'>
                                  <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4'>
                                    <span className="text-[16px] text-[#333333]">$</span>
                                    <Input type="number" placeholder="100.00" className=" bg-transparent border-0 ps-1" />
                                    <span className="text-[14px] text-[#333333]">USD</span>
                                  </span>
                                  <span className='text-[14px] text-[#333]'>$100/ month</span>
                                </span>
                              </span>
                            </TableCell>
                            <TableCell width="15%" className="pt-0 pb-[10px]">
                              <span className='flex flex-wrap items-center gap-2'>
                                <span className="flex items-center space-x-2">
                                  <Checkbox id="deal1" className="w-[18px] h-[18px] border-[#ED2028]" />
                                  <label
                                    htmlFor="deal1"
                                    className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Best Deal
                                  </label>
                                </span>
                                
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger><Image src={TooltipIcon} alt='' /></TooltipTrigger>
                                    <TooltipContent>
                                      <p>Add to Deal</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </span>
                            </TableCell>
                            <TableCell className="text-right ps-0 pt-0 pb-[10px]">
                              <span className='cursor-pointer'>
                                <Image src={TrashIcon} alt='' />
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow className="border-0">
                            <TableCell className="font-medium ps-0 pt-0 pb-[10px]">Sell my 12 Month Membership for</TableCell>
                            <TableCell className="pt-0 pb-[10px]">
                              <span className=' relative'>
                                <span className='relative flex gap-3 items-center'>
                                  <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4'>
                                    <span className="text-[16px] text-[#333333]">$</span>
                                    <Input type="number" placeholder="100.00" className=" bg-transparent border-0 ps-1" />
                                    <span className="text-[14px] text-[#333333]">USD</span>
                                  </span>
                                  <span className='text-[14px] text-[#333]'>$100/ month</span>
                                </span>
                              </span>
                            </TableCell>
                            <TableCell width="15%" className="pt-0 pb-[10px]">
                              <span className='flex flex-wrap items-center gap-2'>
                                <span className="flex items-center space-x-2">
                                  <Checkbox id="deal1" className="w-[18px] h-[18px] border-[#ED2028]" />
                                  <label
                                    htmlFor="deal1"
                                    className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Best Deal
                                  </label>
                                </span>
                                
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger><Image src={TooltipIcon} alt='' /></TooltipTrigger>
                                    <TooltipContent>
                                      <p>Add to Deal</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </span>
                            </TableCell>
                            <TableCell className="text-right ps-0 pt-0 pb-[10px]">
                              <span className='cursor-pointer'>
                                <Image src={TrashIcon} alt='' />
                              </span>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className='bg-[#F6F6F6] rounded-[20px] overflow-hidden relative max-w-[280px] w-full'>
                      <Image src={MembershipBG} alt='' className='w-full' />
                      <div className='flex gap-3 items-center justify-center flex-col absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <span className='text-left text--[20px] leading-7 text-black'>Customize your membership</span>
                        <Button variant="outline" className="text-[#ED2028] flex-1">Click here</Button>
                      </div>
                    </div>
                  </div>
                  <div className='pt-5 pb-7'>
                    <Dialog>
                      <DialogTrigger className='text-[14px] text-[#ED2028] font-semibold cursor-pointer hover:underline'>+ Add  another Membership</DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Membership</DialogTitle>
                          <DialogDescription className="max-w-[372px] mx-auto w-full">
                            <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                              <FormField
                                  control={form.control}
                                  name="price"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Sell My Membership for</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select month" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="january">January</SelectItem>
                                          <SelectItem value="february">February</SelectItem>
                                          <SelectItem value="march">March</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormDescription>
                                        
                                      </FormDescription>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="price"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Set Price</FormLabel>
                                      <FormControl>
                                        <span className='relative flex gap-3 items-center w-full'>
                                          <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4 w-full'>
                                            <span className="text-[16px] text-[#333333]">$</span>
                                            <Input type="number" placeholder="100.00" className=" bg-transparent border-0 ps-1" />
                                            <span className="text-14px] text-[#333333]">USD</span>
                                          </span>
                                        </span>
                                      </FormControl>
                                      <FormDescription>
                                        
                                      </FormDescription>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <div className="flex justify-center pt-5">
                                  <Button type="submit" variant="default">add membership</Button>
                                </div>
                              </form>
                            </Form>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className='flex flex-wrap items-center justify-between'>
                    <div>
                      <span className='flex flex-wrap items-center gap-2'>
                        <span className="flex items-center space-x-2">
                          <Checkbox id="deal1" className="w-[18px] h-[18px] border-[#ED2028]" />
                          <label
                            htmlFor="deal1"
                            className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Make all membership vids Stream Only
                          </label>
                        </span>
                        
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><Image src={TooltipIcon} alt='' /></TooltipTrigger>
                            <TooltipContent>
                              <p>Add to Deal</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </div>
                    <div>
                      <Button variant="outline" className="text-[#ED2028] flex-1">Save & launch</Button>
                    </div>
                  </div>
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

export default Membership