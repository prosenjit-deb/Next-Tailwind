import Image from 'next/image'
import { Button } from "@/components/ui/button"

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

import MenuSidebar from '../../components/sidebarwithauth/page';
import Footer from '../../components/footer/page';
import HeaderWithAuth from '../../components/headerwithauth/page';

import ProfileImg from './../../../assets/images/phone-hand-image.png';

const items = [
  {
    slno: "1",
    name: "John Doe",
    itemTitle: "Massage Room (05:34)",
    purchaceType: "Video",
    status: "Successful",
    date: "19.01.2024",
    billingId: "PR-01BN125475",
    toltalAmount: "$19.49",
  },
  {
    slno: "2",
    name: "John Doe",
    itemTitle: "Bikini Black",
    purchaceType: "Store Item",
    status: "Successful",
    date: "19.01.2024",
    billingId: "PR-01BN125475",
    toltalAmount: "$19.49",
  },
  {
    slno: "3",
    name: "Roger V. Poirier",
    itemTitle: "Bed Scene (13:36)",
    purchaceType: "Video",
    status: "Successful",
    date: "19.01.2024",
    billingId: "PR-01BN125475",
    toltalAmount: "$19.49",
  },
  {
    slno: "4",
    name: "Juan P Ward",
    itemTitle: "Sexy positions (08:50)",
    purchaceType: "Store Item",
    status: "Successful",
    date: "19.01.2024",
    billingId: "PR-01BN125475",
    toltalAmount: "$19.49",
  },
  {
    slno: "5",
    name: "Janet M Hirsch",
    itemTitle: "Massage Room (05:34)",
    purchaceType: "Subscription ",
    status: "Successful",
    date: "19.01.2024",
    billingId: "PR-01BN125475",
    toltalAmount: "$19.49",
  },
  {
    slno: "6",
    name: "Joseph O",
    itemTitle: "Bra & Panty set",
    purchaceType: "Video",
    status: "Successful",
    date: "19.01.2024",
    billingId: "PR-01BN125475",
    toltalAmount: "$19.49",
  },
  {
    slno: "7",
    name: "Dawn W Lugo",
    itemTitle: "1 Month Subscription",
    purchaceType: "Club",
    status: "Successful",
    date: "19.01.2024",
    billingId: "PR-01BN125475",
    toltalAmount: "$19.49",
  },
  {
    slno: "8",
    name: "Dan A Perkins",
    itemTitle: "Tips for Good Service",
    purchaceType: "Video",
    status: "Successful",
    date: "19.01.2024",
    billingId: "PR-01BN125475",
    toltalAmount: "$19.49",
  },
  {
    slno: "9",
    name: "Tonia E Matson",
    itemTitle: "Massage Room (05:34)",
    purchaceType: "Video",
    status: "Successful",
    date: "19.01.2024",
    billingId: "PR-01BN125475",
    toltalAmount: "$19.49",
  },
]

export default function EarningHistory() {
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
                <a href="#" class="text-black hover:text-[#ED2227] text-sm">
                Earning History
                </a>
              </li>
            </ul>
          </div>{/* End Breadcrumb Component */}


          {/* Start Right content layout */}
          <div className='px-4 lg:px-8 pt-8 pb-20 flex flex-col gap-7'>

            <div className='flex flex-wrap items-center justify-between gap-5'>
              <h2 className='text-black font-semibold text-[24px]'>Earning History</h2>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-col items-end">
                  <span className='text-[14px] font-medium text-[#333]'>Total Earnings</span>
                  <span className='text-[16px] text-black font-semibold'>200 TKNS ($200)</span>
                </div>
                <Button variant="outline" className="text-[#ED2028]">withdrawal Requests</Button>
              </div>
            </div>

            <div className='w-full p-7 bg-white rounded-[10px]'>
              <div className='flex flex-wrap items-start justify-between gap-2 mb-12'>
                <div className='bg-[#FFE4D9] flex flex-col items-start rounded-10 px-6 py-3 flex-1 relative after:content-maskpattern after:absolute after:bottom-0 after:right-0 overflow-hidden after:h-[84px]'>
                  <span className='text-[24px] text-black font-semibold'>$80</span>
                  <span className='text-[16px] text-[#333] font-medium'>Video Sales</span>
                </div>
                <div className='bg-[#E9D9E6] flex flex-col items-start rounded-10 px-6 py-3 flex-1 relative after:content-maskpattern after:absolute after:bottom-0 after:right-0 overflow-hidden after:h-[84px]'>
                  <span className='text-[24px] text-black font-semibold'>$80</span>
                  <span className='text-[16px] text-[#333] font-medium'>Video Sales</span>
                </div>
                <div className='bg-[#FCF7F3] flex flex-col items-start rounded-10 px-6 py-3 flex-1 relative after:content-maskpattern after:absolute after:bottom-0 after:right-0 overflow-hidden after:h-[84px]'>
                  <span className='text-[24px] text-black font-semibold'>$80</span>
                  <span className='text-[16px] text-[#333] font-medium'>Video Sales</span>
                </div>
                <div className='bg-[#BAE9D9] flex flex-col items-start rounded-10 px-6 py-3 flex-1 relative after:content-maskpattern after:absolute after:bottom-0 after:right-0 overflow-hidden after:h-[84px]'>
                  <span className='text-[24px] text-black font-semibold'>$80</span>
                  <span className='text-[16px] text-[#333] font-medium'>Video Sales</span>
                </div>
                <div className='bg-[#B3D6E9] flex flex-col items-start rounded-10 px-6 py-3 flex-1 relative after:content-maskpattern after:absolute after:bottom-0 after:right-0 overflow-hidden after:h-[84px]'>
                  <span className='text-[24px] text-black font-semibold'>$80</span>
                  <span className='text-[16px] text-[#333] font-medium'>Video Sales</span>
                </div>
                <div className='bg-[#E6DDF2] flex flex-col items-start rounded-10 px-6 py-3 flex-1 relative after:content-maskpattern after:absolute after:bottom-0 after:right-0 overflow-hidden after:h-[84px]'>
                  <span className='text-[24px] text-black font-semibold'>$80</span>
                  <span className='text-[16px] text-[#333] font-medium'>Video Sales</span>
                </div>
                <div className='bg-[#FAEECF] flex flex-col items-start rounded-10 px-6 py-3 flex-1 relative after:content-maskpattern after:absolute after:bottom-0 after:right-0 overflow-hidden after:h-[84px]'>
                  <span className='text-[24px] text-black font-semibold'>$80</span>
                  <span className='text-[16px] text-[#333] font-medium'>Video Sales</span>
                </div>
              </div>
            <div className='h-[430px]'></div>
            </div>

            <div className='bg-white px-7 rounded-[9px] mb-0'>
              <ul className='flex gap-8 text-[#333] text-sm'>
                <li className='relative py-4 text-black font-semibold after:bg-[#ED2227] after:h-[3px] after:w-full after:left-0 after:bottom-0 after:absolute cursor-pointer'>All items</li>
                <li className='cursor-pointer py-4'>Video Sales</li>
                <li className='cursor-pointer py-4'>Subscriptions</li>
                <li className='cursor-pointer py-4'>Store Items</li>
                <li className='cursor-pointer py-4'>Tips</li>
                <li className='cursor-pointer py-4'>Club</li>
                <li className='cursor-pointer py-4'>Custom Vids</li>
                <li className='cursor-pointer py-4'>Stream</li>
              </ul>
            </div>

            <div className='flex flex-wrap items-center justify-between gap-5'>
              <div className='flex flex-wrap items-center gap-4'>
                <h2 className='text-black font-semibold text-[20px]'>All items</h2>
                <Select>
                  <SelectTrigger className="w-[130px] bg-transparent h-[34px] rounded-[24px] boder border-[#C7C7C7]">
                    <SelectValue placeholder="Monthly" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Weekly</SelectItem>
                    <SelectItem value="2">Monthly</SelectItem>
                    <SelectItem value="3">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap items-center gap-1">
                  <span className='text-[14px] font-medium text-[#333]'>Total Earnings</span>
                  <span className='text-[16px] text-[#ED2227] font-semibold'>$50</span>
                </div>
                <Button variant="outline" className="text-[#ED2028] relative ps-[49px] before:content-downloadicon before:absolute before:left-[18px] before:top-1/2 before:-translate-y-1/2 hover:bg-red-100 hover:text-[#ED2028]">
                  Download pdf
                </Button>
              </div>
            </div>

            <div>
              <Table className="text-[14px] text-[#333] font-normal">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px] font-medium text-center">Sl. No.</TableHead>
                    <TableHead className="w-[150px] font-medium">Name</TableHead>
                    <TableHead className="w-[350px] font-medium">Item/Title</TableHead>
                    <TableHead className="w-[200px] font-medium">Purchase Type</TableHead>
                    <TableHead className="w-[130px] font-medium">Status</TableHead>
                    <TableHead className="w-[130px] font-medium">Date</TableHead>
                    <TableHead className="w-[130px] font-medium">Billing ID</TableHead>
                    <TableHead className="w-[120px] text-right font-medium">Total Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((items) => (
                    <TableRow key={items.invoice}>
                      <TableCell className="font-medium bg-white border-b border-[#F2F2F2] text-center">{items.slno}</TableCell>
                      <TableCell className="bg-white border-b border-[#F2F2F2]">{items.name}</TableCell>
                      <TableCell className="bg-white border-b border-[#F2F2F2]">
                        <div className='flex flex-wrap gap-2 items-center'>
                          <figure className='bg-white w-10 h-8 overflow-hidden rounded-[4px] border-0'>
                            <Image src={ProfileImg} alt='' className='w-full  h-full object-cover' />
                          </figure>
                          {items.itemTitle}
                        </div>
                      </TableCell>
                      <TableCell className="bg-white border-b border-[#F2F2F2]">{items.purchaceType}</TableCell>
                      <TableCell className="bg-white text-[#00A84D] text-[12px] border-b border-[#F2F2F2]">{items.status}</TableCell>
                      <TableCell className="bg-white border-b border-[#F2F2F2]">{items.date}</TableCell>
                      <TableCell className="bg-white border-b border-[#F2F2F2]">{items.billingId}</TableCell>
                      <TableCell className="text-right font-semibold bg-white border-b border-[#F2F2F2] pe-6">{items.toltalAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>{/* End Right content layout */}

          {/* Start Footer Component */}
          <Footer />{/* End Footer Component */}

        </div>{/* End Right panel Page layout */}
    
      </div>{/* End Page layout */}
    </main>
  )
}
