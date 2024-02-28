"use client";

import Image from "next/image"
import { useState } from "react"

export default function WritePage() {
  
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");


    return (
    <div className="">
         <input type="text" placeholder="Title"/>
         
         <div>
            <button className="">
                <Image src="/plus.png" alt="add" width={16} height={16}/>
            </button>
            
            {open && <div className="">
            
            <button className="">
                <Image src="/image.png" alt="add" width={16} height={16}/>
            </button>

            <button className="">
                <Image src="/external.png" alt="add" width={16} height={16}/>
            </button>

            <button className="">
                <Image src="/video.png" alt="add" width={16} height={16}/>
            </button>

            
            </div>}
            
        </div>

    </div>
  )
}

