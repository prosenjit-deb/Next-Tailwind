"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import MenuSidebar from '../../../components/sidebarwithauth/page';
import Footer from '../../../components/footer/page';
import Header from '../../../components/headerwithauth/page';

import UserImg from './../../../../assets/images/user-img-1.jpeg';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const MyMembership = () => {

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
                <h2 className='text-[20px] font-semibold text-black mb-3'>My Membership</h2>
                <div>
                  <ol className="text-[13px] text-[#333] leading-6 mb-9 list-decimal ms-4">
                    <li>Vids on left are part of your Membership</li>
                    <li>Drag vids to right to exclude them from your membership</li>
                    <li>By checking the "Membership exclusive" box, that vid cannot be purchased outside of your membership</li>
                  </ol>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="flex flex-wrap gap-7">
                      <div className="w-full md:w-6/12 flex-auto md:flex-1">
                        <div className="flex flex-wrap items-end justify-between mb-3">
                          <h2 className='text-[20px] font-semibold text-black'>Included in Membership (14)</h2>
                          <span className="text-[13px] text-[#333] leading-6">Drag from left to right</span>
                        </div>
                        <div className="bg-white border border-[#F2F2F2] rounded-10">
                          <div className="py-6 px-5 max-h-[560px] overflow-auto">
                            <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                              <FormField
                                  control={form.control}
                                  name=""
                                  render={({ field }) => (
                                    <FormItem className="member-choose">
                                      <FormControl>
                                        <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="hidden"
                                        />
                                      </FormControl>
                                      <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                        <div className="flex flex-wrap gap-3 items-center">
                                          <div className="w-[60px] h-[36px]">
                                            <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                          </div>
                                          <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                        </div>
                                        <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                          <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                        </div>
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name=""
                                  render={({ field }) => (
                                    <FormItem className="member-choose">
                                      <FormControl>
                                        <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="hidden"
                                        />
                                      </FormControl>
                                      <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                        <div className="flex flex-wrap gap-3 items-center">
                                          <div className="w-[60px] h-[36px]">
                                            <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                          </div>
                                          <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                        </div>
                                        <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                          <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                        </div>
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name=""
                                  render={({ field }) => (
                                    <FormItem className="member-choose">
                                      <FormControl>
                                        <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="hidden"
                                        />
                                      </FormControl>
                                      <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                        <div className="flex flex-wrap gap-3 items-center">
                                          <div className="w-[60px] h-[36px]">
                                            <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                          </div>
                                          <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                        </div>
                                        <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                          <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                        </div>
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name=""
                                  render={({ field }) => (
                                    <FormItem className="member-choose">
                                      <FormControl>
                                        <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="hidden"
                                        />
                                      </FormControl>
                                      <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                        <div className="flex flex-wrap gap-3 items-center">
                                          <div className="w-[60px] h-[36px]">
                                            <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                          </div>
                                          <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                        </div>
                                        <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                          <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                        </div>
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name=""
                                  render={({ field }) => (
                                    <FormItem className="member-choose">
                                      <FormControl>
                                        <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="hidden"
                                        />
                                      </FormControl>
                                      <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                        <div className="flex flex-wrap gap-3 items-center">
                                          <div className="w-[60px] h-[36px]">
                                            <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                          </div>
                                          <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                        </div>
                                        <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                          <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                        </div>
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name=""
                                  render={({ field }) => (
                                    <FormItem className="member-choose">
                                      <FormControl>
                                        <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="hidden"
                                        />
                                      </FormControl>
                                      <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                        <div className="flex flex-wrap gap-3 items-center">
                                          <div className="w-[60px] h-[36px]">
                                            <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                          </div>
                                          <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                        </div>
                                        <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                          <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                        </div>
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name=""
                                  render={({ field }) => (
                                    <FormItem className="member-choose">
                                      <FormControl>
                                        <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="hidden"
                                        />
                                      </FormControl>
                                      <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                        <div className="flex flex-wrap gap-3 items-center">
                                          <div className="w-[60px] h-[36px]">
                                            <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                          </div>
                                          <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                        </div>
                                        <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                          <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                        </div>
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name=""
                                  render={({ field }) => (
                                    <FormItem className="member-choose">
                                      <FormControl>
                                        <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="hidden"
                                        />
                                      </FormControl>
                                      <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                        <div className="flex flex-wrap gap-3 items-center">
                                          <div className="w-[60px] h-[36px]">
                                            <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                          </div>
                                          <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                        </div>
                                        <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                          <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                        </div>
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name=""
                                  render={({ field }) => (
                                    <FormItem className="member-choose">
                                      <FormControl>
                                        <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="hidden"
                                        />
                                      </FormControl>
                                      <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                        <div className="flex flex-wrap gap-3 items-center">
                                          <div className="w-[60px] h-[36px]">
                                            <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                          </div>
                                          <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                        </div>
                                        <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                          <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                        </div>
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name=""
                                  render={({ field }) => (
                                    <FormItem className="member-choose">
                                      <FormControl>
                                        <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="hidden"
                                        />
                                      </FormControl>
                                      <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                        <div className="flex flex-wrap gap-3 items-center">
                                          <div className="w-[60px] h-[36px]">
                                            <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                          </div>
                                          <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                        </div>
                                        <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                          <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                        </div>
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                              </form>
                            </Form>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-6/12 flex-auto md:flex-1">
                        <div className="flex flex-wrap items-end justify-between mb-3">
                          <h2 className='text-[20px] font-semibold text-black'>Included in Membership (14)</h2>
                          <span className="text-[13px] text-[#333] leading-6">Drag from left to right</span>
                        </div>
                        <div className="bg-white border border-[#F2F2F2] rounded-10">
                          <div className="py-6 px-5 max-h-[560px] overflow-auto">
                              
                                <FormField
                                    control={form.control}
                                    name=""
                                    render={({ field }) => (
                                      <FormItem className="member-choose">
                                        <FormControl>
                                          <Checkbox
                                          checked={field.value}
                                          onCheckedChange={field.onChange}
                                          className="hidden"
                                          />
                                        </FormControl>
                                        <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                          <div className="flex flex-wrap gap-3 items-center">
                                            <div className="w-[60px] h-[36px]">
                                              <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                          </div>
                                          <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                            <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                          </div>
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name=""
                                    render={({ field }) => (
                                      <FormItem className="member-choose">
                                        <FormControl>
                                          <Checkbox
                                          checked={field.value}
                                          onCheckedChange={field.onChange}
                                          className="hidden"
                                          />
                                        </FormControl>
                                        <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                          <div className="flex flex-wrap gap-3 items-center">
                                            <div className="w-[60px] h-[36px]">
                                              <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                          </div>
                                          <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                            <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                          </div>
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name=""
                                    render={({ field }) => (
                                      <FormItem className="member-choose">
                                        <FormControl>
                                          <Checkbox
                                          checked={field.value}
                                          onCheckedChange={field.onChange}
                                          className="hidden"
                                          />
                                        </FormControl>
                                        <FormLabel className="flex flex-wrap justify-between items-center bg-[#FDFDFD] border border-[#E4E4E4] p-3 rounded-10 checkbox-checked:border-[#ED2028]">
                                          <div className="flex flex-wrap gap-3 items-center">
                                            <div className="w-[60px] h-[36px]">
                                              <Image src={UserImg} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-[13px] text-[#545357] font-medium max-w-[154px] leading-normal">Arab Girl in Bondage, Fucked by Machine</span>
                                          </div>
                                          <div className="member-choose-check relative before:w-5 before:h-5 before:rounded-[4px] before:border before:border-[#ED2028] ps-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 checkbox-checked:before:bg-[#ED2028]">
                                            <span className="text-[14px] text-[#333] font-normal leading-normal">Membership exclusive</span>
                                          </div>
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-wrap items-center justify-end mt-5'>
                      <div className="flex flex-wrap items-center">
                        <Button type="submit" variant="link" className="text-black">Cancel</Button>
                        <Button type="submit" variant="default">Save</Button>
                      </div>
                    </div>
                  </form>
                </Form>

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

export default MyMembership