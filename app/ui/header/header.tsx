import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoMini from "@/public/logo-mini.png";
import { Bars3Icon } from "@heroicons/react/24/outline";

const links = [
    { href: '/', label: 'Home', className: 'hover:underline'},
    { href: '/contact', label: 'Contact', className: 'hover:underline' },
    { href: '/about', label: 'About', className: 'hover:underline' },
    { href: '/login', label: 'Login', className: 'bg-blue-500 p-4 rounded-2xl hover:bg-blue-700 text-white' },
  ];

export default function Header() {
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
                    <Link key={href} href={href} className={className}>
                        {label}
                    </Link>
            ))}
            </div>
        </div>
    </header>
  );
}
