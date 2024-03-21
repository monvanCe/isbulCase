import React from 'react';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { SearchInput } from '../SearchInput';

export const ApplicationsFilter: React.FC = () => {
  return (
    <div className="p-3 flex justify-end">
      <div className="mr-1 w-32">
        <Button>Filtrele</Button>
      </div>
      <div className="mr-1">
        <Dropdown />
      </div>
      <div>
        <SearchInput />
      </div>
    </div>
  );
};
