"use client";

import { useState } from 'react'; // Import useState hook
import { useForm } from 'react-hook-form'; // Import useForm hook
import MenuSidebar from './../../../components/sidebarwithauth/page';
import Footer from './../../../components/footer/page';
import HeaderWithAuth from './../../../components/headerwithauth/page';
import "react-circular-progressbar/dist/styles.css";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { FaPlus } from "react-icons/fa";
import { CalendarIcon } from "lucide-react"
import { CiImageOn } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Dashboard({}) {
  const [formValues, setFormValues] = useState({}); // State to store form values
  const form = useForm(); // Initialize useForm hook

  const handleFormSubmit = (data) => {
    setFormValues(data);
    console.log(data); // Logging form data
  };

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
                    Dashboard
                    </a>

                    <svg className="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
                </li>

                <li className="inline-flex items-center">
                    <a href="#" className="text-[#8C8989] hover:text-[#ED2227] text-sm">
                    Store item
                    </a>

                    <svg className="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
                </li>

                <li className="inline-flex items-center">
                    <a href="#" className="text-black hover:text-[#ED2227] text-sm">
                    Upload store item
                    </a>
                </li> 
            </ul>
        </div>
        {/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-8 pb-20'>

            {/* Start Club Section Listing Component */}
            <div className='w-100 mb-9'>

              {/* Start Club Section Header Component */}
              <div className='mb-6'>
                <h2 className=' uppercase text-black font-semibold text-[24px]'>Upload Store Items</h2>
              </div>
              {/* End Club Section Header Component */}

              <div>
                <div className='w-full bg-white rounded-[10px] p-7'>
                  <Form {...form}>
                    <form className="space-y-8">
                    <h4 className='text-[15px] font-semibold text-black leading-normal uppercase'>upload photos</h4>  
                    <div className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8'>
                      <div className="flex flex-col items-center my-3 bg-[#FDFDFD] border-2 border-[#CECECE] border-dashed rounded-10 py-16">
                        <p className='text-[14px] font-semibold text-[#666666] text-center'>
                          Drag and Drop your files here
                        </p>
                        <p className='my-4 border-b-2 border-black relative w-16 flex items-center justify-center'>
                          <span className='uppercase text-black text-[12px] font-semibold bg-white absolute top-[-0.6rem] w-6 h-6 rounded-[50%] flex items-center justify-center'>or</span>
                        </p>
                        <Label htmlFor="uploadClip" className='font-semibold text-[#ED2028] py-3 px-6 rounded-[50px] border-2 border-[#ED2028] w-max capitalize cursor-pointer'>Browse Files</Label>
                        <Input id="uploadClip" type="file" className='hidden' />
                      </div>
                      <div className="flex flex-col items-center my-3 bg-[#FDFDFD] border-2 border-[#CECECE] border-dashed rounded-10 py-16">
                        <p className='text-[14px] font-semibold text-[#666666] text-center'>
                          Drag and Drop your files here
                        </p>
                        <p className='my-4 border-b-2 border-black relative w-16 flex items-center justify-center'>
                          <span className='uppercase text-black text-[12px] font-semibold bg-white absolute top-[-0.6rem] w-6 h-6 rounded-[50%] flex items-center justify-center'>or</span>
                        </p>
                        <Label htmlFor="uploadClip" className='font-semibold text-[#ED2028] py-3 px-6 rounded-[50px] border-2 border-[#ED2028] w-max capitalize cursor-pointer'>Browse Files</Label>
                        <Input id="uploadClip" type="file" className='hidden' />
                      </div>
                      <div className="flex flex-col items-center my-3 bg-[#FDFDFD] border-2 border-[#CECECE] border-dashed rounded-10 py-16">
                        <p className='text-[14px] font-semibold text-[#666666] text-center'>
                          Drag and Drop your files here
                        </p>
                        <p className='my-4 border-b-2 border-black relative w-16 flex items-center justify-center'>
                          <span className='uppercase text-black text-[12px] font-semibold bg-white absolute top-[-0.6rem] w-6 h-6 rounded-[50%] flex items-center justify-center'>or</span>
                        </p>
                        <Label htmlFor="uploadClip" className='font-semibold text-[#ED2028] py-3 px-6 rounded-[50px] border-2 border-[#ED2028] w-max capitalize cursor-pointer'>Browse Files</Label>
                        <Input id="uploadClip" type="file" className='hidden' />
                      </div>
                      <div className="flex flex-col items-center my-3 bg-[#FDFDFD] border-2 border-[#CECECE] border-dashed rounded-10 py-16">
                        <p className='text-[14px] font-semibold text-[#666666] text-center'>
                          Drag and Drop your files here
                        </p>
                        <p className='my-4 border-b-2 border-black relative w-16 flex items-center justify-center'>
                          <span className='uppercase text-black text-[12px] font-semibold bg-white absolute top-[-0.6rem] w-6 h-6 rounded-[50%] flex items-center justify-center'>or</span>
                        </p>
                        <Label htmlFor="uploadClip" className='font-semibold text-[#ED2028] py-3 px-6 rounded-[50px] border-2 border-[#ED2028] w-max capitalize cursor-pointer'>Browse Files</Label>
                        <Input id="uploadClip" type="file" className='hidden' />
                      </div>
                      </div>
                      <div className='gap-5 grid grid-cols-2 max-lg:grid-cols-1 border-b-[1px] border-black'>
                        <div className='flex-1'>
                          <h4 className='text-[15px] font-semibold text-black leading-normal uppercase'>Item Details</h4>
                          <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                              <FormItem className="my-7">
                                <FormLabel className="text-[#333333] font-medium text-[14px]">Item Title</FormLabel>
                                <FormControl>
                                  <Input type="text" className="bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-5'>
                            <FormField
                              control={form.control}
                              name="category"
                              render={({ field }) => (
                                <FormItem className="my-7 relative">
                                  <FormLabel className='text-[#333333] font-medium text-[14px]'>Category</FormLabel>
                                  <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                    <SelectTrigger className='mt-1 h-14'>
                                      <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="off">option one</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              )}
                            />
                            <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                              <FormItem className="my-7">
                                <FormLabel className="text-[#333333] font-medium text-[14px]">Quantity</FormLabel>
                                <FormControl>
                                  <Input type="text" className="bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                            />
                          </div>
                          <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                              <FormItem className="my-7">
                                <FormLabel className="text-[#333333] font-medium text-[14px] flex items-center justify-between">
                                  Description
                                  <span>Max 5000 characters</span>
                                </FormLabel>
                                <FormControl>
                                  <Textarea type="text" className="bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-5'>
                            <FormField
                            control={form.control}
                            name="selectSize"
                            render={({ field }) => (
                              <FormItem className="my-7">
                                <FormLabel className="text-[#333333] font-medium text-[14px]">Select Size(s)</FormLabel>
                                <div className='flex items-center gap-4 my-0'>
                                  <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                    <SelectTrigger className='mt-1 h-14'>
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="off">option one</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                    <SelectTrigger className='mt-1 h-14'>
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="off">option one</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="itmCondition"
                            render={({ field }) => (
                              <FormItem className="my-7">
                                <FormLabel className="text-[#333333] font-medium text-[14px]">Item Condition</FormLabel>
                                <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                  <SelectTrigger className='mt-1 h-14'>
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="off">option one</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormItem>
                            )}
                            />
                          </div>
                          <div className='grid grid-cols-2 max-md:grid-cols-1 gap-3 my-2 items-start'>
                            <div>
                              <h3 className='text-[16px] text-[#333333] font-normal'>Set Item Price & Discount</h3>
                              <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-3'>
                                <FormField
                                  control={form.control}
                                  name="price"
                                  render={({ field }) => (
                                    <FormItem className="relative">
                                      <span class='absolute top-6 left-3 text-[16px] text-[#333333] font-normal'>$</span>
                                      <FormControl>
                                        <Input type='text' className='bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none pr-40' {...field} />
                                      </FormControl>
                                      <span class='absolute right-3 top-5 text-[14px] text-[#333333] font-normal'>USD</span>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="discount"
                                  render={({ field }) => (
                                    <FormItem className="relative">
                                      <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                        <SelectTrigger className='mt-1 h-14'>
                                          <SelectValue placeholder="10% off" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="off">10% off</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </FormItem>
                                  )}
                                />
                              </div>
                            </div>
                            <div>
                              <h3 className='text-[16px] text-[#333333] font-normal'>Marketing</h3>
                              <FormField
                                control={form.control}
                                name="videoFree"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center space-x-3 pb-2 rounded-md border bg-transparent border-none">
                                    <FormControl className="border-[#ED2028]">
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none flex gap-2 items-center">
                                      <FormLabel>
                                        Promote As New
                                      </FormLabel>
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger className='w-5 h-5 rounded-[50%] border border-[#333333] font-bold italic'>i</TooltipTrigger>
                                          <TooltipContent>
                                            <p>Tooltip content goes here</p>
                                          </TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                    </div>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="videoFree"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center space-x-3 rounded-md border bg-transparent border-none">
                                    <FormControl className="border-[#ED2028]">
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <div className="leading-none flex gap-2 items-center">
                                      <FormLabel>
                                        Best Value
                                      </FormLabel>
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger className='w-5 h-5 rounded-[50%] border border-[#333333] font-bold italic'>i</TooltipTrigger>
                                          <TooltipContent>
                                            <p>Tooltip content goes here</p>
                                          </TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                    </div>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                          <h4 className='text-[15px] font-semibold text-black leading-normal uppercase mt-7 mb-2'>shipping</h4>
                          <h5 className='text-[14px] font-semibold text-black leading-normal capitalize'>This item will be shipped from </h5>
                          <p className='text-[14px] font-normal text-[#333333]'>MV can use your SFW content with your consent for mainstream marketing campaigns which will increase your exposure.</p>
                          <FormField
                              control={form.control}
                              name="country"
                              render={({ field }) => (
                                <FormItem className="relative w-1/2 max-md:w-full">
                                  <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                    <SelectTrigger className='mt-1 h-14'>
                                      <SelectValue placeholder="Select country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="1">Option 1</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              )}
                          />
                          <div className='my-4'>
                            <p className='text-[12px] font-normal text-[#545357'>Select the locations(s) and amount you need to ship this item</p>
                            <div className='flex items-center justify-between'>
                              <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border bg-transparent border-none">
                                    <FormControl className="border-[#ED2028]">
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none flex gap-2 items-center">
                                      <FormLabel>
                                        US only
                                      </FormLabel>
                                    </div>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="locationPrice"
                                render={({ field }) => (
                                  <FormItem className="relative w-1/3">
                                    <span class='absolute top-6 left-3 text-[16px] text-[#333333] font-normal'>$</span>
                                    <FormControl>
                                      <Input type='text' placeholder='2.00' className='bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none pl-8 pr-16' {...field} />
                                    </FormControl>
                                    <span class='absolute right-3 top-5 text-[14px] text-[#333333] font-normal'>USD</span>
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className='flex items-center justify-between'>
                              <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border bg-transparent border-none">
                                    <FormControl className="border-[#ED2028]">
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none flex gap-2 items-center">
                                      <FormLabel>
                                        International
                                      </FormLabel>
                                    </div>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="locationPrice"
                                render={({ field }) => (
                                  <FormItem className="relative w-1/3">
                                    <span class='absolute top-6 left-3 text-[16px] text-[#333333] font-normal'>$</span>
                                    <FormControl>
                                      <Input type='text' placeholder='3.00' className='bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none pl-8 pr-16' {...field} />
                                    </FormControl>
                                    <span class='absolute right-3 top-5 text-[14px] text-[#333333] font-normal'>USD</span>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                          <div className='my-4'>
                            <h5 className='text-[14px] font-semibold text-black leading-normal capitalize max-md:mb-4'>Add extras <span className='text-sm text-[#545357]'>(Optional)</span></h5>
                            <div className='flex items-center justify-between max-md:flex-col max-md:items-start max-md:mb-4'>
                              <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border bg-transparent border-none">
                                    <FormControl className="border-[#ED2028]">
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none flex gap-2 items-center">
                                      <FormLabel>
                                        A sexy note signed by me
                                      </FormLabel>
                                    </div>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="locationPrice"
                                render={({ field }) => (
                                  <FormItem className="relative w-1/3 max-md:w-full max-md:mt-2">
                                    <span class='absolute top-6 left-3 text-[16px] text-[#333333] font-normal'>$</span>
                                    <FormControl>
                                      <Input type='text' className='bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none pl-8 pr-16' {...field} />
                                    </FormControl>
                                    <span class='absolute right-3 top-5 text-[14px] text-[#333333] font-normal'>USD</span>
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className='flex items-center justify-between max-md:flex-col max-md:items-start max-md:mb-4'>
                              <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border bg-transparent border-none">
                                    <FormControl className="border-[#ED2028]">
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none flex gap-2 items-center">
                                      <FormLabel>
                                        Add my perfume to the item
                                      </FormLabel>
                                    </div>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="locationPrice"
                                render={({ field }) => (
                                  <FormItem className="relative w-1/3 max-md:w-full max-md:mt-2">
                                    <span class='absolute top-6 left-3 text-[16px] text-[#333333] font-normal'>$</span>
                                    <FormControl>
                                      <Input type='text' className='bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none pl-8 pr-16' {...field} />
                                    </FormControl>
                                    <span class='absolute right-3 top-5 text-[14px] text-[#333333] font-normal'>USD</span>
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className='flex items-center justify-between max-md:flex-col max-md:items-start max-md:mb-4'>
                              <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border bg-transparent border-none">
                                    <FormControl className="border-[#ED2028]">
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none flex gap-2 items-center">
                                      <FormLabel>
                                        Make the panty dirty with pussy juice
                                      </FormLabel>
                                    </div>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="locationPrice"
                                render={({ field }) => (
                                  <FormItem className="relative w-1/3 max-md:w-full max-md:mt-2">
                                    <span class='absolute top-6 left-3 text-[16px] text-[#333333] font-normal'>$</span>
                                    <FormControl>
                                      <Input type='text' className='bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none pl-8 pr-16' {...field} />
                                    </FormControl>
                                    <span class='absolute right-3 top-5 text-[14px] text-[#333333] font-normal'>USD</span>
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className='flex items-center justify-between max-md:flex-col max-md:items-start max-md:mb-4'>
                              <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border bg-transparent border-none">
                                    <FormControl className="border-[#ED2028]">
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none flex gap-2 items-center">
                                      <FormLabel>
                                        Autographed picture wearing this item
                                      </FormLabel>
                                    </div>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="locationPrice"
                                render={({ field }) => (
                                  <FormItem className="relative w-1/3 max-md:w-full max-md:mt-2">
                                    <span class='absolute top-6 left-3 text-[16px] text-[#333333] font-normal'>$</span>
                                    <FormControl>
                                      <Input type='text' className='bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none pl-8 pr-16' {...field} />
                                    </FormControl>
                                    <span class='absolute right-3 top-5 text-[14px] text-[#333333] font-normal'>USD</span>
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className='flex items-center justify-between max-md:flex-col max-md:items-start max-md:mb-4'>
                              <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border bg-transparent border-none">
                                    <FormControl className="border-[#ED2028]">
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none flex gap-2 items-center">
                                      <FormLabel>
                                        Seal the item in a plastic bag
                                      </FormLabel>
                                    </div>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="locationPrice"
                                render={({ field }) => (
                                  <FormItem className="relative w-1/3 max-md:w-full max-md:mt-2">
                                    <span class='absolute top-6 left-3 text-[16px] text-[#333333] font-normal'>$</span>
                                    <FormControl>
                                      <Input type='text' className='bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none pl-8 pr-16' {...field} />
                                    </FormControl>
                                    <span class='absolute right-3 top-5 text-[14px] text-[#333333] font-normal'>USD</span>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='flex-1 my-2'>
                          <h4 className='text-[15px] font-semibold text-black leading-normal uppercase'>Select VID</h4>
                          <h5 className='text-[14px] text-[#333333] font-semibold leading-normal normal mt-3'>Select vid(s) where this item was worn</h5>
                          <div className='bg-[#F6F6F6] w-full h-4/6 border-[1px] border-[#DBDBDB] rounded-10 mt-2'>

                          </div>
                        </div>
                      </div>
                      <div className='grid grid-cols-2 my-7 max-md:grid-cols-1'>
                          <p className='color-[#545357] text-[10px] font-regular'>
                            By clicking on "Upload Image", you agree that this image does not violate ManyVids <a href='#' className='underline'>Terms</a> and that you are willing to provide any <a href='#' className='underline'>2257 records</a> upon request.
                          </p>
                          <div className='flex items-center justify-end gap-4'>
                            <Button type="button" className='bg-transparent text-black font-semibold hover:bg-transparent uppercase'>Cancel</Button>
                            <Button variant="outline" type="submit" className='rounded-[50px] border-[1px] border-[#333333] text-[#ED2028] uppercase'>Save & Launch</Button>
                          </div>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>{/* End Club Section Listing Component */}

          </div>{/* End Right content layout */}

          {/* Start Footer Component */}
          <Footer />{/* End Footer Component */}

        </div>{/* End Right panel Page layout */}

      </div>{/* End Page layout */}
    </main>
  )
}
