import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-[220px_1fr] min-h-screen bg-stone-100'>
        <Sidebar />

        <div className='p-4'>
            <div className='bg-white rounded-lg shadow p-4 min-h-full'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout