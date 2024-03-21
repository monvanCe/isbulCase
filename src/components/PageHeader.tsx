import React from 'react';
import { HeaderText } from './ApplicationComponents/HeaderText';

export const PageHeader: React.FC = () => {
  return (
    <div className="flex bg-white justify-between items-center w-full h-[60px] border border-grayBorder rounded-md px-5 custom-shadow">
      <HeaderText>BAŞVURULAR / MUTFAK ELEMANI</HeaderText>
    </div>
  );
};
