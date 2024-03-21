import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ApplicationsWrapper } from '../components/ApplicationComponents/ApplicationsWrapper';
import { CandicateWrapper } from '../components/CandicateList/CandicateWrapper';

export const Applications: React.FC = () => {
  return (
    <div className="px-8 py-5">
      <PageHeader />
      <ApplicationsWrapper />
      <CandicateWrapper />
    </div>
  );
};
