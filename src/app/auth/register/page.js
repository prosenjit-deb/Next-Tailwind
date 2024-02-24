import React from 'react'
import Image from 'next/image'
import Sitelogo from './../../../assets/images/site-logo.png';
import RegisterBG from './../../../assets/images/register-bg.png';
import captcha from './../../../assets/images/captcha.png';
import { SlRefresh } from "react-icons/sl";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import AuthLayout from '@/app/components/AuthLayout';

const heading = 'Join Pornyo It’s Free';
const text = 'Discover a judgment-free zone to celebrate and explore your passions!';
const linkText = 'Already have an account?';
const link = 'Login Now';

const page = () => {
    return (
        <main className="min-h-screen bg-[#0A0D20]">
            <header className='bg-black py-4 px-20 w-full flex justify-between items-center fixed z-[4]'>
                <div>
                    <a href="#">
                    <Image src={Sitelogo} alt="" />
                    </a>
                </div>
                <div>
                    <div className='hidden'>
                        <Input type="text" placeholder="Search here..." />
                        <Button>Go</Button>
                    </div>
                    <div>
                        <div className='flex flex-wrap gap-2'>
                        <Button variant="outline">Subscription</Button>
                        <Button variant="link">Sign In</Button>
                        <Button variant="default">Join Now</Button>
                        </div>
                    </div>
                </div>
            </header>
            <div className='grid md:grid-cols-2 min-h-screen items-center pt-[80px]'>
                <AuthLayout 
                    bannerImage={RegisterBG}
                    heading={heading}
                    text={text}
                    linkText={linkText}
                    link={link}  
                />
                <div className='px-4 md:px-10 lg:px-20 xl:px-40'>
                    <h2 className='text-[30px] text-white font-semibold mb-2'>Register with Pornyo</h2>
                    <p className='text-[14px] text-white mb-8'>Explore and celebrate your passions in a judgment-free space!</p>
                    <form>
                        <RadioGroup defaultValue="option-one" className='flex items-center gap-6 mb-8 register-radio'>
                            <Label className='text-white font-medium text-[13px]'>I want to</Label>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="member" id="member" className='border-[#F9202A] border' />
                                <Label htmlFor="member" className='text-white font-medium text-[13px]'>Be A Member</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="creator" id="creator" className='border-[#F9202A] border' />
                                <Label htmlFor="creator" className='text-white font-medium text-[13px]'>Be A Creator</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-8 mb-7'>
                            <div className='w-1/2'>
                                <Label htmlFor="firstName" className='text-white font-medium text-[14px]'>First Name</Label>
                                <Input type="text"  className='bg-transparent rounded-[8px] border border-[#F1F1F1] mt-1 h-14 text-white'/>
                            </div>
                            <div className='w-1/2'>
                                <Label htmlFor="lastName" className='text-white font-medium text-[14px]'>Last Name</Label>
                                <Input type="text"  className='bg-transparent rounded-[8px] border border-[#F1F1F1] mt-1 h-14 text-white'/>
                            </div>
                        </div>
                        <div className='flex items-center gap-8 mb-7'>
                            <div className='w-full'>
                                <Label htmlFor="email" className='text-white font-medium text-[14px]'>Email Address</Label>
                                <Input type="email" className='bg-transparent rounded-[8px] border border-[#F1F1F1] mt-1 h-14 text-white'/>
                            </div>
                        </div>
                        <div className='flex items-center gap-8 mb-7'>
                            <div className='w-full'>
                                <Label htmlFor="contact" className='text-white font-medium text-[14px]'>Contact Number</Label>
                                <Input type="text" className='bg-transparent rounded-[8px] border border-[#F1F1F1] mt-1 h-14 text-white'/>
                            </div>
                        </div>
                        <div className='flex items-center gap-8 mb-7'>
                            <div className='w-1/2'>
                                <Label htmlFor="contact" className='text-white font-medium text-[14px]'>Type the text</Label>
                                <Input type="text" className='bg-transparent rounded-[8px] border border-[#F1F1F1] mt-1 h-14 text-white'/>
                            </div>
                            <div className='w-1/2'>
                                <div className='flex items-center gap-2 mt-6 '>
                                    <div className='flex-1 text-[#6C6C6C] border border-[#404040] flex justify-center py-[9px] text-[25px] font-extrabold italic rounded-lg tracking-14 bg-transparent'>
                                        <span className='rotate-5'>2Ax2g4</span>
                                    </div>
                                    <span className=" text-gray-300 flex cursor-pointer text-[20px] hover:text-[#6C6C6C]">
                                        <SlRefresh />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-[13px]'>
                            <div className="flex items-center space-x-2 mb-4">
                                <Checkbox id="yearCons" />
                                <label
                                htmlFor="yearCons"
                                className="text-[13px] text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    I am 18 years of age or older
                                </label>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Checkbox id="tnc" />
                                <label
                                htmlFor="tnc"
                                className="text-[13px] text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    I agree with your tearms & conditions
                                </label>
                            </div>
                        </div>
                        <Button variant="default" className='min-w-[150px] uppercase'>Sign up</Button>
                    </form>

                    {/* confirmation area which will come after form get submitted*/}

                    {/* <div>
                        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="41" cy="41" r="39.5" stroke="#E48596" stroke-width="3"/>
                        <path d="M24 38.9333L35.6167 50.55L58.1667 28" stroke="#E48596" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className='text-white mt-5'>A verification link has been sent to your register email id. Please check your inbox and confirm to complete the registration process.</p>
                    </div> */}
                </div>
            </div>
        </main>
    )
}

export default page