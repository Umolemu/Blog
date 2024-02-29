"use client";
import Link from 'next/link';
import Image from 'next/image';
import logoMini from "@/public/logo-mini.png";
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname  = usePathname();
  const router = useRouter();
  const { status } = useSession();
  
  const links = [
    { href: '/', label: 'Home', className: 'hover:underline'},
    { href: '/contact', label: 'Contact', className: 'hover:underline' },
    { href: '/about', label: 'About', className: 'hover:underline' },  
  ];

  if (status === 'authenticated') {
    links.push({ href: '/write', label: 'Write', className: 'hover:underline' });
    links.push({ href: '/logout', label: 'Logout', className: 'bg-red-500 p-4 rounded-2xl hover:bg-red-700 text-white' });
  } else {
    links.push({ href: '/login', label: 'Login', className: 'bg-blue-500 p-4 rounded-2xl hover:bg-blue-700 text-white' });
  }

  return (
    <header className='flex justify-center p-10'>
        <div className='flex justify-center p-5 space-x-8 items-center w-fit h-fit rounded-3xl text-black'>
            <div>
                <Image 
                    src={logoMini}
                    width={50}
                    height={50}
                    alt='logo'
                />
            </div>
            <div className='space-x-10 font-medium text-lg'>
            {links.map(({ href, label, className }) => (
                    <Link key={href} href={href} className={className} onClick={() => {
                      if (href === '/logout') {
                          signOut().then(() => {
                              if(pathname !== '/') {
                                  router.push('/');
                              }
                          });
                      }
                  }}>
                        {label}
                    </Link>
            ))}
            </div>
        </div>
    </header>
  );
}
