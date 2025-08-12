import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="h-14 w-14 overflow-hidden rounded-[13px]">
        <img
          src="/IMG/logo/dogs-breeds-high-resolution-logo.png"
          alt="Canis Info Logo"
          className="h-full w-full object-cover"
        />
        <div className="h-14 w-14 bg-red-500 rounded-[13px]"></div>
      </div>
    </div>
  );
}
