import React from 'react';

export interface HeaderTextProps {
  children: string;
}

export interface ApplicationsStaticsItemProps {
  url: string;
  alt: string;
  count: number;
}

export interface ButtonProps {
  icon?: string;
  title?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
