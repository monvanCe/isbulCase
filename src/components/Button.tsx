import React from 'react';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  icon,
  title,
  children,
  onClick,
  style,
}) => {
  return (
    <div
      style={style}
      className={`flex h-full w-full bg-orange rounded-md items-center justify-center cursor-pointer text-white font-bold text-md`}
      onClick={onClick}
    >
      {children && children}
      {icon && <img src={icon} alt="iconAlt" />}
    </div>
  );
};
