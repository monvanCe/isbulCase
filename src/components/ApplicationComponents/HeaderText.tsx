import React from 'react';
import { HeaderTextProps } from '../types';

export const HeaderText: React.FC<HeaderTextProps> = ({ children }) => {
  return <div className="text-lg font-medium text-primary">{children}</div>;
};
