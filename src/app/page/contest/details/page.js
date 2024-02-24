"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import Image from 'next/image'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

import MenuSidebar from './../../../components/sidebar/page';
import Footer from './../../../components/footer/page';
import Header from './../../../components/header/page';
import Pagination from './../../../components/pagination/page';

import RedGradient from './../../../../assets/images/contest-details-banner-bg.png';
import ContestCalender from './../../../../assets/images/icons/contest-calender.svg';
import ContestCash from './../../../../assets/images/icons/contest-cash.svg';
import ElipsisIcon from './../../../../assets/images/icons/elipsis-icon.svg';
import ContentImg from './../../../../assets/images/phone-hand-image.png';
import TooltipIcon from './../../../../assets/images/icons/tooltip-icon.svg';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function ContestListing() {
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
                <a href="#" class="text-black hover:text-[#ED2227] text-sm">
                Creator of The Year
                </a>
              </li>
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-5 pb-20'>

            {/* Start Contest Section Listing Component */}
            <div className='w-100 mb-9'>

              {/* Start Each Contest Grid Component */}
              <div className='relative'>
                <div className='relative h-[263px] overflow-hidden rounded-10'>
                  <Image src={RedGradient} alt='' className='w-full h-full object-cover' />
                  <div className='w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-between pt-12 pb-7 px-8'>
                    <div className='relative'>
                      <h2 className='text-[2rem] xl:text-[3rem] text-white font-bold uppercase mb-4 leading-10'>Creator of the Year</h2>
                      <h3 className='text-[24px] text-white mb-4'>$25,000 in Cash</h3>
                      <span className='text-[16px] leading-10 text-white flex justify-center'>Ends in</span>
                      <h2 className='text-[1.9rem] xl:text-[2.9rem] text-white font-bold uppercase mb-0 leading-9'>05 : 18 : 26 : 23</h2>
                    </div>
                  </div>
                </div>
                <div className='flex flex-wrap justify-between items-start gap-7 pb-10 pt-4 pe-0'>
                  <div className='flex flex-wrap gap-4'>
                    <div className='lg:ps-10'>
                      <div className='lg:-top-11 relative bg-gradient-to-r from-[#ED2028] to-[#E80B5A] w-24 h-24 rounded-full text-white text-[15px] font-semibold flex justify-center items-center border-2 border-white overflow-hidden'>
                        <Image src={ContentImg} alt='' className='w-full h-full object-cover' />
                      </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <div className='flex flex-col'>
                        <h4 className='text-[20px] leading-10 font-semibold text-black uppercase'>Creator of The Year</h4>
                        <p className='mb-0 max-w-lg'>Our most prestigious award of all, given to the Creator who best exemplifies the Pornyo spirit!</p>
                      </div>
                      <ul className='flex flex-wrap items-center'>
                        <li className='flex flex-wrap items-center gap-3 [&:not(:last-child)]:border-r border-[#BFBFBF] pe-4 [&:not(:first-child)]:ps-4'>
                          <Image src={ContestCalender} alt='' />
                          <span className='text-[15px] text-black font-medium'>03 Jan, 24 - 13 Jan, 24</span>
                        </li>
                        <li className='flex flex-wrap items-center gap-3 [&:not(:last-child)]:border-r border-[#BFBFBF] pe-4 [&:not(:first-child)]:ps-4'>
                          <Image src={ContestCash} alt='' />
                          <span className='text-[15px] text-black font-medium'>$25,000 in Cash</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='flex flex-wrap items-center gap-3 pt-2 justify-end w-full md:w-auto'>
                    <Button variant="default" className="max-w-[134px]">View Details</Button>
                    <Dialog>
                      <DialogTrigger>
                        <Button variant="default">Participate Now</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-left">Participate</DialogTitle>
                          <DialogDescription className="mx-auto w-full">
                            <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                              <FormField
                                  control={form.control}
                                  name="price"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Textarea
                                          placeholder="Write a contest quote"
                                          className="resize-none min-h-[150px]"
                                        />
                                      </FormControl>
                                    </FormItem>
                                  )}
                                />
                                <div className="flex justify-end pt-5">
                                  <Button type="submit" variant="default">Submit Now</Button>
                                </div>
                              </form>
                            </Form>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
              {/* Start Each Contest Grid Component */}

              {/* Start Contest Section Grid Component */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[277px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='flex flex-col gap-7 p-5 pt-12 relative'>
                    <Dialog>
                      <DialogTrigger>
                          <span className='absolute left-1/2 -top-9 -translate-x-1/2 bg-gradient-to-r from-[#ED2028] to-[#E80B5A] w-[73px] h-[73px] rounded-full text-white text-[15px] font-semibold flex justify-center items-center border-2 border-white hover:bg-slate-800 hover:hover:scale-110 transition duration-700 ease-in-out'>Vote</span>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-left">Vote</DialogTitle>
                          <DialogDescription className="mx-auto w-full">
                            <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                              <FormField
                                  control={form.control}
                                  name="price"
                                  render={({ field }) => (
                                    <FormItem className=" max-h-[560px] overflow-auto">
                                      <FormControl>
                                        <RadioGroup
                                          onValueChange={field.onChange}
                                          defaultValue={field.value}
                                          className="flex flex-col space-y-1"
                                        >
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="01" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] ms-0 relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200" >
                                              <span className="px-5 py-2 flex">01 Vote</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">FREE</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="02" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">01 Vote</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">FREE</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="03" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">250 Votes</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">$9.99</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="04" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">500 Votes</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">$12.99</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="05" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">750 Votes</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">$15.99</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="06" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">1K Votes</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">$19.99</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="07" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">2K Votes</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">$21.99</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="08" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">2.5K Votes</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">$25.99</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="09" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">3K Votes</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">$29.99</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="10" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">4K Votes</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">$35.99</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="11" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">5K Votes</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">$39.99</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="12" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">7.5K Votes</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">$42.99</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="13" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">10K Votes</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">$45.99</span>
                                            </FormLabel>
                                          </FormItem>
                                          <FormItem className="flex items-center space-y-0">
                                            <FormControl>
                                              <RadioGroupItem value="14" className="hidden" />
                                            </FormControl>
                                            <FormLabel className="bg-[#F6F6F6] relative border border-[#E4E1E1] h-[43px] w-full rounded-[6px] text-[13px] font-semibold text-black flex items-center p-0 label-checked:bg-[#EB183B] label-checked:text-white label-checked:after:content-radiochecked label-checked:after:w-6 label-checked:after:h-6 label-checked:after:absolute label-checked:after:right-[10px] label-checked:after:top-1/2 label-checked:after:-translate-y-1/2 cursor-pointer hover:bg-gray-200">
                                              <span className="px-5 py-2 flex">20K Votes</span>
                                              <span className="px-5 py-2 flex border-l border-[#E4E1E1]">$49.99</span>
                                            </FormLabel>
                                          </FormItem>
                                        </RadioGroup>
                                      </FormControl>
                                    </FormItem>
                                  )}
                                />
                                <div className='flex flex-wrap items-center justify-between'>
                                  <div>
                                    <span className='flex flex-wrap items-center gap-2'>
                                      <span className="flex items-center space-x-2">
                                        <Checkbox id="deal1" className="w-[18px] h-[18px] border-[#ED2028]" />
                                        <label
                                          htmlFor="deal1"
                                          className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                          Anonymous
                                        </label>
                                      </span>
                                      
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger><Image src={TooltipIcon} alt='' /></TooltipTrigger>
                                          <TooltipContent>
                                            <p>Anonymous</p>
                                          </TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                    </span>
                                  </div>
                                  <div>
                                    <Button type="submit" variant="default">Vote Now</Button>
                                  </div>
                                </div>
                              </form>
                            </Form>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    <div className='absolute top-[2px] right-[2px]'>
                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="link" className="p-0 md:p-0 w-6 h-8 rounded-full focus:outline-none hover:bg-gray-100">
                              <Image src={ElipsisIcon} alt='' />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-24">
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <span>Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <DialogTrigger>Report</DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <span>Share Link</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Report</DialogTitle>
                            <DialogDescription className="mx-auto w-full">
                              <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Textarea
                                            placeholder="Tell us the reason behind this report"
                                            className="resize-none min-h-[165px]"
                                          />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                  />
                                  <div className="flex justify-center pt-5">
                                    <Button type="submit" variant="default">Submit Now</Button>
                                  </div>
                                </form>
                              </Form>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className='flex flex-col items-center'>
                      <h4 className='text-[16px] font-medium text-black mb-2'>Margo Starr</h4>
                      <p className='text-center'>Thank you greatly for the pre-nomination! I am so grateful!</p>
                    </div>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[277px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='flex flex-col gap-7 p-5 pt-12 relative'>
                    <span className='absolute left-1/2 -top-9 -translate-x-1/2 bg-gradient-to-r from-[#ED2028] to-[#E80B5A] w-[73px] h-[73px] rounded-full text-white text-[15px] font-semibold flex justify-center items-center border-2 border-white hover:bg-slate-800 hover:hover:scale-110 transition duration-700 ease-in-out'>Vote</span>
                    <div className='absolute top-[2px] right-[2px]'>
                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="link" className="p-0 md:p-0 w-6 h-8 rounded-full focus:outline-none hover:bg-gray-100">
                              <Image src={ElipsisIcon} alt='' />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-24">
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <span>Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <DialogTrigger>Report</DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <span>Share Link</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Report</DialogTitle>
                            <DialogDescription className="mx-auto w-full">
                              <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Textarea
                                            placeholder="Tell us the reason behind this report"
                                            className="resize-none min-h-[165px]"
                                          />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                  />
                                  <div className="flex justify-center pt-5">
                                    <Button type="submit" variant="default">Submit Now</Button>
                                  </div>
                                </form>
                              </Form>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className='flex flex-col items-center'>
                      <h4 className='text-[16px] font-medium text-black mb-2'>Margo Starr</h4>
                      <p className='text-center'>Thank you greatly for the pre-nomination! I am so grateful!</p>
                    </div>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[277px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='flex flex-col gap-7 p-5 pt-12 relative'>
                    <span className='absolute left-1/2 -top-9 -translate-x-1/2 bg-gradient-to-r from-[#ED2028] to-[#E80B5A] w-[73px] h-[73px] rounded-full text-white text-[15px] font-semibold flex justify-center items-center border-2 border-white hover:bg-slate-800 hover:hover:scale-110 transition duration-700 ease-in-out'>Vote</span>
                    <div className='absolute top-[2px] right-[2px]'>
                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="link" className="p-0 md:p-0 w-6 h-8 rounded-full focus:outline-none hover:bg-gray-100">
                              <Image src={ElipsisIcon} alt='' />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-24">
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <span>Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <DialogTrigger>Report</DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <span>Share Link</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Report</DialogTitle>
                            <DialogDescription className="mx-auto w-full">
                              <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Textarea
                                            placeholder="Tell us the reason behind this report"
                                            className="resize-none min-h-[165px]"
                                          />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                  />
                                  <div className="flex justify-center pt-5">
                                    <Button type="submit" variant="default">Submit Now</Button>
                                  </div>
                                </form>
                              </Form>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className='flex flex-col items-center'>
                      <h4 className='text-[16px] font-medium text-black mb-2'>Margo Starr</h4>
                      <p className='text-center'>Thank you greatly for the pre-nomination! I am so grateful!</p>
                    </div>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[277px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='flex flex-col gap-7 p-5 pt-12 relative'>
                    <span className='absolute left-1/2 -top-9 -translate-x-1/2 bg-gradient-to-r from-[#ED2028] to-[#E80B5A] w-[73px] h-[73px] rounded-full text-white text-[15px] font-semibold flex justify-center items-center border-2 border-white hover:bg-slate-800 hover:hover:scale-110 transition duration-700 ease-in-out'>Vote</span>
                    <div className='absolute top-[2px] right-[2px]'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="link" className="p-0 md:p-0 w-6 h-8 rounded-full focus:outline-none hover:bg-gray-100">
                            <Image src={ElipsisIcon} alt='' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-24">
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Report</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Share Link</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className='flex flex-col items-center'>
                      <h4 className='text-[16px] font-medium text-black mb-2'>Margo Starr</h4>
                      <p className='text-center'>Thank you greatly for the pre-nomination! I am so grateful!</p>
                    </div>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[277px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='flex flex-col gap-7 p-5 pt-12 relative'>
                    <span className='absolute left-1/2 -top-9 -translate-x-1/2 bg-gradient-to-r from-[#ED2028] to-[#E80B5A] w-[73px] h-[73px] rounded-full text-white text-[15px] font-semibold flex justify-center items-center border-2 border-white hover:bg-slate-800 hover:hover:scale-110 transition duration-700 ease-in-out'>Vote</span>
                    <div className='absolute top-[2px] right-[2px]'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="link" className="p-0 md:p-0 w-6 h-8 rounded-full focus:outline-none hover:bg-gray-100">
                            <Image src={ElipsisIcon} alt='' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-24">
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Report</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Share Link</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className='flex flex-col items-center'>
                      <h4 className='text-[16px] font-medium text-black mb-2'>Margo Starr</h4>
                      <p className='text-center'>Thank you greatly for the pre-nomination! I am so grateful!</p>
                    </div>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[277px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='flex flex-col gap-7 p-5 pt-12 relative'>
                    <span className='absolute left-1/2 -top-9 -translate-x-1/2 bg-gradient-to-r from-[#ED2028] to-[#E80B5A] w-[73px] h-[73px] rounded-full text-white text-[15px] font-semibold flex justify-center items-center border-2 border-white hover:bg-slate-800 hover:hover:scale-110 transition duration-700 ease-in-out'>Vote</span>
                    <div className='absolute top-[2px] right-[2px]'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="link" className="p-0 md:p-0 w-6 h-8 rounded-full focus:outline-none hover:bg-gray-100">
                            <Image src={ElipsisIcon} alt='' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-24">
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Report</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Share Link</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className='flex flex-col items-center'>
                      <h4 className='text-[16px] font-medium text-black mb-2'>Margo Starr</h4>
                      <p className='text-center'>Thank you greatly for the pre-nomination! I am so grateful!</p>
                    </div>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[277px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='flex flex-col gap-7 p-5 pt-12 relative'>
                    <span className='absolute left-1/2 -top-9 -translate-x-1/2 bg-gradient-to-r from-[#ED2028] to-[#E80B5A] w-[73px] h-[73px] rounded-full text-white text-[15px] font-semibold flex justify-center items-center border-2 border-white hover:bg-slate-800 hover:hover:scale-110 transition duration-700 ease-in-out'>Vote</span>
                    <div className='absolute top-[2px] right-[2px]'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="link" className="p-0 md:p-0 w-6 h-8 rounded-full focus:outline-none hover:bg-gray-100">
                            <Image src={ElipsisIcon} alt='' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-24">
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Report</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Share Link</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className='flex flex-col items-center'>
                      <h4 className='text-[16px] font-medium text-black mb-2'>Margo Starr</h4>
                      <p className='text-center'>Thank you greatly for the pre-nomination! I am so grateful!</p>
                    </div>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

                {/* Start Each Contest Grid Component */}
                <div className='bg-white border border-[#F2F2F2] rounded-[10px] overflow-hidden'>
                  <div className='w-full h-[277px] overflow-hidden'>
                    <Image src={ContentImg} alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className='flex flex-col gap-7 p-5 pt-12 relative'>
                    <span className='absolute left-1/2 -top-9 -translate-x-1/2 bg-gradient-to-r from-[#ED2028] to-[#E80B5A] w-[73px] h-[73px] rounded-full text-white text-[15px] font-semibold flex justify-center items-center border-2 border-white hover:bg-slate-800 hover:hover:scale-110 transition duration-700 ease-in-out'>Vote</span>
                    <div className='absolute top-[2px] right-[2px]'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="link" className="p-0 md:p-0 w-6 h-8 rounded-full focus:outline-none hover:bg-gray-100">
                            <Image src={ElipsisIcon} alt='' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-24">
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Report</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Share Link</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className='flex flex-col items-center'>
                      <h4 className='text-[16px] font-medium text-black mb-2'>Margo Starr</h4>
                      <p className='text-center'>Thank you greatly for the pre-nomination! I am so grateful!</p>
                    </div>
                  </div>
                </div>
                {/* Start Each Contest Grid Component */}

              </div>{/* End Contest Section Grid Component */}

              <Pagination />

            </div>{/* End Contest Section Listing Component */}

          </div>{/* End Right content layout */}

          <Footer />

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}
