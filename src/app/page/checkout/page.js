"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import MenuSidebar from './../../components/sidebar/page';
import Footer from './../../components/footer/page';
import Header from './../../components/header/page';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function Checkout() {
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
                <a href="#" class="text-black hover:text-[#ED2227] text-sm">
                Checkout
                </a>
              </li>
            </ul>
          </div>{/* End Breadcrumb Component */}

          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-5 pb-20'>

            {/* Start Contest Section Listing Component */}
            <div className='w-100 mb-9'>

              <div className='flex flex-wrap items-center justify-between mb-6 gap-5'>
                <h1 className='text-black font-semibold text-[24px]'>Checkout</h1>
              </div>
              
              <div className=" flex flex-wrap space-x-16 w-full xl:w-10/12">
                <div className="flex flex-col flex-1 w-full lg:w-6/12">
                  <div>
                    <h2 className="mb-6 text-[20px] font-semibold">Enter Billing Address:</h2>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="gap-5 grid grid-cols-1 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="Name"
                          render={({ field }) => (
                            <FormItem className="col-span-2">
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <span className='relative flex gap-3 items-center w-full'>
                                  <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4 w-full'>
                                    <Input type="number" placeholder="" className=" bg-transparent border-0 ps-1" />
                                  </span>
                                </span>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="Address"
                          render={({ field }) => (
                            <FormItem className="col-span-2">
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <span className='relative flex gap-3 items-center w-full'>
                                  <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4 w-full'>
                                    <Input type="number" placeholder="" className=" bg-transparent border-0 ps-1" />
                                  </span>
                                </span>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="City"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-[50px] text-[14px]">
                                    <SelectValue placeholder="Select month" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="january">City</SelectItem>
                                  <SelectItem value="february">City</SelectItem>
                                  <SelectItem value="march">City</SelectItem>
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
                          name="State"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-[50px] text-[14px]">
                                    <SelectValue placeholder="Select month" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="january">State</SelectItem>
                                  <SelectItem value="february">State</SelectItem>
                                  <SelectItem value="march">State</SelectItem>
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
                          name="zip"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Zip</FormLabel>
                              <FormControl>
                                <span className='relative flex gap-3 items-center w-full'>
                                  <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4 w-full'>
                                    <Input type="number" placeholder="" className=" bg-transparent border-0 ps-1" />
                                  </span>
                                </span>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-[50px] text-[14px]">
                                    <SelectValue placeholder="Select month" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="january">Country</SelectItem>
                                  <SelectItem value="february">Country</SelectItem>
                                  <SelectItem value="march">Country</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <h2 className="text-[20px] font-semibold col-span-2 pt-6 mb-0">Enter Shipping Address:</h2>
                        <div className="col-span-2">
                          <span className="flex items-center space-x-2">
                            <Checkbox id="sameaddress" className="w-[18px] h-[18px] border-[#D4D4D4]" />
                            <label
                              htmlFor="sameaddress"
                              className="text-[13px] font-medium text-[#000] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Shipping address is as same as billing address
                            </label>
                          </span>
                        </div>
                          <FormField
                          control={form.control}
                          name="Name"
                          render={({ field }) => (
                            <FormItem className="col-span-2">
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <span className='relative flex gap-3 items-center w-full'>
                                  <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4 w-full'>
                                    <Input type="number" placeholder="" className=" bg-transparent border-0 ps-1" />
                                  </span>
                                </span>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="Address"
                          render={({ field }) => (
                            <FormItem className="col-span-2">
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <span className='relative flex gap-3 items-center w-full'>
                                  <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4 w-full'>
                                    <Input type="number" placeholder="" className=" bg-transparent border-0 ps-1" />
                                  </span>
                                </span>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="City"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-[50px] text-[14px]">
                                    <SelectValue placeholder="Select month" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="january">City</SelectItem>
                                  <SelectItem value="february">City</SelectItem>
                                  <SelectItem value="march">City</SelectItem>
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
                          name="State"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-[50px] text-[14px]">
                                    <SelectValue placeholder="Select month" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="january">State</SelectItem>
                                  <SelectItem value="february">State</SelectItem>
                                  <SelectItem value="march">State</SelectItem>
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
                          name="zip"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Zip</FormLabel>
                              <FormControl>
                                <span className='relative flex gap-3 items-center w-full'>
                                  <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4 w-full'>
                                    <Input type="number" placeholder="" className=" bg-transparent border-0 ps-1" />
                                  </span>
                                </span>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-[50px] text-[14px]">
                                    <SelectValue placeholder="Select month" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="january">Country</SelectItem>
                                  <SelectItem value="february">Country</SelectItem>
                                  <SelectItem value="march">Country</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex flex-wrap space-x-2 justify-end col-span-2">
                          <Button variant="outline" className="text-black">Cancel</Button>
                          <Button variant="default">Proceed</Button>
                        </div>
                      </form>
                    </Form>
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
