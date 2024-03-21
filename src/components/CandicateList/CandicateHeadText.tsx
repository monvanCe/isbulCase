import React from 'react';
import { CandicateHeadTextProps } from './types';

export const CandicateHeadText: React.FC<CandicateHeadTextProps> = ({
  children,
}) => {
  return <div className="text-primary text-lg">{children}</div>;
};
