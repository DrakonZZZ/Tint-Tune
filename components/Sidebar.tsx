'use client';
import React, { Children, FC, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Container from './Container';
import Library from './Library';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Navbar from './Navbar';

const Sidebar: FC<PropsSidebar> = ({ children }) => {
  const path = usePathname();
  const routes = useMemo(
    () => [
      {
        label: 'Home',
        href: '/',
        active: path !== '/search',
        icon: HiHome,
      },
      {
        label: 'Search',
        href: '/search',
        active: path === '/search',
        icon: BiSearch,
      },
    ],
    [path]
  );

  return (
    <main className="flex h-full">
      <section className="h-full w-screen p-3">
        <div>
          <div className="h-full flex-1 text-center">{children}</div>
        </div>
      </section>
      <section className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[400px] p-3  text-center">
        <Container className="mb-1">
          <div className="flex flex-col gap-y-4 py-4 px-5">
            {routes.map((route) => (
              <Navbar key={route.label} {...route} />
            ))}
          </div>
        </Container>
        <Container className="overflow-y-auto h-full">
          <Library />
        </Container>
      </section>
    </main>
  );
};

interface PropsSidebar {
  children: React.ReactNode;
}

export default Sidebar;
