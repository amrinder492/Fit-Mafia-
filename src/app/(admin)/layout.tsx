import SideBar from '@/components/admin/SideBar'
import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div className='flex w-full '>
        <div className="sticky top-[56px] h-[calc(100vh-56px)]">
        <SideBar/>
        </div>
        <div className="w-full overflow-hidden">
      {children}
        </div>
    </div>
  )
}

export default layout
