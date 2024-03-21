import React from 'react';
import { ApplicationsStaticsItemProps } from '../types';

export const ApplicationsStaticsItem: React.FC<
  ApplicationsStaticsItemProps
> = ({ url, alt, count }) => {
  return (
    <div className="items-center w-full flex flex-col">
      <img src={url} alt={alt} />
      <div className="text-md mt-1 text-center">{alt}</div>
      <div className="font-bold text-xl mt-2">{count}</div>
    </div>
  );
};
