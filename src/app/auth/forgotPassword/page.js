import React from 'react'
import Image from 'next/image'
import Sitelogo from './../../../assets/images/site-logo.png';
import ForgotBG from './../../../assets/images/forgot-bg.png';
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import AuthLayout from '@/app/components/AuthLayout';

const heading = 'Explore your Fantasy';
const text = 'Explore and celebrate your passions in our judgment-free zone!';
const linkText = 'Don’t have an account?';
const link = 'Join Now';

const page = () => {
    return (
        <main className="min-h-screen bg-[#0A0D20]">
            <header className='bg-black py-4 px-20 w-full flex justify-between items-center fixed z-[4]'>
                <div>
                    <a href="#">
                    <Image src={Sitelogo} alt="" />
                    </a>
                </div>
                <div className='flex flex-wrap gap-2'>
                    <Button variant="default" className='min-w-[150px]'>Join Now</Button>
                </div>
            </header>
            <div className='grid md:grid-cols-2 min-h-screen items-center'>
                <AuthLayout 
                    bannerImage={ForgotBG}
                    heading={heading}
                    text={text}
                    linkText={linkText}
                    link={link}  
                />
                <div className='px-40 max-lg:px-20 max-md:px-4'>
                    <h2 className='text-[30px] text-white font-semibold mb-2'>Reset Password</h2>
                    <form>
                        <div className='flex items-center gap-8 mb-7'>
                            <div className='w-full'>
                                <Label htmlFor="email" className='text-white font-medium text-[14px]'>Username or Email Address</Label>
                                <Input type="text" className='bg-transparent rounded-[8px] border border-[#F1F1F1] mt-1 h-14 text-white'/>
                            </div>
                        </div>
                        <Button variant="default" className='min-w-[150px] uppercase'>Send Reset Link</Button>
                        <div className='mt-9'>
                            <p className='flex items-center gap-[10px] text-white'>
                                <span>Already have an account?</span>
                                <a href='#' className='uppercase text-[#EB1640] underline'>login now</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default page