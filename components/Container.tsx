import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

const Container: FC<PropsContainer> = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        `
   bg-cyan-950
    rounded-lg
    h-fit
    w-full
  `,
        className
      )}
    >
      {children}
    </div>
  );
};

interface PropsContainer {
  className?: string;
  children: React.ReactNode;
}

export default Container;
