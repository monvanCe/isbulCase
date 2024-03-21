import React, { useEffect, useState } from 'react';
import { searchIcon } from '../assets/searchıcon';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/actions';

export const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <div className="w-[200px] border rounded-sm border-lightBlue flex items-center">
      <input
        type="text"
        placeholder={'Ara...'}
        className="w-32 px-4 py-2 outline-none text-lightBlue cursor-pointer text-sm rounded-md flex-1"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <div>
        <img src={searchIcon} alt="searchIcon" className="w-4 mr-2" />
      </div>
    </div>
  );
};
