"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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

import MenuSidebar from '../../components/sidebarwithauth/page';
import Footer from '../../components/footer/page';
import HeaderWithAuth from '../../components/headerwithauth/page';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const items = [
  {
    slno: "1",
    amount: "$19.49",
    date: "19.01.2024",
    account: "01BN125475",
    status: "Successful",
    remark: "Monthly income",
  },
  {
    slno: "2",
    amount: "$19.49",
    date: "19.01.2024",
    account: "01BN125475",
    status: "Successful",
    remark: "Monthly income",
  },
  {
    slno: "3",
    amount: "$19.49",
    date: "19.01.2024",
    account: "01BN125475",
    status: "Successful",
    remark: "Monthly income",
  },
  {
    slno: "4",
    amount: "$19.49",
    date: "19.01.2024",
    account: "01BN125475",
    status: "Successful",
    remark: "Monthly income",
  },
  {
    slno: "5",
    amount: "$19.49",
    date: "19.01.2024",
    account: "01BN125475",
    status: "Successful",
    remark: "Monthly income",
  },
  {
    slno: "6",
    amount: "$19.49",
    date: "19.01.2024",
    account: "01BN125475",
    status: "Successful",
    remark: "Monthly income",
  },
  {
    slno: "7",
    amount: "$19.49",
    date: "19.01.2024",
    account: "01BN125475",
    status: "Successful",
    remark: "Monthly income",
  },
  {
    slno: "8",
    amount: "$19.49",
    date: "19.01.2024",
    account: "01BN125475",
    status: "Successful",
    remark: "Monthly income",
  },
  {
    slno: "9",
    amount: "$19.49",
    date: "19.01.2024",
    account: "01BN125475",
    status: "Successful",
    remark: "Monthly income",
  },
  {
    slno: "10",
    amount: "$19.49",
    date: "19.01.2024",
    account: "01BN125475",
    status: "Successful",
    remark: "Monthly income",
  },
]

export default function WithdrawlRequest() {
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
          <div class="px-8 py-4 flex items-center flex-wrap bg-white">
            <ul class="flex items-center">

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Home
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Dashboard
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-[#8C8989] hover:text-[#ED2227] text-sm">
                Earning History
                </a>

                <svg class="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
              </li>

              <li class="inline-flex items-center">
                <a href="#" class="text-black hover:text-[#ED2227] text-sm">
                Withdrawal Requests
                </a>
              </li>
            </ul>
          </div>{/* End Breadcrumb Component */}


          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-8 pb-20 flex flex-col gap-7'>

            <div className='flex flex-wrap items-center justify-between gap-5'>
              <h2 className='text-black font-semibold text-[24px]'>Withdrawal Requests</h2>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-col items-end">
                  <span className='text-[14px] font-medium text-[#333]'>Total Earnings</span>
                  <span className='text-[16px] text-black font-semibold'>200 TKNS ($200)</span>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap gap-5 justify-between'>
              <div className='w-full md:w-8/12 flex-1'>
                <div className='flex flex-wrap items-center justify-between gap-5 mb-2'>
                  <div className='flex flex-wrap items-center gap-4'>
                    <h2 className='text-black font-semibold text-[20px]'>All Withdrawal</h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Select>
                      <SelectTrigger className="w-[130px] bg-transparent h-[34px] rounded-[24px] boder border-[#C7C7C7]">
                        <SelectValue placeholder="2024" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">2024</SelectItem>
                        <SelectItem value="2">2023</SelectItem>
                        <SelectItem value="3">2022</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Table className="text-[14px] text-[#333] font-normal">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="sticky z-10 top-0 w-[80px] font-medium text-center">Sl. No.</TableHead>
                      <TableHead className="sticky z-10 top-0 w-[80px] font-medium">Amount</TableHead>
                      <TableHead className="sticky z-10 top-0 w-[80px] font-medium">Date</TableHead>
                      <TableHead className="sticky z-10 top-0 w-[80px] font-medium">Account</TableHead>
                      <TableHead className="sticky z-10 top-0 w-[80px] font-medium">Status</TableHead>
                      <TableHead className="sticky z-10 top-0 w-[200px] font-medium">Remarks</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((items) => (
                      <TableRow key={items.invoice}>
                        <TableCell className="font-medium bg-white border-b border-[#F2F2F2] text-center">{items.slno}</TableCell>
                        <TableCell className="font-semibold bg-white border-b border-[#F2F2F2] pe-6">{items.amount}</TableCell>
                        <TableCell className="bg-white border-b border-[#F2F2F2]">{items.date}</TableCell>
                        <TableCell className="bg-white border-b border-[#F2F2F2]">{items.account}</TableCell>
                        <TableCell className="bg-white text-[#00A84D] text-[12px] border-b border-[#F2F2F2]">{items.status}</TableCell>
                        <TableCell className="bg-white border-b border-[#F2F2F2]">{items.remark}</TableCell>                
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className='w-full xl:w-4/12'>
                <div className='bg-white border border-[#F2F2F2] rounded-10 py-12 px-10'>
                  <h2 className='text-black font-semibold text-[20px] mb-4'>Withdrawal Requests</h2>
                  <div>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                <span className="flex flex-wrap justify-between items-center w-full">
                                  <span className="text-[14px] text-[#333]">Select account</span>
                                  <span className="text-[14px] text-[#ED2028] font-semibold cursor-pointer uppercase hover:underline">+ ADD ACCOUNT</span>
                                </span>
                              </FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Account" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="january">Account 1</SelectItem>
                                  <SelectItem value="february">Account 2</SelectItem>
                                  <SelectItem value="march">Account 3</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                <span className="flex flex-wrap justify-between items-center w-full">
                                  <span className="text-[14px] text-[#333]">Enter Amount</span>
                                  <span className="text-[14px] text-[#333] font-medium">Available: $200</span>
                                </span>
                              </FormLabel>
                              <FormControl>
                                <span className='relative flex gap-3 items-center w-full'>
                                  <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4 w-full'>
                                    <Input type="number" placeholder="" className=" bg-transparent border-0 ps-1" />
                                  </span>
                                </span>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                <span className="flex flex-wrap justify-between items-center w-full">
                                  <span className="text-[14px] text-[#333]">Remarks</span>
                                </span>
                              </FormLabel>
                              <FormControl>
                                <span className='relative flex gap-3 items-center w-full'>
                                  <span className='bg-white border border-[#D4D4D4] rounded-[8px] flex items-center px-4 w-full'>
                                    <Input type="number" placeholder="" className=" bg-transparent border-0 ps-1" />
                                  </span>
                                </span>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-end">
                          <Button type="submit" variant="outline">withdrawal Requests</Button>
                        </div>
                      </form>
                    </Form>
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
