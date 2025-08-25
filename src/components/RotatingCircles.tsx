import React, { ReactNode } from 'react';

interface RotatingCircleIconProps {
  number: number;
  label: string;
  children: ReactNode;
}

const RotatingCircleIcon = ({ number, label, children }: RotatingCircleIconProps) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <svg
        className="w-24 h-24 group-hover:animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#27311c"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
      <div>
        <div className="bg-[#b4bf8d] text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mb-1 select-none">{number}</div>
        <span className="uppercase text-xs font-mono tracking-wide text-[#27311c] select-none">{label}</span>
      </div>
    </div>
  );
};

export default RotatingCircleIcon;
