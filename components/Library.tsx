'use client';
import React from 'react';
import { TbPlaylist } from 'react-icons/tb';

const Library = () => {
  const upLoadHandler = () => {
    console.log('uploading music');
  };
  return (
    <div className="flex flex-col">
      <div
        className="
        flex 
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
        ease-in-out 
    "
      >
        <div className="flex flex-row gap-y-4 py-4 px-5">
          <TbPlaylist size={24} className="text-neutral-400" />
          <p className="truncate w-full text-center">Your Playlist</p>
        </div>
      </div>
    </div>
  );
};

export default Library;
