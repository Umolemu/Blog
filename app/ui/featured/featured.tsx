import Image from "next/image"; 

export default function Featured() {
  return (
    <div className="mt-8">
        <h1 className='text-left text-5xl mdmin:text-8xl'>
              <span className='font-bold'>
                  Hey, Benjamin here! {' '}
              </span>
              Discover my stories and creative ideas
         </h1>
         
         <div className="mt-12 flex items-center gap-14">
            <div className="bg-black p-48">
                eeeee
            </div>
            <div className="flex:1 flex flex-col gap-5">
              <h1 className="text-5xl">Lorem ipsum dolor sit amet</h1>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae rem, optio non fuga dolorum blanditiis saepe nihil vitae fugit sapiente, iste sunt impedit at natus a accusantium magni voluptatem.</p>
              <button className="pl-4 pr-4 pt-5 pb-5 border-none rounded-xl w-max
              bg-blue-500 text-white hover:bg-blue-700
              ">Read more</button>
            </div>
         </div>

    </div>
  );
}
