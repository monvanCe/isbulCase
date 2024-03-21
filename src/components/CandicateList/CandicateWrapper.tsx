import React from 'react';
import { CandicateHead } from './CandicateHead';
import { CandicateList } from './CandicateList';

export const CandicateWrapper = () => {
  return (
    <div className="w-full mt-4">
      <CandicateHead />
      <CandicateList />
    </div>
  );
};
