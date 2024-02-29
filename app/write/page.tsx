"use client";

import Image from "next/image"
import { useState } from "react"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css';
import { PlusIcon, PhotoIcon, ArrowUpOnSquareIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function WritePage() {
    const { status } = useSession();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
  
    if(status === "unauthenticated") router.push("/");

    return (
    <div className="">
         <input 
         type="text" 
         placeholder="Title" 
         className="p-12 text-6xl border:none outline-none placeholder:text-gray-700"/>
         
         <div className="flex gap-5 h-[700px] relative">
            <button className="flex w-9 h-9 rounded-[50%] bg-transparent border-[1px] border-gray-700 items-center justify-center cursor-pointer" onClick={() => setOpen(!open)}>
                <PlusIcon className="w-[16px] h-[16px]"/>
            </button>
            
            {open && <div className="flex gap-5 bg-transparent absolute z-50 w-full left-12">
            
            <button className="flex w-9 h-9 rounded-[50%] bg-transparent border-[1px] border-gray-700 items-center justify-center cursor-pointer">
                <PhotoIcon className="w-[16px] h-[16px]"/>
            </button>

            <button className="flex w-9 h-9 rounded-[50%] bg-transparent border-[1px] border-gray-700 items-center justify-center cursor-pointer">
                <ArrowUpOnSquareIcon className="w-[16px] h-[16px]"/>
            </button>


            <button className="flex w-9 h-9 rounded-[50%] bg-transparent border-[1px] border-gray-700 items-center justify-center cursor-pointer">
                <VideoCameraIcon className="w-[16px] h-[16px]"/>
            </button>

            
            </div>}
            <ReactQuill 
            theme="bubble" 
            value={value} 
            onChange={setValue}
            placeholder="Whats on your mind... " 
            className="w-full"
            />
        </div>
        <button className="absolute top-[52px] right-5 p-4 border-none bg-green-500 text-white rounded-lg font-medium text-lg hover:bg-green-700">Publish</button>
    </div>
  )
}

