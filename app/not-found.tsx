import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center py-5'>
      <h2 className='text-6xl font-bold text-gray-500'>404 ERROR</h2>
      <h1 className='m-5 text-7xl'>PAGE NOT FOUND</h1>
      <Link href="/" className='bg-blue-500 p-4 rounded-2xl hover:bg-blue-700 text-white w-fit'>Return Home</Link>
    </div>
  )
}