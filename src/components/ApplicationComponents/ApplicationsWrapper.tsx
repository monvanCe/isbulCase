import React from 'react';
import { ApplicationsStatics } from './ApplicationsStatics';
import { ApplicationsFilter } from './ApplicationsFilter';

export const ApplicationsWrapper: React.FC = () => {
  return (
    <div className="custom-shadow">
      <ApplicationsStatics />
      <ApplicationsFilter />
    </div>
  );
};
