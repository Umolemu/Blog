import Image from "next/image"
import Link from "next/link"
export default function Card() {
  return (
    <div className="mb-5 flex gap-12 items-center">
        <div className="flex-1 h-[350px] relative">
            <Image 
            src='/p1.jpg'
            alt=""
            fill
            className="object-cover"          
           />
        </div>
        <div className="flex-1 flex flex-col gap-3">
            <div>
                <span className="text-gray-500">11.02.2023</span>
            </div>
            <Link href="">
                <h1 className="text-3xl font-extrabold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </Link>
            <p className="text-lg font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eveniet, praesentium corrupti, modi, 
                maxime necessitatibus ab beatae sint itaque mollitia 
                dolore temporibus dolor officiis. Mollitia illum iste quis, 
                id itaque dolorum?
            </p>
            <Link href="/" className="border-b-[1px] border-blue-500 w-fit">Read More</Link>
        </div>
    </div>
  )
}
