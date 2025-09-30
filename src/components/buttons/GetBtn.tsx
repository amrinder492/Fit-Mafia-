import Link from 'next/link'
import React from 'react'

const GetBtn = ({ link = '/our-plans', content = 'Get Offer', className = '' }: { link?: string, content?: string , className?: string }) => {
    return (
        <div className="">
            <Link href={link} className={`bg-fit-red px-6 py-3 rounded-lg font-semibold text-white cursor-pointer   !${className}`}>
                {content}
            </Link>
        </div>
    )
}

export default GetBtn;
