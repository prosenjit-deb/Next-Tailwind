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
                    Videos
                    </a>

                    <svg className="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
                </li>

                <li className="inline-flex items-center">
                    <a href="#" className="text-black hover:text-[#ED2227] text-sm">
                    Upload Videos
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
                <h2 className=' uppercase text-black font-semibold text-[24px]'>Upload Videos</h2>
              </div>
              {/* End Club Section Header Component */}

              <div>
                <div className='w-full bg-white rounded-[10px] p-7'>
                  <Form {...form}>
                    <form className="space-y-8">
                      <div className='gap-5 grid grid-cols-2 max-lg:grid-cols-1 border-b-[1px] border-black'>
                        <div className='flex-1'>
                          <h4 className='text-[15px] font-semibold text-black leading-normal uppercase'>video details</h4>  
                          <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                              <FormItem className="my-7">
                                <FormLabel className="text-[#333333] font-medium text-[14px]">Title</FormLabel>
                                <FormControl>
                                  <Input type="text" className="bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem className="my-7 relative">
                                <FormLabel className='text-[#333333] font-medium text-[14px]'>Category</FormLabel>
                                <FormControl>
                                  <Input type='text' className='bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none pr-40' {...field} />
                                </FormControl>
                                <span className='uppercase absolute right-6 top-11 text-[13px] text-[#ED2028] font-semibold cursor-pointer'>View categories</span>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                              <FormItem className="my-7">
                                <FormLabel className="text-[#333333] font-medium text-[14px]">Description</FormLabel>
                                <FormControl>
                                  <Textarea type="text" className="bg-transparent rounded-[8px] border border-[#D4D4D4] mt-1 h-14 text-black focus:shadow-none" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <h4 className='text-[15px] font-semibold text-black leading-normal uppercase'>additional informations</h4>
                          <h5 className='text-[14px] font-semibold text-[#333333] mt-3'>Set Your Price & Discount</h5>
                          <div className='grid grid-cols-3 max-md:grid-cols-1 gap-3 my-2 items-start'>
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
                                      <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="off">10% off</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="videoFree"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 bg-transparent border-none">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none flex gap-2 items-center">
                                    <FormLabel>
                                      Make This Vid Free
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
                          <h5 className='text-[14px] font-semibold text-[#333333] mt-3'>Model Attributes</h5>
                          <p className='text-[14px] font-normal text-[#333333] '>Select the attributes below that best describes the model or models in this vid. This will help your vid appear in the advanced search.</p>
                          <div className='grid grid-cols-3 max-md:grid-cols-1 gap-3 my-2 items-start'>
                            <FormField
                              control={form.control}
                              name="age"
                              render={({ field }) => (
                                <FormItem className="relative">
                                  <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                    <SelectTrigger className='mt-1 h-14'>
                                      <SelectValue placeholder="Age" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="1">Age 1</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="ethnicity"
                              render={({ field }) => (
                                <FormItem className="relative">
                                  <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                    <SelectTrigger className='mt-1 h-14'>
                                      <SelectValue placeholder="Ethnicity" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="1">Ethnicity 1</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="size"
                              render={({ field }) => (
                                <FormItem className="relative">
                                  <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                    <SelectTrigger className='mt-1 h-14'>
                                      <SelectValue placeholder="Breast Size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="1">Size 1</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              )}
                            />
                          </div>
                          <h5 className='text-[14px] font-semibold text-black leading-normal capitalize mt-4'>Your Membership</h5>
                          <FormField
                            control={form.control}
                            name="membership"
                            render={({ field }) => (
                              <FormItem className="my-2">
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="includeMembership" />
                                      </FormControl>
                                      <FormLabel className='text-[#545357] font-normal text-[14px]'>
                                        Include this vid in your membership
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="exclusive" />
                                      </FormControl>
                                      <FormLabel className='text-[#545357] font-normal text-[14px]'>
                                        Exclusive (this vid cannot be purchased outside of your membership)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="excludeMembership" />
                                      </FormControl>
                                      <FormLabel className='text-[#545357] font-normal text-[14px]'>This vid is not included in your membership</FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className='grid grid-cols-2 max-md:grid-cols-1 gap-3 my-2 items-start mt-4'>
                            <div>
                              <div className='flex items-center gap-4'>
                                <h5 className='text-[14px] font-semibold text-black leading-normal capitalize'>Security Options</h5>
                                <a href="#" className='text-[13px] text-[#ED2028] font-semibold uppercase'>Read More</a>
                              </div>
                              <FormField
                                control={form.control}
                                name="stream"
                                render={({ field }) => (
                                  <FormItem className="relative flex gap-6 mt-3 items-center">
                                    <FormLabel className='text-[#333333] font-medium text-[14px] w-5/6'>
                                        Stream Only
                                    </FormLabel>
                                    <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                      <SelectTrigger className='mt-1 h-14'>
                                        <SelectValue placeholder="No" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="1">Option 1</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <h5 className='text-[14px] font-semibold text-black leading-normal capitalize'>Block Teaser</h5>
                              <p className='text-[14px] font-normal text-black leading-normal'>Blocking teaser will limit teaser viewing to Premium Members.</p>
                              <FormField
                              control={form.control}
                              name="blocker"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border mt-2 bg-transparent border-none">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none flex gap-2 items-center">
                                    <FormLabel>
                                      Block
                                    </FormLabel>
                                  </div>
                                </FormItem>
                                )}
                              />
                            </div>
                          </div>
                          <h5 className='text-[14px] font-semibold text-black leading-normal capitalize mt-4'>Content Rating</h5>
                          <p className='text-[14px] font-normal text-[#333333]'>MV can use your SFW content with your consent for mainstream marketing campaigns which will increase your exposure.</p>
                          <FormField
                              control={form.control}
                              name="nudity"
                              render={({ field }) => (
                                <FormItem className="relative w-1/2 max-md:w-full">
                                  <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                    <SelectTrigger className='mt-1 h-14'>
                                      <SelectValue placeholder="Vid contains nudity" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="1">Option 1</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              )}
                          />
                          <h5 className='text-[14px] font-semibold text-black leading-normal capitalize mt-4'>Teaser</h5>
                          <div className='w-full flex gap-5 items-center'>
                            <FormField
                                control={form.control}
                                name="teaser"
                                render={({ field }) => (
                                  <FormItem className="relative w-1/2">
                                    <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                      <SelectTrigger className='mt-1 h-14'>
                                        <SelectValue placeholder="Create from video" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="1">Option 1</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormItem>
                                )}
                            />
                            <div>
                              <Label htmlFor="videoUpload">
                                <Button variant="outline" type="button" className='min-w-[150px] uppercase rounded-[50px]'>Upload Video</Button>
                              </Label>
                              <Input id="videoUpload" type="file" className='hidden' />
                            </div>
                          </div>
                          <h5 className='text-[14px] font-semibold text-black leading-normal uppercase mt-4'>published</h5>
                          <FormField
                            control={form.control}
                            name="dateTime"
                            render={({ field }) => (
                              <FormItem className="my-2">
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="launchNow" />
                                      </FormControl>
                                      <FormLabel className='text-[#545357] font-normal text-[14px]'>
                                        Launch right away!
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="exclusive" />
                                      </FormControl>
                                      <FormLabel className='text-[#545357] font-normal text-[14px]'>
                                        Select Date & Time
                                      </FormLabel>
                                      <Popover>
                                        <PopoverTrigger asChild>
                                          <FormControl>
                                            <Button
                                              variant={"outline"}
                                              className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                              )}
                                            >
                                              {field.value ? (
                                                format(field.value, "PPP")
                                              ) : (
                                                <span>Pick a date</span>
                                              )}
                                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                          </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                          <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                              date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                          />
                                        </PopoverContent>
                                      </Popover>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className='flex-1 my-2'>
                          <h4 className='text-[15px] font-semibold text-black leading-normal uppercase'>Upload clip</h4> 
                          <div className="flex flex-col items-center my-3 border-2 border-[#CECECE] border-dashed rounded-10 pt-28 pb-5">
                            <p className='text-[14px] font-semibold text-[#666666] text-center'>
                              Drag and Drop your files here
                            </p>
                            <p className='my-4 border-b-2 border-black relative w-16 flex items-center justify-center'>
                              <span className='uppercase text-black text-[12px] font-semibold bg-white absolute top-[-0.6rem] w-6 h-6 rounded-[50%] flex items-center justify-center'>or</span>
                            </p>
                            <Label htmlFor="uploadClip" className='font-semibold text-[#ED2028] py-3 px-6 rounded-[50px] border-2 border-[#ED2028] w-max capitalize cursor-pointer'>Browse Files</Label>
                            <Input id="uploadClip" type="file" className='hidden' />
                            <p className='text-[14px] font-normal text-[#545357] mt-10 px-40 text-center max-md:px-10'>
                              Supported file types are M4V, MP4, MOV - Vid must be under 10GB in size and over 1:00 minute long.
                            </p>
                          </div>
                          <h4 className='text-[15px] font-semibold text-black leading-normal uppercase mt-8'>Choose Preview Image</h4>
                          <div className='flex items-center gap-3 my-3'>
                              <div className='w-1/5 h-20 border-2 border-[#CECECE] border-dashed rounded-10 flex flex-col items-center justify-center'>
                                <CiImageOn />
                                <div className=''>
                                  <Label htmlFor="imgPreview" className='cursor-pointer'>Upload</Label>
                                  <Input id="imgPreview" type="file" className='hidden' />
                                </div>
                              </div>
                              <div className='w-1/5 h-20 border-2 border-[#CECECE] rounded-10'>

                              </div>
                              <div className='w-1/5 h-20 border-2 border-[#CECECE] rounded-10'>

                              </div>
                              <div className='w-1/5 h-20 border-2 border-[#CECECE] rounded-10'>

                              </div>
                          </div>
                          <h4 className='text-[15px] font-semibold text-black leading-normal uppercase mt-4'>Co-Performers</h4>
                          <div className='flex items-center'>
                            <h5 className='text-[14px] font-semibold text-black leading-normal capitalize w-4/5'>Does This Vid Feature One Or More Co-Performers?</h5>
                            <FormField
                                control={form.control}
                                name="nudity"
                                render={({ field }) => (
                                  <FormItem className="relative">
                                    <Select className='bg-transparent rounded-[8px] border border-[#D4D4D4] text-black'>
                                      <SelectTrigger className='h-14 min-w-20'>
                                        <SelectValue placeholder="Yes" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="1">Option 1</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormItem>
                                )}
                            />
                          </div>
                          <p className='text-[14px] font-normal text-[#545357] leading-normal mt-2'>
                            Uploaders are required to declare all co-performers and submit documentation per the <a href='#' className='underline'>Terms of Use for Uploaders</a>.Producer accounts are required to declare and submit documentation for all performers other than the verified account owner.For more details, please read: <a href='#' className='underline'>Co-performer Documentation</a>.
                          </p>
                          <div className='my-3'>
                            <div className='flex items-center justify-between'>
                              <h5 className='text-[14px] font-semibold text-black leading-normal capitalize'>Co-Performer 1</h5>
                              <LiaTimesSolid className='text-[30px] cursor-pointer' />
                            </div>
                            <FormField
                            control={form.control}
                            name="documents"
                            render={({ field }) => (
                              <FormItem className="my-2">
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="not" />
                                      </FormControl>
                                      <FormLabel className='text-[#545357] font-normal text-[14px]'>
                                        Co-performer is not an Pornyo Star
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="isStar" />
                                      </FormControl>
                                      <FormLabel className='text-[#545357] font-normal text-[14px]'>
                                        Co-performer is an Pornyo Star
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                              )}
                            />
                            <div className="flex flex-col items-center my-3 border-2 border-[#CECECE] border-dashed rounded-10 pt-28 pb-5">
                              <p className='text-[14px] font-semibold text-[#666666] text-center'>
                                Drag and Drop your files here
                              </p>
                              <p className='my-4 border-b-2 border-black relative w-16 flex items-center justify-center'>
                                <span className='uppercase text-black text-[12px] font-semibold bg-white absolute top-[-0.6rem] w-6 h-6 rounded-[50%] flex items-center justify-center'>or</span>
                              </p>
                              <Label htmlFor="uploadClip" className='font-semibold text-[#ED2028] py-3 px-6 rounded-[50px] border-2 border-[#ED2028] w-max capitalize cursor-pointer'>Browse Files</Label>
                              <Input id="uploadClip" type="file" className='hidden' />
                              <p className='text-[14px] font-normal text-[#545357] mt-10 px-40 text-center max-md:px-10'>
                                All co-performer documents (Photo ID and Release Form) must be selected and uploaded at the same time.
                              </p>
                              <p className='text-[14px] font-normal text-[#545357] mt-10 px-40 text-center max-md:px-10'>
                                Supported files types are pdf, txt, png, jpg. File must be under 5MB. A Maximum of 10 files can be uploaded.
                              </p>
                            </div>
                          </div>
                          <div className='my-3 flex items-center justify-between'>
                            <Button type='button' className='bg-transparent text-black hover:bg-transparent uppercase font-semibold flex items-center gap-3 px-0'>
                              <FaPlus />
                              <span>Add Another</span>
                            </Button>
                            <Button variant='outline' type='button' className='rounded-[50px] border-[1px] border-[#333333] text-[#ED2028] uppercase'>
                              Submit Documents
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className='grid grid-cols-2 my-7 max-md:grid-cols-1'>
                          <p className='color-[#545357] text-[10px] font-regular'>
                            By uploading your vids to ManyVids.com, you agree to comply with MV's content Rules and you authorize MV to issue notices of claimed infringement to service providers, known as DMCA takedown notices, on your behalf in accordance with MV's Terms for Uploaders.
                          </p>
                          <div className='flex items-center justify-end gap-4'>
                            <Button type="button" className='bg-transparent text-black font-semibold hover:bg-transparent uppercase'>Cancel</Button>
                            <Button variant="default" type="submit" className='rounded-[50px] bg-[#ED2028]'>Save & Launch</Button>
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
