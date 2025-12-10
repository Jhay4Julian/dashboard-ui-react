import type React from "react"
import Sidebar from "../Sidebar/Sidebar"

const MainLayout = ({ children } : {children: React.ReactNode}) => {
  return (
    <main className="bg-stone-100 p-2 grid grid-cols-[220px_1fr]">
        <Sidebar />
        <section>{children}</section>
    </main>
  )
}

export default MainLayout