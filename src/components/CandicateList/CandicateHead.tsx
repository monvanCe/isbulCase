import React from 'react';
import { CandicateHeadText } from './CandicateHeadText';

export const CandicateHead: React.FC = () => {
  return (
    <div className="candicate-head-shadow h-[50px] flex items-center bg-grayBackground">
      <div className="w-[50px] flex justify-center">
        <input type="checkbox" />
      </div>
      <div className="flex flex-1 justify-between pl-4 pr-8">
        <CandicateHeadText>Aday</CandicateHeadText>
        <CandicateHeadText>Meslek/Eğitim Bilgisi</CandicateHeadText>
        <CandicateHeadText>Çalışma Bilgileri</CandicateHeadText>
        <CandicateHeadText>İşlemler</CandicateHeadText>
      </div>
    </div>
  );
};
