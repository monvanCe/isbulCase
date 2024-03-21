import React from 'react';
import { ApplicationsStaticsItem } from './ApplicationsStaticsItem';
import { ApplicationsStaticsFD } from '../../FakeDatas/ApplicationsStaticsFD';

export const ApplicationsStatics: React.FC = () => {
  return (
    <div className="w-full mt-4 py-5 border border-grayBorder flex justify-around">
      {ApplicationsStaticsFD.map((el, i) => (
        <>
          <ApplicationsStaticsItem url={el.url} alt={el.alt} count={el.count} />
          <div className="w-[1px] bg-grayBorder" />
        </>
      ))}
    </div>
  );
};
