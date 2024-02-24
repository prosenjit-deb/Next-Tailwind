import React from 'react'
import Image from 'next/image'

const AuthLayout = props => {
    return (
        <div className='relative'>
            <Image src={props.bannerImage} alt="" className='w-full h-screen object-cover'/>
            <div className='absolute flex flex-col min-h-screen top-0 w-full justify-around items-center'>
                <div className='w-96'>
                    <h2 className='text-white text-[48px] font-semibold mb-1'>{props.heading}</h2>
                    <p className='text-white text-[16px]'>{props.text}</p>
                </div>
                <div className='w-96 text-start'>
                    <p className='text-white text-[14px]'>{props.linkText}</p>
                    <a href='#' className='text-[#EB1640] text-[14px] underline font-medium'>{props.link}</a>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;