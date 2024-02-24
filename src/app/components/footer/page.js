import * as React from "react";
import Image from 'next/image'

import MailIcon from './../../../assets/images/icons/mail-icon.svg';
import PhoneIcon from './../../../assets/images/icons/phone-icon.svg';


export default function footer() {

    return (
      <footer className='bg-white lg:pe-12 pe-4 ps-4 lg:ps-20 py-10 flex flex-wrap justify-between gap-10 mt-auto'>
        <div className='mb-0'>
          <h2 className='text-black text-[13px] pb-3 font-bold uppercase'>INFORMATION</h2>
          <div className='flex flex-wrap gap-20'>
            <ul>
              <li>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>Privacy Policy</a>
              </li>
              <li>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>Terms & Conditions</a>
              </li>
              <li>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>How it works</a>
              </li>
              <li>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>Cookie Policy</a>
              </li>
              <li>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>Disclaimer</a>
              </li>
            </ul>

            <ul>
              <li>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>Guidelines</a>
              </li>
              <li>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>Data Handling</a>
              </li>
              <li>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>Platform Accessibility</a>
              </li>
              <li>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>Compliance & Reporting</a>
              </li>
              <li>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>Platform Updates</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mb-0'>
          <h2 className='text-black text-[13px] pb-3 font-bold uppercase'>Help</h2>
          <div className='flex flex-wrap'>
            <ul>
              <li>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>FAQ</a>
              </li>
              <li>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mb-0'>
          <h2 className='text-black text-[13px] pb-3 font-bold uppercase'>Customer Support</h2>
          <div className='flex flex-wrap'>
            <ul>
              <li className='flex flex-wrap gap-2 items-center pb-3'>
                <figure>
                  <Image src={MailIcon} alt='' />
                </figure>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>cus_support@gmail.com</a>
              </li>
              <li className='flex flex-wrap gap-2 items-center pb-2'>
                <figure>
                  <Image src={PhoneIcon} alt='' />
                </figure>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>+91 987 654 321</a>
              </li>
              <li>
                <a className='text-[#333] text-sm font-normal'><strong>Mon- Sat:</strong>  10AM -9PM</a>
              </li>
              <li>
                <a className='text-[#333] text-sm font-normal'><strong>Response times:</strong> Within 1hrs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mb-0'>
          <h2 className='text-black text-[13px] pb-3 font-bold uppercase'>Legal & Compliance Contact</h2>
          <div className='flex flex-wrap'>
            <ul>
              <li className='flex flex-wrap gap-2 items-center'>
                <figure>
                  <Image src={MailIcon} alt='' />
                </figure>
                <a className='text-[#333] text-sm font-normal cursor-pointer hover:underline'>legal_support@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
    </footer>
    )
}