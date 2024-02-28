import React from 'react';
import Image from 'next/image';
import logoMini from "@/public/logo-mini.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';


interface Icons {
    [key: string]: IconDefinition;
}

const icons: Icons = {
  facebook: faFacebook,
  instagram: faInstagram,
  tiktok: faTiktok,
  youtube: faYoutube
}

export default function Footer() {
  return (
    <footer className='mt-20'>
      <div className=' text-black flex justify-between p-12 sm:space-y-5 sm:flex-col'>
        <div>
            <div className='sm:hidden'>
                <Image
                src={logoMini}
                width={75}
                height={75}
                alt="image"
              />
          </div>
        </div>
        <div>
          <div className='space-y-2 flex flex-col'>
            <h5 className='text-black  font-semibold'>Links</h5>
            <a href="#" className='hover:text-gray-400'>Home</a>
            <a href="#" className='hover:text-gray-400'>Contact</a>
            <a href="#" className='hover:text-gray-400'>About</a>
          </div>
        </div>
        <div>
          <div className='space-y-2 flex flex-col'>
            <h5 className='text-black font-semibold'>Tags</h5>
            <a href="#" className='hover:text-gray-400'>Style</a>
            <a href="#" className='hover:text-gray-400'>Fashion</a>
            <a href="#" className='hover:text-gray-400'>Coding</a>
            <a href="#" className='hover:text-gray-400'>Travel</a>
          </div>
        </div>
        <div>
          <div className='space-y-2 flex flex-col'>
            <h5 className='text-black font-semibold'>Social</h5>
            {Object.keys(icons).map((icon, index) => (
              <a key={index} href="#" className='hover:text-gray-400'>{icon.charAt(0).toUpperCase() + icon.slice(1)}</a>
            ))}
          </div>
          
          <div className='text-black flex space-x-6 pt-10 bt sm:space-x-8'>
              {Object.keys(icons).map((icon, index) => (
                <FontAwesomeIcon key={index} icon={icons[icon]} width={25} />
              ))}
            </div>

        </div>
      </div>
    </footer>
  );
}
