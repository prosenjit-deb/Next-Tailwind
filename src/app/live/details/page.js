"use client"

import React from 'react';
import Image from 'next/image'
import Footer from './../../components/footer/page';
import Header from './../../components/header/page';

import { IoArrowBack } from "react-icons/io5";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const page = () => {
    const [progress, setProgress] = React.useState(13)
    // React.useEffect(() => {
    //     const timer = setTimeout(() => setProgress(66), 500)
    //     return () => clearTimeout(timer)
    //   }, [])

    return (
        <main className="min-h-screen bg-bodyBg">
            {/* Start Header Component */}
                <Header />
            {/* End Header Component */}

            {/* Start Page layout */}
            <div className='flex flex-wrap w-full pt-12 md:pt-0'>
                <div className='w-full pt-20'>
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
                                Live
                                </a>

                                <svg className="w-3 h-auto fill-current mx-1 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
                            </li>

                            <li className="inline-flex items-center">
                                <a href="#" className="text-black hover:text-[#ED2227] text-sm">
                                Viktoria_Reyes
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* End Breadcrumb Component */}   

                    <div className='grid md:grid-cols-2 items-center'>

                        {/* Video CompOnent Starts */}
                        
                        <div>
                            <div className='flex items-center gap-3 p-5'>
                                <a href="/">
                                    <IoArrowBack />
                                </a>
                                <span className='inline-flex w-5 h-5 rounded-[50%] bg-[#F62727]'></span>
                                <h2 className='text-black font-semibold'>
                                    <span>Room Topic:</span>
                                    <span>🤤💦FRIDAY WITH "F" OF FUCK 🤤💦¿Who wants to eliminate my sexy light to this sexy BBW?</span>
                                </h2>
                            </div>
                            <div className='mt-6 mb-4'>
                                <video className='w-full rounded-[30px]' controls>
                                    <source src="/assets/dummy.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <Card className='mb-24 rounded-[20px]'>
                                <CardContent className='flex items-center justify-between py-6'>
                                    <div className='flex items-center gap-[10px]'>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <h2 className='text-black text-[13px] font-semibold'>Goddess Amalthea</h2>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <p className='flex items-center gap-[10px]'>
                                            <span className='text-[#B9A5A5] font-semibold text-[13px] uppercase'>your balance:</span>
                                            <span className='text-black text-[21px] font-semibold'>0 Tks</span>
                                        </p>
                                        <Button variant="default" className='uppercase'>buy tokens</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Video Component Ends */}

                        <div className='p-8'>
                            <Card>
                                <CardContent className='py-4'>
                                    <h2>20 Squats</h2>
                                    {/* <Progress value={progress} className="w-full my-2" /> */}
                                    <div className='flex items-center justify-between'>
                                        <p className='p-0'>
                                            <span>Received</span>
                                            <span>/</span>
                                            <span>Goal</span>
                                        </p>
                                        <p>
                                            <span>37</span>
                                            <span>of</span>
                                            <span>200</span>
                                            <span>Tks</span>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <div className='flex items-center justify-end gap-2 my-4'>
                                <Button variant="default" className='uppercase'>go private</Button>
                                <Button variant="default" className='uppercase'>give tip</Button>
                            </div>
                            <Tabs defaultValue="chat">
                                <TabsList className="flex justify-start w-full bg-white px-3 custom-tabs">
                                    <TabsTrigger className='text-[14px] relative data-[state=active]:text-[#ED2227] data-[state=active]:font-medium data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-[#ED2227] data-[state=active]:after:absolute data-[state=active]:after:bottom-0' value="chat">Chat</TabsTrigger>
                                    <TabsTrigger className='text-[14px] relative data-[state=active]:text-[#ED2227] data-[state=active]:font-medium data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-[#ED2227] data-[state=active]:after:absolute data-[state=active]:after:bottom-0' value="viewers">Viewers <span>(25)</span></TabsTrigger>
                                </TabsList>
                                <TabsContent value="chat" className='mt-0 custom-tab-content'>
                                    <Card>
                                        <CardContent className='py-6'>
                                            <div className='flex items-start gap-1'>
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h5>Donzoq12</h5>
                                                    <p>Hey beautiful!!! How are you?</p>
                                                </div>
                                            </div>
                                            <div className='flex items-start gap-1'>
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h5>Donzoq12</h5>
                                                    <p>Hey beautiful!!! How are you?</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>

                    {/* Start Footer Component */}
                        <Footer />
                    {/* End Footer Component */}
                </div>


            </div>
            {/* End Page layout */}

        </main>
    )
}

export default page