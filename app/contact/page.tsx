import Image from 'next/image'
export default function page() {
  return (
    <div>
        <h3 className='text-5xl font-bold flex justify-center'>Get to Know Us</h3>
        <div className='flex justify-center items-center gap-20 mt-5'>
            <Image 
            src="/logo-main.png" 
            width={400} 
            height={400} 
            alt="logo" 
            className='sm:hidden'
            />
            <div>
                <p className='text-[16px]'>
                Ontrack Development is a multimedia and design business founded by Benjamin Adetiba. 
                We specialize in creating Websites and online stores that help portray the story of any individual owned business looking for a way to join the online world. 
                We make use of our digital marketing services such as web design, SEO optimization and marketing skills to create a online presence for anyone needing to showcase to the world.
                </p>
            </div>
            
        </div>
        
    </div>
  )
}
