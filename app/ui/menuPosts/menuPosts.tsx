import Link from 'next/link';
import Image from 'next/image';

export default function MenuPosts( {withImage}: {withImage: boolean}) {
  return (
    <div className="flex flex-col gap-9 mt-9 mb-9">
        <Link href="" className="flex items-center gap-5">
        { withImage && ( 
            <div className="flex-1 relative aspect-square">
                <Image src="/p1.jpg" fill alt="" className="object-cover rounded-full border-[1.5px] border-gray-500"/>
            </div>
          )}
          <div className="flex-4 flex flex-col gap-1">
            <span className="pt-1 pb-1 pl-2 pr-2 rounded-lg text-sm text-white 
            bg-orange-400 w-fit
            ">Travel</span>
            <h3 className="font-medium text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className="text-sm">
              <span className="">John Doe</span>
              <span className="text-gray-500"> - 11.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="" className="flex items-center gap-5">
        { withImage && ( 
            <div className="flex-1 relative aspect-square">
                <Image src="/p1.jpg" fill alt="" className="object-cover rounded-full border-[1.5px] border-gray-500"/>
            </div>
          )}
          <div className="flex-4 flex flex-col gap-1">
            <span className="pt-1 pb-1 pl-2 pr-2 rounded-lg text-sm text-white 
            bg-yellow-400 w-fit
            ">Culture</span>
            <h3 className="font-medium text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className="text-sm">
              <span className="">John Doe</span>
              <span className="text-gray-500"> - 11.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="" className="flex items-center gap-5">
        { withImage && ( 
            <div className="flex-1 relative aspect-square">
                <Image src="/p1.jpg" fill alt="" className="object-cover rounded-full border-[1.5px] border-gray-500"/>
            </div>
          )}
          <div className="flex-4 flex flex-col gap-1">
            <span className="pt-1 pb-1 pl-2 pr-2 rounded-lg text-sm text-white 
            bg-green-400 w-fit
            ">Food</span>
            <h3 className="font-medium text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className="text-sm">
              <span className="">John Doe</span>
              <span className="text-gray-500"> - 11.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="" className="flex items-center gap-5">
        { withImage && ( 
            <div className="flex-1 relative aspect-square">
                <Image src="/p1.jpg" fill alt="" className="object-cover rounded-full border-[1.5px] border-gray-500"/>
            </div>
          )}
          <div className="flex-4 flex flex-col gap-1">
            <span className="pt-1 pb-1 pl-2 pr-2 rounded-lg text-sm text-white 
            bg-violet-400 w-fit
            ">Fashion</span>
            <h3 className="font-medium text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className="text-sm">
              <span className="">John Doe</span>
              <span className="text-gray-500"> - 11.03.2023</span>
            </div>
          </div>
        </Link>

      </div>

      
  )
}
