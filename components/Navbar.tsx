import React, { FC } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

const Navbar: FC<PropsNavbar> = ({ label, href, active, icon: Icon }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex 
        flex-row 
        w-full 
        h-auto 
        cursor-pointer 
        items-center 
        py-1 
        text-md 
        font-medium 
        hover:text-white
        text-neutral-400
        transition
        ease-in-out `,
        active && 'text-white'
      )}
    >
      <Icon size={24} />
      <p className="truncate w-full text-center">{label}</p>
    </Link>
  );
};

interface PropsNavbar {
  label: string;
  href: string;
  active: boolean;
  icon: IconType;
}

export default Navbar;
