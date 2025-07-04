// import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosNotifications } from "react-icons/io";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { IoLogOut } from "react-icons/io5";
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
 const { logout, user } = useAuth()
  const navigate = useNavigate()
 const { theme, setTheme } = useTheme();
 const handleLogout = async () => {
    await logout()
    navigate("/login")
  }

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-green-300 dark:border-green-600 py-3">
      <h1 className="text-2xl font-bold text-[#54C785] dark:text-green-600">NotifyBoard</h1>
      <div className='flex items-center sm:gap-5 gap-1 text-gray-500'>
         <div className="sm:block hidden">
             <span>{user?.email}</span>
         </div>
          <Avatar className="sm:block hidden">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="bg-green-100 dark:bg-green-600 text-green-600 dark:text-green-100 h-8 w-8 flex justify-center items-center rounded-lg">
            <IoIosNotifications  size={24} />
        </div>
          <button className="bg-green-100 dark:bg-green-600 text-green-600 dark:text-green-100 h-8 w-8 flex justify-center items-center rounded-lg"  onClick={handleLogout}><IoLogOut size={24} /></button>
           <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="!bg-green-100 dark:!bg-green-600 !px-2 !h-8"
            >
            
            <Sun className="h-5 w-5 dark:hidden text-green-600 "/>
            <Moon className="h-5 w-5 hidden dark:block" />
            <span className="sr-only">Toggle theme</span>
         </Button>
      </div>
    </div>
  );
}

export default Navbar