// import SideBar from '@/components/admin/SideBar'
import Footer from '@/components/main/Footer'
import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div className='w-full'>
      {children}
      <Footer/>
    </div>
  )
}

export default layout
